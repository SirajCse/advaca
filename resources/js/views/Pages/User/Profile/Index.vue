<script setup>
// /user/profile — old Profile/Index.vue: a single "Name" input saved via
// POST user/profile (updateProfile). Nothing else — 1:1.
import { onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/stores/auth'
import { trans } from '@/spec/lang'
import http from '@/lib/http'

const auth = useAuthStore()
const processing = ref(false)
const errors = ref({})
const form = reactive({ name: '' })

onMounted(async () => {
  if (!auth.ready) await auth.init()
  form.name = auth.user?.profile?.name || ''
})

async function save() {
  processing.value = true
  errors.value = {}
  try {
    await http.post('/app/user/profile', { name: form.name })
    Swal.fire({
      icon: 'success', title: 'Success', text: 'Profile updated.',
      toast: true, position: 'top-end', timer: 3000, showConfirmButton: false,
    })
    await auth.fetchUser()
  } catch (e) {
    errors.value = e?.response?.data?.errors || {}
  } finally {
    processing.value = false
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="save">
    <div class="space-y-1.5">
      <Label for="profile-name">{{ trans('user.profile.props.name') !== 'user.profile.props.name' ? trans('user.profile.props.name') : 'Name' }}</Label>
      <Input id="profile-name" v-model="form.name" type="text" autofocus />
      <p v-if="errors.name" class="text-xs text-destructive">{{ Array.isArray(errors.name) ? errors.name[0] : errors.name }}</p>
    </div>
    <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save' }}</Button>
  </form>
</template>
