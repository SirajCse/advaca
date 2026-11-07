<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { registerUser } from '@/api/auth'

const router = useRouter()
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  contact_number: '',
  username: '',
  password: '',
  terms_and_conditions: false,
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
    error.value = e.toastMessage || 'Registration failed. Please check the form.'
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
        <div class="grid grid-cols-2 gap-3">
          <div class="space-y-1.5">
            <Label for="first_name">First name</Label>
            <Input id="first_name" v-model="form.first_name" required />
          </div>
          <div class="space-y-1.5">
            <Label for="last_name">Last name</Label>
            <Input id="last_name" v-model="form.last_name" />
          </div>
        </div>
        <div class="space-y-1.5">
          <Label for="email">Email</Label>
          <Input id="email" v-model="form.email" type="email" required />
        </div>
        <div class="space-y-1.5">
          <Label for="contact_number">Contact number</Label>
          <Input id="contact_number" v-model="form.contact_number" type="tel" />
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
        <label class="flex items-center gap-2 text-sm text-muted-foreground">
          <Switch v-model="form.terms_and_conditions" />
          I agree to the terms and conditions
        </label>
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
