<!--
  Page: Config/Feature/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Feature" :navs="navs">
      <PageHeaderAction base="config.feature" title="Feature" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Feature settings</CardTitle>
            <CardDescription>Configure Feature options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_todo">Enable todo</Label>
          </div>
          <Switch id="enable_todo" v-model="form.enable_todo" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_backup">Enable backup</Label>
          </div>
          <Switch id="enable_backup" v-model="form.enable_backup" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_activity_log">Enable activity log</Label>
          </div>
          <Switch id="enable_activity_log" v-model="form.enable_activity_log" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_online_registration">Enable online registration</Label>
          </div>
          <Switch id="enable_online_registration" v-model="form.enable_online_registration" />
        </div>

        <div class="space-y-1.5">
          <Label for="online_registration_instruction">Online registration instruction<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="online_registration_instruction" v-model="form.online_registration_instruction" type="text" :class="errors.online_registration_instruction ? 'border-destructive' : ''" />
          <p v-if="errors.online_registration_instruction" class="text-xs text-destructive">{{ String(errors.online_registration_instruction[0] || errors.online_registration_instruction) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_post">Enable post</Label>
          </div>
          <Switch id="enable_post" v-model="form.enable_post" />
        </div>

        <div class="space-y-1.5">
          <Label for="online_registration_mandatory_upload_field">Online registration mandatory upload field<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="online_registration_mandatory_upload_field" v-model="form.online_registration_mandatory_upload_field" type="text" :class="errors.online_registration_mandatory_upload_field ? 'border-destructive' : ''" />
          <p v-if="errors.online_registration_mandatory_upload_field" class="text-xs text-destructive">{{ String(errors.online_registration_mandatory_upload_field[0] || errors.online_registration_mandatory_upload_field) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="online_registration_version">Online registration version<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="online_registration_version" v-model="form.online_registration_version" type="text" :class="errors.online_registration_version ? 'border-destructive' : ''" />
          <p v-if="errors.online_registration_version" class="text-xs text-destructive">{{ String(errors.online_registration_version[0] || errors.online_registration_version) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_guest_payment">Enable guest payment</Label>
          </div>
          <Switch id="enable_guest_payment" v-model="form.enable_guest_payment" />
        </div>

        <div class="space-y-1.5">
          <Label for="guest_payment_instruction">Guest payment instruction<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="guest_payment_instruction" v-model="form.guest_payment_instruction" type="text" :class="errors.guest_payment_instruction ? 'border-destructive' : ''" />
          <p v-if="errors.guest_payment_instruction" class="text-xs text-destructive">{{ String(errors.guest_payment_instruction[0] || errors.guest_payment_instruction) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_job_application">Enable job application</Label>
          </div>
          <Switch id="enable_job_application" v-model="form.enable_job_application" />
        </div>

        <div class="space-y-1.5">
          <Label for="job_application_instruction">Job application instruction<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="job_application_instruction" v-model="form.job_application_instruction" type="text" :class="errors.job_application_instruction ? 'border-destructive' : ''" />
          <p v-if="errors.job_application_instruction" class="text-xs text-destructive">{{ String(errors.job_application_instruction[0] || errors.job_application_instruction) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_transfer_certificate_verification">Enable transfer certificate verification</Label>
          </div>
          <Switch id="enable_transfer_certificate_verification" v-model="form.enable_transfer_certificate_verification" />
        </div>

        <div class="space-y-1.5">
          <Label for="transfer_certificate_verification_instruction">Transfer certificate verification instruction<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="transfer_certificate_verification_instruction" v-model="form.transfer_certificate_verification_instruction" type="text" :class="errors.transfer_certificate_verification_instruction ? 'border-destructive' : ''" />
          <p v-if="errors.transfer_certificate_verification_instruction" class="text-xs text-destructive">{{ String(errors.transfer_certificate_verification_instruction[0] || errors.transfer_certificate_verification_instruction) }}</p>
        </div>


            <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
          </CardContent>
          <div class="flex items-center justify-end gap-2 border-t p-4">
            <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save settings' }}</Button>
          </div>
        </Card>
      </form>
    </ParentTransition>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormSelect from '@/views/Components/FormSelect.vue'
import { storeAppConfig, getAppConfig } from '@/api/config'

const title = 'Feature'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Feature' },
  ]

const form = reactive({
    enable_todo: false,
    enable_backup: false,
    enable_activity_log: false,
    enable_online_registration: false,
    online_registration_instruction: "",
    enable_post: false,
    online_registration_mandatory_upload_field: "",
    online_registration_version: "",
    enable_guest_payment: false,
    guest_payment_instruction: "",
    enable_job_application: false,
    job_application_instruction: "",
    enable_transfer_certificate_verification: false,
    transfer_certificate_verification_instruction: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.feature ?? data?.feature
    if (section && typeof section === 'object') {
      Object.keys(form).forEach((k) => {
        if (section[k] !== undefined && section[k] !== null) {
          if (typeof form[k] === 'boolean') form[k] = !!section[k]
          else form[k] = section[k]
        }
      })
    }
  } catch {}
  initialized.value = true
}

async function save() {
  processing.value = true
  errors.value = {}
  submitError.value = ''
  try {
    await storeAppConfig({ feature: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Feature settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
