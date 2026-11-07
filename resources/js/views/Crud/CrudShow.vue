<template>
  <div class="space-y-4">
    <PageHeader :title="pageTitle" :navs="navs">
      <template #default>
        <Button variant="outline" size="sm" @click="goEdit">
          <Pencil class="mr-1.5 h-4 w-4" /> {{ trans('global.edit', { attribute: route.meta.singularLabel || entity.value.label || 'record' }) }}
        </Button>
      </template>
    </PageHeader>

    <ParentTransition :visibility="initialized">
      <Card class="rounded-lg border shadow-sm">
        <CardContent class="p-6">
          <div v-if="loading" class="space-y-3">
            <Skeleton v-for="i in 6" :key="i" class="h-8 w-full" />
          </div>
          <div v-else class="grid gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
            <div v-for="f in visibleFields" :key="f.n" class="min-w-0">
              <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">{{ f.l }}</dt>
              <dd class="mt-0.5 break-words text-sm text-foreground">
                {{ displayValue(record?.[f.n]) || '—' }}
              </dd>
            </div>
          </div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Pencil } from 'lucide-vue-next'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { trans } from '@/spec/lang'
import { createCrudApi } from '@/api/crud'

const route = useRoute()
const router = useRouter()

const entity = computed(() => route.meta.entity || {})
const pageTitle = computed(() => route.meta.pageTitle || `${trans('global.detail', { attribute: entity.value.label || '' })}`.trim())
const loading = ref(true)
const initialized = ref(false)
const record = ref({})

const visibleFields = computed(() =>
  (entity.value.fields || []).filter((f) => !['password', 'password_confirmation'].includes(f.n)),
)

function displayValue(v) {
  if (v === null || v === undefined) return ''
  if (typeof v === 'boolean') return v ? 'Yes' : 'No'
  if (typeof v === 'object') return v.label || v.name || v.title || ''
  return String(v)
}

const api = createCrudApi(entity.value.endpoints || {})

onMounted(async () => {
  if (entity.value.endpoints?.show) {
    try {
      const data = await api.show(route.params.uuid)
      record.value = data?.item || data?.record || data || {}
    } catch { /* handled */ }
  }
  loading.value = false
  initialized.value = true
})

function goEdit() {
  const n = String(route.name || '')
  const base = n.endsWith('Show') ? n.slice(0, -4) : n
  router.push({ name: base + 'Edit', params: { uuid: route.params.uuid } })
}

const navs = computed(() => route.meta.navs || [])
</script>
