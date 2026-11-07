<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import FormSelect from '@/views/Components/FormSelect.vue'

const users = ref([])
const search = ref('')
const user = ref('')
const selected = ref([])
const options = ref([])

async function searchUsers() {
  if (!search.value) return
  try {
    const { data } = await http.get('/app/teams/1/permissions/user/search', { params: { q: search.value } })
    users.value = (data || []).map((u) => ({ value: String(u.uuid || u.id), label: u.name || u.username }))
  } catch {}
}

async function save() {
  try {
    await http.post('/app/teams/1/permissions/user/assign', { user: user.value, permissions: selected.value })
    Swal.fire({ icon: 'success', title: 'Saved', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch {}
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="User Permissions" :navs="[{ label: 'Team', path: '/team' }, { label: 'User Permissions' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Assign permissions to user</CardTitle>
        <CardDescription>Search a user, then assign additional permissions</CardDescription>
      </CardHeader>
      <CardContent class="max-w-xl space-y-4">
        <div class="space-y-1.5">
          <Label>Search user</Label>
          <Input v-model="search" placeholder="Type name or username…" @input="searchUsers" />
        </div>
        <FormSelect v-model="user" :options="users" label="User" />
        <Button :disabled="!user" @click="save">Save assignment</Button>
      </CardContent>
    </Card>
  </div>
</template>
