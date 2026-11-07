<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import { changePassword } from '@/api/auth'

const processing = ref(false)
const form = reactive({ current_password: '', new_password: '', confirm_new_password: '' })

async function save() {
  processing.value = true
  try {
    const { data } = await changePassword({ ...form })
    Swal.fire({ icon: 'success', title: 'Updated', text: data?.message || 'Password changed.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    form.current_password = form.new_password = form.confirm_new_password = ''
  } catch {}
  processing.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Change Password" :navs="[{ label: 'User' }, { label: 'Change Password' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Change password</CardTitle>
        <CardDescription>Use a strong, unique password</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="max-w-md space-y-4" @submit.prevent="save">
          <div class="space-y-1.5">
            <Label for="cp">Current password</Label>
            <Input id="cp" v-model="form.current_password" type="password" required />
          </div>
          <div class="space-y-1.5">
            <Label for="np">New password</Label>
            <Input id="np" v-model="form.new_password" type="password" required />
          </div>
          <div class="space-y-1.5">
            <Label for="cnp">Confirm new password</Label>
            <Input id="cnp" v-model="form.confirm_new_password" type="password" required />
          </div>
          <Button type="submit" :disabled="processing">{{ processing ? 'Updating…' : 'Update password' }}</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
