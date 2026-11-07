<!--
  Page: Config/Mail/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Mail" :navs="navs">
      <PageHeaderAction base="config.mail" title="Mail" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Mail settings</CardTitle>
            <CardDescription>Configure Mail options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="space-y-1.5">
          <Label for="driver">Driver<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="driver" v-model="form.driver" type="text" :class="errors.driver ? 'border-destructive' : ''" />
          <p v-if="errors.driver" class="text-xs text-destructive">{{ String(errors.driver[0] || errors.driver) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="from_name">From name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="from_name" v-model="form.from_name" type="text" :class="errors.from_name ? 'border-destructive' : ''" />
          <p v-if="errors.from_name" class="text-xs text-destructive">{{ String(errors.from_name[0] || errors.from_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="from_address">From address<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="from_address" v-model="form.from_address" type="text" :class="errors.from_address ? 'border-destructive' : ''" />
          <p v-if="errors.from_address" class="text-xs text-destructive">{{ String(errors.from_address[0] || errors.from_address) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="smtp_username">Smtp username<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="smtp_username" v-model="form.smtp_username" type="text" :class="errors.smtp_username ? 'border-destructive' : ''" />
          <p v-if="errors.smtp_username" class="text-xs text-destructive">{{ String(errors.smtp_username[0] || errors.smtp_username) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="smtp_password">Smtp password<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="smtp_password" v-model="form.smtp_password" type="password" :class="errors.smtp_password ? 'border-destructive' : ''" />
          <p v-if="errors.smtp_password" class="text-xs text-destructive">{{ String(errors.smtp_password[0] || errors.smtp_password) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="mailgun_domain">Mailgun domain<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="mailgun_domain" v-model="form.mailgun_domain" type="text" :class="errors.mailgun_domain ? 'border-destructive' : ''" />
          <p v-if="errors.mailgun_domain" class="text-xs text-destructive">{{ String(errors.mailgun_domain[0] || errors.mailgun_domain) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="mailgun_secret">Mailgun secret<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="mailgun_secret" v-model="form.mailgun_secret" type="password" :class="errors.mailgun_secret ? 'border-destructive' : ''" />
          <p v-if="errors.mailgun_secret" class="text-xs text-destructive">{{ String(errors.mailgun_secret[0] || errors.mailgun_secret) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="mailgun_endpoint">Mailgun endpoint<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="mailgun_endpoint" v-model="form.mailgun_endpoint" type="text" :class="errors.mailgun_endpoint ? 'border-destructive' : ''" />
          <p v-if="errors.mailgun_endpoint" class="text-xs text-destructive">{{ String(errors.mailgun_endpoint[0] || errors.mailgun_endpoint) }}</p>
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

const title = 'Mail'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Mail' },
  ]

const form = reactive({
    driver: "",
    from_name: "",
    from_address: "",
    smtp_username: "",
    smtp_password: "",
    mailgun_domain: "",
    mailgun_secret: "",
    mailgun_endpoint: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.mail ?? data?.mail
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
    await storeAppConfig({ mail: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Mail settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
