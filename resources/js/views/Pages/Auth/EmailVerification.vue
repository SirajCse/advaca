<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { registerVerify } from '@/api/auth'

const router = useRouter()
const email = ref('')
const code = ref('')
const processing = ref(false)

async function submit() {
  processing.value = true
  try {
    await registerVerify({ email: email.value, code: code.value })
    Swal.fire({ icon: 'success', title: 'Email verified', text: 'You can now login.' })
    router.push('/login')
  } catch {}
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-xl">Verify email</CardTitle>
      <CardDescription>Enter the verification code sent to your email</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="space-y-4" @submit.prevent="submit">
        <div class="space-y-1.5">
          <Label for="email">Email</Label>
          <Input id="email" v-model="email" type="email" required />
        </div>
        <div class="space-y-1.5">
          <Label for="code">Verification code</Label>
          <Input id="code" v-model="code" required />
        </div>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Verifying…' : 'Verify' }}</Button>
      </form>
    </CardContent>
  </Card>
</template>
