<script setup>
import { onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import { useAuthStore } from '@/stores/auth'
import { updateProfile } from '@/api/auth'

const auth = useAuthStore()
const processing = ref(false)
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  contact_number: '',
  date_of_birth: '',
  gender: '',
})

onMounted(async () => {
  await auth.init()
  const u = auth.user || {}
  form.first_name = u.profile?.first_name || ''
  form.last_name = u.profile?.last_name || ''
  form.email = u.email || ''
  form.contact_number = u.profile?.contact_number || ''
  form.date_of_birth = (u.profile?.birth_date || '').slice(0, 10)
  form.gender = u.profile?.gender?.value || u.profile?.gender || ''
})

async function save() {
  processing.value = true
  try {
    const { data } = await updateProfile({ ...form })
    Swal.fire({ icon: 'success', title: 'Saved', text: data?.message || 'Profile updated.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    await auth.fetchUser()
  } catch {}
  processing.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Profile" :navs="[{ label: 'User' }, { label: 'Profile' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Profile details</CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="max-w-xl space-y-4" @submit.prevent="save">
          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1.5">
              <Label for="pfn">First name</Label>
              <Input id="pfn" v-model="form.first_name" />
            </div>
            <div class="space-y-1.5">
              <Label for="pln">Last name</Label>
              <Input id="pln" v-model="form.last_name" />
            </div>
          </div>
          <div class="space-y-1.5">
            <Label for="pemail">Email</Label>
            <Input id="pemail" v-model="form.email" type="email" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1.5">
              <Label for="pcn">Contact number</Label>
              <Input id="pcn" v-model="form.contact_number" type="tel" />
            </div>
            <div class="space-y-1.5">
              <Label for="pdob">Date of birth</Label>
              <Input id="pdob" v-model="form.date_of_birth" type="date" />
            </div>
          </div>
          <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save changes' }}</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
