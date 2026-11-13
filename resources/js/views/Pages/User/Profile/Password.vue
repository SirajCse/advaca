<script setup>
// /user/password — old Profile/Password.vue 1:1: current password, new password
// and confirmation, saved via POST user/password (changePassword).
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { KeyRound } from 'lucide-vue-next'
import { trans } from '@/spec/lang'
import http from '@/lib/http'

const router = useRouter()
const processing = ref(false)
const errors = ref({})
const form = reactive({
  currentPassword: '',
  newPassword: '',
  newPasswordConfirmation: '',
})

async function save() {
  processing.value = true
  errors.value = {}
  try {
    await http.post('/app/user/password', {
      current_password: form.currentPassword,
      new_password: form.newPassword,
      new_password_confirmation: form.newPasswordConfirmation,
    })
    Swal.fire({
      icon: 'success', title: 'Success', text: 'Password changed.',
      toast: true, position: 'top-end', timer: 3000, showConfirmButton: false,
    })
    if (router.hasRoute('UserProfile')) router.push({ name: 'UserProfile' })
  } catch (e) {
    errors.value = e?.response?.data?.errors || {}
  } finally {
    processing.value = false
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="save">
    <div class="grid gap-4 md:grid-cols-3">
      <div class="space-y-1.5">
        <Label for="cur-pass">{{ trans('auth.password.props.current_password') !== 'auth.password.props.current_password' ? trans('auth.password.props.current_password') : 'Current password' }}</Label>
        <div class="relative">
          <KeyRound class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="cur-pass" v-model="form.currentPassword" type="password" class="pl-9" autofocus />
        </div>
        <p v-if="errors.current_password || errors.currentPassword" class="text-xs text-destructive">{{ errors.current_password?.[0] || errors.currentPassword }}</p>
      </div>
      <div class="space-y-1.5">
        <Label for="new-pass">{{ trans('auth.password.props.new_password') !== 'auth.password.props.new_password' ? trans('auth.password.props.new_password') : 'New password' }}</Label>
        <div class="relative">
          <KeyRound class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="new-pass" v-model="form.newPassword" type="password" class="pl-9" />
        </div>
        <p v-if="errors.new_password || errors.newPassword" class="text-xs text-destructive">{{ errors.new_password?.[0] || errors.newPassword }}</p>
      </div>
      <div class="space-y-1.5">
        <Label for="new-pass-c">{{ trans('auth.password.props.new_password_confirmation') !== 'auth.password.props.new_password_confirmation' ? trans('auth.password.props.new_password_confirmation') : 'Confirm new password' }}</Label>
        <div class="relative">
          <KeyRound class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="new-pass-c" v-model="form.newPasswordConfirmation" type="password" class="pl-9" />
        </div>
        <p v-if="errors.new_password_confirmation || errors.newPasswordConfirmation" class="text-xs text-destructive">{{ errors.new_password_confirmation?.[0] || errors.newPasswordConfirmation }}</p>
      </div>
    </div>
    <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save' }}</Button>
  </form>
</template>
