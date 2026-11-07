<script setup>
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import PageHeader from '@/views/Components/PageHeader.vue'
import FormSelect from '@/views/Components/FormSelect.vue'

const roles = ref([])
const role = ref('')
const permissions = ref([])
const selected = ref([])
const loading = ref(false)

onMounted(async () => {
  try {
    const { data } = await http.get('/app/teams')
    const team = (data?.data ?? [])[0]
    if (!team) return
    const res = await http.get(`/app/teams/${team.uuid}/permissions/pre-requisite`)
    roles.value = (res.data.roles || []).map((r) => ({ value: String(r.id ?? r.uuid), label: r.name }))
  } catch {}
})

async function loadPermissions() {
  if (!role.value) return
  loading.value = true
  try {
    const { data } = await http.get('/app/teams/1/permissions/pre-requisite')
    permissions.value = Object.entries(data.permissions || {}).map(([group, list]) => ({
      group,
      items: (list || []).map((p) => ({ name: p.name || p, label: p.label || humanize(p.name || p) })),
    }))
    selected.value = data.role_permissions?.[role.value] || []
  } catch {}
  loading.value = false
}

function humanize(s) {
  return String(s).replace(/_/g, ' ')
}

async function save() {
  try {
    await http.post('/app/teams/1/permissions/role/assign', { role: role.value, permissions: selected.value })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Permissions updated.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch {}
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Role Permissions" :navs="[{ label: 'Team', path: '/team' }, { label: 'Permissions' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Assign permissions to role</CardTitle>
        <CardDescription>Select a role and toggle its permissions</CardDescription>
      </CardHeader>
      <CardContent class="space-y-5">
        <div class="flex max-w-md items-end gap-3">
          <FormSelect v-model="role" :options="roles" label="Role" @update:model-value="loadPermissions" />
          <Button :disabled="!role" @click="save">Save</Button>
        </div>
        <div v-if="loading" class="text-sm text-muted-foreground">Loading permissions…</div>
        <div v-else-if="permissions.length" class="grid gap-6 md:grid-cols-2">
          <div v-for="g in permissions" :key="g.group" class="space-y-2">
            <div class="text-sm font-semibold capitalize">{{ g.group.replace(/_/g, ' ') }}</div>
            <div class="grid grid-cols-2 gap-2">
              <label v-for="p in g.items" :key="p.name" class="flex items-center gap-2 text-sm">
                <Checkbox
                  :model-value="selected.includes(p.name)"
                  @update:model-value="(v) => v ? selected.push(p.name) : selected.splice(selected.indexOf(p.name), 1)"
                />
                {{ p.label }}
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
