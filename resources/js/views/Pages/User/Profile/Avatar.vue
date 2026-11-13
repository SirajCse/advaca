<script setup>
// /user/avatar — old Profile/Avatar.vue 1:1: a circular ImageUpload bound to
// user/profile/avatar (upload + remove), then refreshes the auth user.
import { computed, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/stores/auth'
import http from '@/lib/http'

const auth = useAuthStore()
const avatar = computed(() => auth.user?.avatar || '')
const uploading = ref(false)
const file = ref(null)

async function upload() {
  if (!file.value) return
  uploading.value = true
  try {
    const fd = new FormData()
    fd.append('avatar', file.value)
    if (file.value) fd.append('image', file.value)
    await http.post('/app/user/profile/avatar', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    Swal.fire({ icon: 'success', title: 'Success', text: 'Avatar updated.', toast: true, position: 'top-end', timer: 2500, showConfirmButton: false })
    await auth.fetchUser()
  } catch (e) {
    Swal.fire({ icon: 'error', title: 'Error', text: e?.response?.data?.message || 'upload failed', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } finally {
    uploading.value = false
  }
}

async function remove() {
  uploading.value = true
  try {
    await http.delete('/app/user/profile/avatar')
    Swal.fire({ icon: 'success', title: 'Success', text: 'Avatar removed.', toast: true, position: 'top-end', timer: 2500, showConfirmButton: false })
    await auth.fetchUser()
  } catch (e) {
    Swal.fire({ icon: 'error', title: 'Error', text: e?.response?.data?.message || 'could not remove', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } finally {
    uploading.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3">
    <div class="col-span-1 lg:col-start-2">
      <div class="flex flex-col items-center gap-4">
        <img
          v-if="avatar"
          :src="avatar"
          alt=""
          class="h-64 w-64 rounded-full object-cover"
        >
        <div
          v-else
          class="flex h-64 w-64 items-center justify-center rounded-full bg-muted text-5xl font-bold text-muted-foreground"
        >
          {{ (auth.user?.username || '?').slice(0, 1).toUpperCase() }}
        </div>
        <div class="w-full max-w-sm space-y-3">
          <Label for="avatar-file">{{ 'Avatar' }}</Label>
          <Input id="avatar-file" type="file" accept="image/*" :disabled="uploading" @change="file = $event.target.files?.[0] || null" />
          <div class="flex gap-3">
            <Button type="button" size="sm" :disabled="uploading || !file" @click="upload">
              {{ uploading ? 'Uploading…' : 'Upload' }}
            </Button>
            <Button type="button" size="sm" variant="destructive" :disabled="uploading || !avatar" @click="remove">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
