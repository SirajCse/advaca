<!--
  Page: Config/System/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="System" :navs="navs">
      <PageHeaderAction base="config.system" title="System" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>System settings</CardTitle>
            <CardDescription>Configure System options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="show_setup_wizard">Show setup wizard</Label>
          </div>
          <Switch id="show_setup_wizard" v-model="form.show_setup_wizard" />
        </div>

        <div class="space-y-1.5">
          <Label for="direction">Direction<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="direction" v-model="form.direction" type="text" :class="errors.direction ? 'border-destructive' : ''" />
          <p v-if="errors.direction" class="text-xs text-destructive">{{ String(errors.direction[0] || errors.direction) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="locale">Locale<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="locale" v-model="form.locale" type="text" :class="errors.locale ? 'border-destructive' : ''" />
          <p v-if="errors.locale" class="text-xs text-destructive">{{ String(errors.locale[0] || errors.locale) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="timezone">Timezone<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="timezone" v-model="form.timezone" type="text" :class="errors.timezone ? 'border-destructive' : ''" />
          <p v-if="errors.timezone" class="text-xs text-destructive">{{ String(errors.timezone[0] || errors.timezone) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="color_scheme">Color scheme<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="color_scheme" v-model="form.color_scheme" type="text" :class="errors.color_scheme ? 'border-destructive' : ''" />
          <p v-if="errors.color_scheme" class="text-xs text-destructive">{{ String(errors.color_scheme[0] || errors.color_scheme) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="date_format">Date format<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="date_format" v-model="form.date_format" type="text" :class="errors.date_format ? 'border-destructive' : ''" />
          <p v-if="errors.date_format" class="text-xs text-destructive">{{ String(errors.date_format[0] || errors.date_format) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="time_format">Time format<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="time_format" v-model="form.time_format" type="text" :class="errors.time_format ? 'border-destructive' : ''" />
          <p v-if="errors.time_format" class="text-xs text-destructive">{{ String(errors.time_format[0] || errors.time_format) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="per_page">Per page<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="per_page" v-model="form.per_page" type="text" :class="errors.per_page ? 'border-destructive' : ''" />
          <p v-if="errors.per_page" class="text-xs text-destructive">{{ String(errors.per_page[0] || errors.per_page) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="currency">Currency<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="currency" v-model="form.currency" type="text" :class="errors.currency ? 'border-destructive' : ''" />
          <p v-if="errors.currency" class="text-xs text-destructive">{{ String(errors.currency[0] || errors.currency) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="currencies">Currencies<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="currencies" v-model="form.currencies" type="text" :class="errors.currencies ? 'border-destructive' : ''" />
          <p v-if="errors.currencies" class="text-xs text-destructive">{{ String(errors.currencies[0] || errors.currencies) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="footer_credit">Footer credit<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="footer_credit" v-model="form.footer_credit" :rows="4" />
          <p v-if="errors.footer_credit" class="text-xs text-destructive">{{ String(errors.footer_credit[0] || errors.footer_credit) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="show_version_number">Show version number</Label>
          </div>
          <Switch id="show_version_number" v-model="form.show_version_number" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_dark_theme">Enable dark theme</Label>
          </div>
          <Switch id="enable_dark_theme" v-model="form.enable_dark_theme" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_mini_sidebar">Enable mini sidebar</Label>
          </div>
          <Switch id="enable_mini_sidebar" v-model="form.enable_mini_sidebar" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_maintenance_mode">Enable maintenance mode</Label>
          </div>
          <Switch id="enable_maintenance_mode" v-model="form.enable_maintenance_mode" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_setup_wizard">Enable setup wizard</Label>
          </div>
          <Switch id="enable_setup_wizard" v-model="form.enable_setup_wizard" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_print_preview">Enable print preview</Label>
          </div>
          <Switch id="enable_print_preview" v-model="form.enable_print_preview" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="show_scroll_buttons">Show scroll buttons</Label>
          </div>
          <Switch id="show_scroll_buttons" v-model="form.show_scroll_buttons" />
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

const title = 'System'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'System' },
  ]

const form = reactive({
    show_setup_wizard: false,
    direction: "",
    locale: "",
    timezone: "",
    color_scheme: "",
    date_format: "",
    time_format: "",
    per_page: "",
    currency: "",
    currencies: "",
    footer_credit: "",
    show_version_number: false,
    enable_dark_theme: false,
    enable_mini_sidebar: false,
    enable_maintenance_mode: false,
    enable_setup_wizard: false,
    enable_print_preview: false,
    show_scroll_buttons: false,
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.system ?? data?.system
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
    await storeAppConfig({ system: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'System settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
