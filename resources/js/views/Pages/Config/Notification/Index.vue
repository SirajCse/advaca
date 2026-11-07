<!--
  Page: Config/Notification/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Notification" :navs="navs">
      <PageHeaderAction base="config.notification" title="Notification" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Notification settings</CardTitle>
            <CardDescription>Configure Notification options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_notification">Enable notification</Label>
          </div>
          <Switch id="enable_notification" v-model="form.enable_notification" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_mail_notification">Enable mail notification</Label>
          </div>
          <Switch id="enable_mail_notification" v-model="form.enable_mail_notification" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_sms_notification">Enable sms notification</Label>
          </div>
          <Switch id="enable_sms_notification" v-model="form.enable_sms_notification" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_whatsapp_notification">Enable whatsapp notification</Label>
          </div>
          <Switch id="enable_whatsapp_notification" v-model="form.enable_whatsapp_notification" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_mobile_push_notification">Enable mobile push notification</Label>
          </div>
          <Switch id="enable_mobile_push_notification" v-model="form.enable_mobile_push_notification" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_guest_notification_bar">Enable guest notification bar</Label>
          </div>
          <Switch id="enable_guest_notification_bar" v-model="form.enable_guest_notification_bar" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_app_notification_bar">Enable app notification bar</Label>
          </div>
          <Switch id="enable_app_notification_bar" v-model="form.enable_app_notification_bar" />
        </div>

        <div class="space-y-1.5">
          <Label for="guest_notification_message">Guest notification message<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="guest_notification_message" v-model="form.guest_notification_message" type="text" :class="errors.guest_notification_message ? 'border-destructive' : ''" />
          <p v-if="errors.guest_notification_message" class="text-xs text-destructive">{{ String(errors.guest_notification_message[0] || errors.guest_notification_message) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_notification_message">App notification message<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="app_notification_message" v-model="form.app_notification_message" type="text" :class="errors.app_notification_message ? 'border-destructive' : ''" />
          <p v-if="errors.app_notification_message" class="text-xs text-destructive">{{ String(errors.app_notification_message[0] || errors.app_notification_message) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_pusher_notification">Enable pusher notification</Label>
          </div>
          <Switch id="enable_pusher_notification" v-model="form.enable_pusher_notification" />
        </div>

        <div class="space-y-1.5">
          <Label for="pusher_app_id">Pusher app id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="pusher_app_id" v-model="form.pusher_app_id" type="text" :class="errors.pusher_app_id ? 'border-destructive' : ''" />
          <p v-if="errors.pusher_app_id" class="text-xs text-destructive">{{ String(errors.pusher_app_id[0] || errors.pusher_app_id) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="pusher_app_key">Pusher app key<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="pusher_app_key" v-model="form.pusher_app_key" type="text" :class="errors.pusher_app_key ? 'border-destructive' : ''" />
          <p v-if="errors.pusher_app_key" class="text-xs text-destructive">{{ String(errors.pusher_app_key[0] || errors.pusher_app_key) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="pusher_app_secret">Pusher app secret<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="pusher_app_secret" v-model="form.pusher_app_secret" type="password" :class="errors.pusher_app_secret ? 'border-destructive' : ''" />
          <p v-if="errors.pusher_app_secret" class="text-xs text-destructive">{{ String(errors.pusher_app_secret[0] || errors.pusher_app_secret) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="pusher_app_cluster">Pusher app cluster<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="pusher_app_cluster" v-model="form.pusher_app_cluster" type="text" :class="errors.pusher_app_cluster ? 'border-destructive' : ''" />
          <p v-if="errors.pusher_app_cluster" class="text-xs text-destructive">{{ String(errors.pusher_app_cluster[0] || errors.pusher_app_cluster) }}</p>
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

const title = 'Notification'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Notification' },
  ]

const form = reactive({
    enable_notification: false,
    enable_mail_notification: false,
    enable_sms_notification: false,
    enable_whatsapp_notification: false,
    enable_mobile_push_notification: false,
    enable_guest_notification_bar: false,
    enable_app_notification_bar: false,
    guest_notification_message: "",
    app_notification_message: "",
    enable_pusher_notification: false,
    pusher_app_id: "",
    pusher_app_key: "",
    pusher_app_secret: "",
    pusher_app_cluster: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.notification ?? data?.notification
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
    await storeAppConfig({ notification: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Notification settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
