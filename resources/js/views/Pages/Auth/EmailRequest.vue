<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { registerEmail } from '@/api/auth'

const router = useRouter()
const email = ref('')
const processing = ref(false)

async function submit() {
  processing.value = true
  try {
    await registerEmail({ email: email.value })
    Swal.fire({ icon: 'success', title: 'Verification code sent', text: 'Check your email for the verification code.' })
    router.push('/verify-email')
  } catch {}
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-xl">Verify email</CardTitle>
      <CardDescription>We will send a verification code to your email</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="space-y-4" @submit.prevent="submit">
        <div class="space-y-1.5">
          <Label for="email">Email</Label>
          <Input id="email" v-model="email" type="email" required />
        </div>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Sending…' : 'Send code' }}</Button>
      </form>
    </CardContent>
  </Card>
</template>
