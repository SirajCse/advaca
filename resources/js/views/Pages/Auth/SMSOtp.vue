<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { loginOtpRequest, loginOtpConfirm } from '@/api/auth'

const router = useRouter()
const step = ref('request')
const form = reactive({ contact_number: '', otp: '' })
const processing = ref(false)

async function requestOtp() {
  processing.value = true
  try {
    await loginOtpRequest({ contact_number: form.contact_number })
    step.value = 'confirm'
  } catch {}
  processing.value = false
}

async function confirmOtp() {
  processing.value = true
  try {
    await loginOtpConfirm({ ...form })
    Swal.fire({ icon: 'success', title: 'Logged in', toast: true, position: 'top-end', timer: 2500, showConfirmButton: false })
    window.location.href = '/app/dashboard'
  } catch {}
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle class="text-xl">OTP login</CardTitle>
      <CardDescription>Sign in with a one time password sent to your phone</CardDescription>
    </CardHeader>
    <CardContent>
      <form v-if="step === 'request'" class="space-y-4" @submit.prevent="requestOtp">
        <div class="space-y-1.5">
          <Label for="contact">Contact number</Label>
          <Input id="contact" v-model="form.contact_number" type="tel" required />
        </div>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Sending…' : 'Send OTP' }}</Button>
      </form>
      <form v-else class="space-y-4" @submit.prevent="confirmOtp">
        <div class="space-y-1.5">
          <Label for="otp">OTP</Label>
          <Input id="otp" v-model="form.otp" required />
        </div>
        <Button type="submit" class="w-full" :disabled="processing">{{ processing ? 'Verifying…' : 'Verify & login' }}</Button>
        <p class="text-center text-sm text-muted-foreground">
          <button type="button" class="text-primary hover:underline" @click="step = 'request'">Change number</button>
        </p>
      </form>
    </CardContent>
  </Card>
</template>
