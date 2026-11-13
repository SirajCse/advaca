<script setup>
// /user/account — old Profile/Account.vue 1:1: username + email inputs with the
// email-verification OTP flow. When the backend responds with
// { existing_email_verification: true } the "existing email OTP" input shows;
// { new_email_verification: true } shows the new-email OTP input; the submit
// action switches updateAccount -> verifyAccount accordingly.
import { computed, onMounted, reactive, ref } from 'vue'
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
const needsVerify = ref(false)
const needExistingOtp = ref(false)
const needNewOtp = ref(false)
const isSuperAdmin = computed(() => Boolean(auth.user?.is_super_admin ?? auth.user?.isSuperAdmin))
const hasVerification = computed(() => needExistingOtp.value || needNewOtp.value)

const form = reactive({
  username: '',
  email: '',
  existingEmailOtp: '',
  newEmailOtp: '',
})

onMounted(async () => {
  if (!auth.ready) await auth.init()
  form.username = auth.user?.username || ''
  form.email = auth.user?.email || ''
})

async function save() {
  processing.value = true
  errors.value = {}
  try {
    const action = needsVerify.value ? '/app/user/profile/verify' : '/app/user/profile/account'
    const { data } = await http.post(action, {
      username: form.username,
      email: form.email,
      existing_email_otp: form.existingEmailOtp || undefined,
      new_email_otp: form.newEmailOtp || undefined,
    })
    // old after-submit behaviour
    if (data?.existing_email_verification) {
      needsVerify.value = true
      needExistingOtp.value = true
    }
    if (data?.new_email_verification) {
      needsVerify.value = true
      needNewOtp.value = true
    }
    if (data?.profile_updated) {
      needsVerify.value = false
      needExistingOtp.value = false
      needNewOtp.value = false
      form.existingEmailOtp = ''
      form.newEmailOtp = ''
      Swal.fire({
        icon: 'success', title: 'Success', text: 'Account updated.',
        toast: true, position: 'top-end', timer: 3000, showConfirmButton: false,
      })
    } else if (needsVerify.value) {
      Swal.fire({
        icon: 'info', title: 'Verification required', text: 'Enter the OTP sent to your email addresses.',
        toast: true, position: 'top-end', timer: 4000, showConfirmButton: false,
      })
    }
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
    <div class="grid gap-4 md:grid-cols-3">
      <div class="space-y-1.5">
        <Label for="acc-username">{{ trans('user.profile.props.username') !== 'user.profile.props.username' ? trans('user.profile.props.username') : 'Username' }}</Label>
        <Input id="acc-username" v-model="form.username" type="text" :disabled="hasVerification || isSuperAdmin" />
        <p v-if="errors.username" class="text-xs text-destructive">{{ Array.isArray(errors.username) ? errors.username[0] : errors.username }}</p>
      </div>
      <div class="space-y-1.5">
        <Label for="acc-email">{{ trans('user.profile.props.email') !== 'user.profile.props.email' ? trans('user.profile.props.email') : 'Email' }}</Label>
        <Input id="acc-email" v-model="form.email" type="text" :disabled="hasVerification" />
        <p v-if="errors.email" class="text-xs text-destructive">{{ Array.isArray(errors.email) ? errors.email[0] : errors.email }}</p>
      </div>
    </div>
    <div v-if="needExistingOtp" class="space-y-1.5 md:w-2/3">
      <Label for="acc-otp1">{{ 'Verification OTP (existing email)' }}</Label>
      <Input id="acc-otp1" v-model="form.existingEmailOtp" type="password" />
      <p v-if="errors.existingEmailOtp || errors.existing_email_otp" class="text-xs text-destructive">{{ errors.existingEmailOtp || errors.existing_email_otp }}</p>
    </div>
    <div v-if="needNewOtp" class="space-y-1.5 md:w-2/3">
      <Label for="acc-otp2">{{ 'Verification OTP (new email)' }}</Label>
      <Input id="acc-otp2" v-model="form.newEmailOtp" type="password" />
      <p v-if="errors.newEmailOtp || errors.new_email_otp" class="text-xs text-destructive">{{ errors.newEmailOtp || errors.new_email_otp }}</p>
    </div>
    <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save' }}</Button>
  </form>
</template>
