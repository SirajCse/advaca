<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  remember_me: false,
})
const processing = ref(false)
const error = ref('')

async function submit() {
  processing.value = true
  error.value = ''
  try {
    // Backend LoginRequest expects the `email` field (it accepts a username
    // OR an email address in it) and returns a bearer token when
    // `device_name` is provided — token auth keeps the SPA working on any
    // deployment without session/CSRF configuration.
    const payload = {
      email: form.username,
      password: form.password,
      remember_me: form.remember_me,
      device_name: 'web',
    }
    const data = await auth.login(payload)
    if (data.two_factor_security) {
      // Backend sets a pending 2FA session flag: every authenticated
      // endpoint answers 401 until POST /auth/security confirms the code.
      // (Note: in the v5.5.3 backend the OTP notification job is commented
      // out, so the code is never delivered — two factor security must be
      // disabled in the backend config, or the notification job restored.)
      Swal.fire({
        icon: 'warning',
        title: 'Two factor security is enabled',
        text: 'This backend build cannot deliver the security code (the notification job is disabled). Please disable auth.enable_two_factor_security in the backend config or restore the code-delivery job.',
        confirmButtonText: 'OK',
      })
      auth.clear()
      processing.value = false
      return
    }
    Swal.fire({ icon: 'success', title: 'Logged in', toast: true, position: 'top-end', timer: 2500, showConfirmButton: false })
    router.push(route.query.redirect && route.query.redirect !== '/' ? route.query.redirect : '/dashboard')
  } catch (e) {
    error.value = e.toastMessage || e?.response?.data?.message || 'Invalid credentials. Please try again.'
  }
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-xl">Welcome back</CardTitle>
      <CardDescription>Sign in to your account to continue</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <form class="space-y-4" @submit.prevent="submit">
        <div class="space-y-1.5">
          <Label for="username">Username or email</Label>
          <Input id="username" v-model="form.username" placeholder="username" autocomplete="username" required />
        </div>
        <div class="space-y-1.5">
          <Label for="password">Password</Label>
          <Input id="password" v-model="form.password" type="password" placeholder="••••••••" autocomplete="current-password" required />
        </div>
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 text-sm text-muted-foreground">
            <Switch v-model="form.remember_me" />
            Remember me
          </label>
          <RouterLink to="/password" class="text-sm text-primary hover:underline">Forgot password?</RouterLink>
        </div>
        <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Signing in…' : 'Sign in' }}</Button>
      </form>
      <p class="text-center text-sm text-muted-foreground">
        Don't have an account?
        <RouterLink to="/register" class="text-primary hover:underline">Register</RouterLink>
      </p>
    </CardContent>
  </Card>
</template>
