<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { requestPasswordReset } from '@/api/auth'

const router = useRouter()
const email = ref('')
const processing = ref(false)

async function submit() {
  processing.value = true
  try {
    const { data } = await requestPasswordReset({ email: email.value })
    Swal.fire({ icon: 'success', title: 'Request sent', text: data?.message || 'Password reset instructions sent.' })
    router.push('/login')
  } catch {}
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-xl">Reset password</CardTitle>
      <CardDescription>Enter your account email to receive reset instructions</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="space-y-4" @submit.prevent="submit">
        <div class="space-y-1.5">
          <Label for="email">Email</Label>
          <Input id="email" v-model="email" type="email" required />
        </div>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Sending…' : 'Send reset link' }}</Button>
        <p class="text-center text-sm text-muted-foreground">
          <RouterLink to="/login" class="text-primary hover:underline">Back to login</RouterLink>
        </p>
      </form>
    </CardContent>
  </Card>
</template>
