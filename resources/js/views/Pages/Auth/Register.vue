<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { registerUser } from '@/api/auth'

const router = useRouter()
// Backend RegisterRequest expects: name, email, username,
// password (+ password_confirmation with `same:` rule).
const form = reactive({
  name: '',
  email: '',
  username: '',
  password: '',
  password_confirmation: '',
})
const processing = ref(false)
const error = ref('')

async function submit() {
  processing.value = true
  error.value = ''
  try {
    const { data } = await registerUser({ ...form })
    Swal.fire({ icon: 'success', title: 'Registered', text: data?.message || 'Account created. Please login.', timer: 3500, showConfirmButton: true })
    router.push('/login')
  } catch (e) {
    error.value = e.toastMessage || e?.response?.data?.message || 'Registration failed. Please check the form.'
  }
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-xl">Create account</CardTitle>
      <CardDescription>Register to get started</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <form class="space-y-4" @submit.prevent="submit">
        <div class="space-y-1.5">
          <Label for="name">Full name</Label>
          <Input id="name" v-model="form.name" required />
        </div>
        <div class="space-y-1.5">
          <Label for="email">Email</Label>
          <Input id="email" v-model="form.email" type="email" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="space-y-1.5">
            <Label for="reg-username">Username</Label>
            <Input id="reg-username" v-model="form.username" required />
          </div>
          <div class="space-y-1.5">
            <Label for="reg-password">Password</Label>
            <Input id="reg-password" v-model="form.password" type="password" required />
          </div>
        </div>
        <div class="space-y-1.5">
          <Label for="reg-password-confirm">Confirm password</Label>
          <Input id="reg-password-confirm" v-model="form.password_confirmation" type="password" required />
        </div>
        <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Creating…' : 'Create account' }}</Button>
      </form>
      <p class="text-center text-sm text-muted-foreground">
        Already registered?
        <RouterLink to="/login" class="text-primary hover:underline">Login</RouterLink>
      </p>
    </CardContent>
  </Card>
</template>
