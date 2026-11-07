<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { forceChangePassword } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()
const processing = ref(false)
const form = reactive({ password: '', confirm_password: '' })

async function submit() {
  processing.value = true
  try {
    await forceChangePassword({ ...form })
    Swal.fire({ icon: 'success', title: 'Password updated', text: 'Please login with your new password.' })
    auth.clear()
    router.push('/login')
  } catch {}
  processing.value = false
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Change your password</CardTitle>
      <CardDescription>For security reasons you must change your password before continuing.</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="max-w-md space-y-4" @submit.prevent="submit">
        <div class="space-y-1.5">
          <Label for="np">New password</Label>
          <Input id="np" v-model="form.password" type="password" required />
        </div>
        <div class="space-y-1.5">
          <Label for="cp">Confirm password</Label>
          <Input id="cp" v-model="form.confirm_password" type="password" required />
        </div>
        <Button type="submit" :disabled="processing">{{ processing ? 'Updating…' : 'Update & continue' }}</Button>
      </form>
    </CardContent>
  </Card>
</template>
