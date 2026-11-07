<!--
  Page: Config/SMS/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Sms" :navs="navs">
      <PageHeaderAction base="config.sms" title="Sms" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Sms settings</CardTitle>
            <CardDescription>Configure Sms options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="space-y-1.5">
          <Label for="driver">Driver<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="driver" v-model="form.driver" type="text" :class="errors.driver ? 'border-destructive' : ''" />
          <p v-if="errors.driver" class="text-xs text-destructive">{{ String(errors.driver[0] || errors.driver) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="max_sms_per_queue">Max sms per queue<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="max_sms_per_queue" v-model="form.max_sms_per_queue" type="text" :class="errors.max_sms_per_queue ? 'border-destructive' : ''" />
          <p v-if="errors.max_sms_per_queue" class="text-xs text-destructive">{{ String(errors.max_sms_per_queue[0] || errors.max_sms_per_queue) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="sender_id">Sender id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="sender_id" v-model="form.sender_id" type="text" :class="errors.sender_id ? 'border-destructive' : ''" />
          <p v-if="errors.sender_id" class="text-xs text-destructive">{{ String(errors.sender_id[0] || errors.sender_id) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="test_number">Test number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="test_number" v-model="form.test_number" type="text" :class="errors.test_number ? 'border-destructive' : ''" />
          <p v-if="errors.test_number" class="text-xs text-destructive">{{ String(errors.test_number[0] || errors.test_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="test_template_id">Test template id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="test_template_id" v-model="form.test_template_id" type="text" :class="errors.test_template_id ? 'border-destructive' : ''" />
          <p v-if="errors.test_template_id" class="text-xs text-destructive">{{ String(errors.test_template_id[0] || errors.test_template_id) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="api_key">Api key<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="api_key" v-model="form.api_key" type="text" :class="errors.api_key ? 'border-destructive' : ''" />
          <p v-if="errors.api_key" class="text-xs text-destructive">{{ String(errors.api_key[0] || errors.api_key) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="api_secret">Api secret<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="api_secret" v-model="form.api_secret" type="password" :class="errors.api_secret ? 'border-destructive' : ''" />
          <p v-if="errors.api_secret" class="text-xs text-destructive">{{ String(errors.api_secret[0] || errors.api_secret) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="api_url">Api url<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="api_url" v-model="form.api_url" type="text" :class="errors.api_url ? 'border-destructive' : ''" />
          <p v-if="errors.api_url" class="text-xs text-destructive">{{ String(errors.api_url[0] || errors.api_url) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="api_method">Api method<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="api_method" v-model="form.api_method" type="text" :class="errors.api_method ? 'border-destructive' : ''" />
          <p v-if="errors.api_method" class="text-xs text-destructive">{{ String(errors.api_method[0] || errors.api_method) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="number_prefix">Number prefix<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="number_prefix" v-model="form.number_prefix" type="text" :class="errors.number_prefix ? 'border-destructive' : ''" />
          <p v-if="errors.number_prefix" class="text-xs text-destructive">{{ String(errors.number_prefix[0] || errors.number_prefix) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="sender_id_param">Sender id param<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="sender_id_param" v-model="form.sender_id_param" type="text" :class="errors.sender_id_param ? 'border-destructive' : ''" />
          <p v-if="errors.sender_id_param" class="text-xs text-destructive">{{ String(errors.sender_id_param[0] || errors.sender_id_param) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="receiver_param">Receiver param<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="receiver_param" v-model="form.receiver_param" type="text" :class="errors.receiver_param ? 'border-destructive' : ''" />
          <p v-if="errors.receiver_param" class="text-xs text-destructive">{{ String(errors.receiver_param[0] || errors.receiver_param) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="message_param">Message param<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="message_param" v-model="form.message_param" type="text" :class="errors.message_param ? 'border-destructive' : ''" />
          <p v-if="errors.message_param" class="text-xs text-destructive">{{ String(errors.message_param[0] || errors.message_param) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="template_id_param">Template id param<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="template_id_param" v-model="form.template_id_param" type="text" :class="errors.template_id_param ? 'border-destructive' : ''" />
          <p v-if="errors.template_id_param" class="text-xs text-destructive">{{ String(errors.template_id_param[0] || errors.template_id_param) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="api_headers">Api headers<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="api_headers" v-model="form.api_headers" type="text" :class="errors.api_headers ? 'border-destructive' : ''" />
          <p v-if="errors.api_headers" class="text-xs text-destructive">{{ String(errors.api_headers[0] || errors.api_headers) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="additional_params">Additional params<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="additional_params" v-model="form.additional_params" type="text" :class="errors.additional_params ? 'border-destructive' : ''" />
          <p v-if="errors.additional_params" class="text-xs text-destructive">{{ String(errors.additional_params[0] || errors.additional_params) }}</p>
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

const title = 'Sms'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Sms' },
  ]

const form = reactive({
    driver: "",
    max_sms_per_queue: "",
    sender_id: "",
    test_number: "",
    test_template_id: "",
    api_key: "",
    api_secret: "",
    api_url: "",
    api_method: "",
    number_prefix: "",
    sender_id_param: "",
    receiver_param: "",
    message_param: "",
    template_id_param: "",
    api_headers: "",
    additional_params: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.sms ?? data?.sms
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
    await storeAppConfig({ sms: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Sms settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
