<!--
  Page: Config/Module/Index.vue — 1:1 with the old app's Config → Module page
  (live audit 2026-11): module visibility toggles + ordering, saved via
  POST /app/config/module with { modules: [...] } (StoreModule action).
  Data source: GET /app/config/module-pre-requisite + current GET /app/config.
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Module" :navs="navs">
      <PageHeaderAction base="config.module" title="Module" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Module Configuration</CardTitle>
            <CardDescription>Toggle module visibility and reorder modules for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div v-for="(mod, mi) in modules" :key="mod.name" class="rounded-lg border p-4">
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <Switch :checked="!!mod.visibility" @update:checked="(v) => (mod.visibility = v)" />
                  <div>
                    <p class="text-sm font-medium">{{ mod.label }}</p>
                    <p class="text-xs text-muted-foreground">{{ (mod.children || []).length }} sub-modules</p>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <Button type="button" variant="ghost" size="sm" :disabled="mi === 0 || processing" @click="move(mi, -1)">↑</Button>
                  <Button type="button" variant="ghost" size="sm" :disabled="mi === modules.length - 1 || processing" @click="move(mi, 1)">↓</Button>
                </div>
              </div>
              <div v-if="(mod.children || []).length" class="mt-3 grid gap-2 border-t pt-3 sm:grid-cols-2 xl:grid-cols-3">
                <div v-for="child in mod.children" :key="child.name" class="flex items-center gap-2">
                  <Switch :checked="child.visibility !== false && mod.visibility !== false" @update:checked="(v) => (child.visibility = v)" />
                  <span class="text-sm" :class="mod.visibility === false ? 'text-muted-foreground' : ''">{{ child.label }}</span>
                </div>
              </div>
            </div>

            <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
          </CardContent>
          <div class="flex items-center justify-end gap-2 border-t p-4">
            <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save settings' }}</Button>
          </div>
        </Card>
      </form>
    </ParentTransition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import http from '@/lib/http'

const title = 'Module'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
  { label: 'Config' },
  { label: 'Module' },
]

const modules = ref([])

async function load() {
  try {
    const [pre, cur] = await Promise.all([
      http.get('/app/config/module-pre-requisite'),
      http.get('/app/config'),
    ])
    const current = Array.isArray(cur.data?.module) ? cur.data.module : []
    const list = pre.data?.modules || []
    // preserve saved ordering (position), then saved visibility
    const savedByName = new Map(current.map((m) => [m.name, m]))
    modules.value = list
      .map((m) => {
        const saved = savedByName.get(m.name)
        return {
          name: m.name,
          label: m.label,
          visibility: saved ? !!saved.visibility : m.visibility !== false,
          children: (m.children || []).map((c) => {
            const savedChild = saved ? (saved.children || []).find((sc) => sc.name === c.name) : null
            return { name: c.name, label: c.label, visibility: savedChild ? savedChild.visibility !== false : c.visibility !== false }
          }),
        }
      })
      .sort((a, b) => {
        const pa = savedByName.get(a.name)?.position ?? 9999
        const pb = savedByName.get(b.name)?.position ?? 9999
        return pa - pb
      })
  } catch {}
  initialized.value = true
}

function move(i, dir) {
  const j = i + dir
  if (j < 0 || j >= modules.value.length) return
  const next = [...modules.value]
  const [row] = next.splice(i, 1)
  next.splice(j, 0, row)
  modules.value = next
}

async function save() {
  processing.value = true
  errors.value = {}
  submitError.value = ''
  try {
    // StoreModule derives position from array order
    const payload = {
      modules: modules.value.map((m, i) => ({
        name: m.name,
        position: i,
        visibility: m.visibility !== false,
        children: (m.children || []).map((c) => ({ name: c.name, visibility: m.visibility !== false && c.visibility !== false })),
      })),
    }
    await http.post('/app/config/module', payload)
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Module settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
