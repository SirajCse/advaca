<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PageHeader from '@/views/Components/PageHeader.vue'
import { useAuthStore } from '@/stores/auth'
import { uploadAvatar } from '@/api/auth'

const auth = useAuthStore()
const file = ref(null)
const processing = ref(false)

async function upload() {
  if (!file.value) return
  processing.value = true
  try {
    const fd = new FormData()
    fd.append('avatar', file.value)
    const { data } = await uploadAvatar(fd)
    Swal.fire({ icon: 'success', title: 'Uploaded', text: data?.message || 'Avatar updated.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    await auth.fetchUser()
  } catch {}
  processing.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Avatar" :navs="[{ label: 'User' }, { label: 'Avatar' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Profile photo</CardTitle>
        <CardDescription>Upload a new avatar image (jpg/png)</CardDescription>
      </CardHeader>
      <CardContent class="flex items-center gap-6">
        <Avatar class="h-20 w-20">
          <AvatarImage v-if="auth.user?.avatar" :src="auth.user.avatar" />
          <AvatarFallback>{{ (auth.user?.profile?.name || 'U').slice(0, 2).toUpperCase() }}</AvatarFallback>
        </Avatar>
        <form class="space-y-3" @submit.prevent="upload">
          <Label for="avatar">Choose image</Label>
          <Input id="avatar" type="file" accept="image/*" @change="(e) => (file = e.target.files?.[0] ?? null)" />
          <Button type="submit" :disabled="processing || !file">{{ processing ? 'Uploading…' : 'Upload' }}</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
