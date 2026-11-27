<!--
  Page: Config/General/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="General" :navs="navs">
      <PageHeaderAction base="config.general" title="General" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>General settings</CardTitle>
            <CardDescription>Configure General options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div class="space-y-1.5">
          <Label for="app_name">App name<span class="text-destructive"> *</span></Label>
          <Input id="app_name" v-model="form.app_name" type="text" :class="errors.app_name ? 'border-destructive' : ''" />
          <p v-if="errors.app_name" class="text-xs text-destructive">{{ String(errors.app_name[0] || errors.app_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_email">Email<span class="text-destructive"> *</span></Label>
          <Input id="app_email" v-model="form.app_email" type="text" :class="errors.app_email ? 'border-destructive' : ''" />
          <p v-if="errors.app_email" class="text-xs text-destructive">{{ String(errors.app_email[0] || errors.app_email) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="financial_year_code">Financial year code</Label>
          <Input id="financial_year_code" v-model="form.financial_year_code" type="text" :class="errors.financial_year_code ? 'border-destructive' : ''" />
          <p v-if="errors.financial_year_code" class="text-xs text-destructive">{{ String(errors.financial_year_code[0] || errors.financial_year_code) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_phone">Phone</Label>
          <Input id="app_phone" v-model="form.app_phone" type="text" :class="errors.app_phone ? 'border-destructive' : ''" />
          <p v-if="errors.app_phone" class="text-xs text-destructive">{{ String(errors.app_phone[0] || errors.app_phone) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_fax">Fax</Label>
          <Input id="app_fax" v-model="form.app_fax" type="text" :class="errors.app_fax ? 'border-destructive' : ''" />
          <p v-if="errors.app_fax" class="text-xs text-destructive">{{ String(errors.app_fax[0] || errors.app_fax) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_website">Website</Label>
          <Input id="app_website" v-model="form.app_website" type="text" :class="errors.app_website ? 'border-destructive' : ''" />
          <p v-if="errors.app_website" class="text-xs text-destructive">{{ String(errors.app_website[0] || errors.app_website) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_address_line1">Address line 1</Label>
          <Input id="app_address_line1" v-model="form.app_address_line1" type="text" :class="errors.app_address_line1 ? 'border-destructive' : ''" />
          <p v-if="errors.app_address_line1" class="text-xs text-destructive">{{ String(errors.app_address_line1[0] || errors.app_address_line1) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_address_line2">Address line 2</Label>
          <Input id="app_address_line2" v-model="form.app_address_line2" type="text" :class="errors.app_address_line2 ? 'border-destructive' : ''" />
          <p v-if="errors.app_address_line2" class="text-xs text-destructive">{{ String(errors.app_address_line2[0] || errors.app_address_line2) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_city">City</Label>
          <Input id="app_city" v-model="form.app_city" type="text" :class="errors.app_city ? 'border-destructive' : ''" />
          <p v-if="errors.app_city" class="text-xs text-destructive">{{ String(errors.app_city[0] || errors.app_city) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_state">State</Label>
          <Input id="app_state" v-model="form.app_state" type="text" :class="errors.app_state ? 'border-destructive' : ''" />
          <p v-if="errors.app_state" class="text-xs text-destructive">{{ String(errors.app_state[0] || errors.app_state) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_zipcode">Zipcode</Label>
          <Input id="app_zipcode" v-model="form.app_zipcode" type="text" :class="errors.app_zipcode ? 'border-destructive' : ''" />
          <p v-if="errors.app_zipcode" class="text-xs text-destructive">{{ String(errors.app_zipcode[0] || errors.app_zipcode) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="app_country">Country<span class="text-destructive"> *</span></Label>
          <Input id="app_country" v-model="form.app_country" type="text" :class="errors.app_country ? 'border-destructive' : ''" />
          <p v-if="errors.app_country" class="text-xs text-destructive">{{ String(errors.app_country[0] || errors.app_country) }}</p>
        </div>
        </div>

        <div class="space-y-1.5">
          <Label for="app_description">Description</Label>
          <Textarea id="app_description" v-model="form.app_description" :rows="3" />
          <p v-if="errors.app_description" class="text-xs text-destructive">{{ String(errors.app_description[0] || errors.app_description) }}</p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div class="space-y-1.5">
          <Label for="meta_author">Meta author</Label>
          <Input id="meta_author" v-model="form.meta_author" type="text" :class="errors.meta_author ? 'border-destructive' : ''" />
          <p v-if="errors.meta_author" class="text-xs text-destructive">{{ String(errors.meta_author[0] || errors.meta_author) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="meta_description">Meta description</Label>
          <Input id="meta_description" v-model="form.meta_description" type="text" :class="errors.meta_description ? 'border-destructive' : ''" />
          <p v-if="errors.meta_description" class="text-xs text-destructive">{{ String(errors.meta_description[0] || errors.meta_description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="meta_keywords">Meta keywords</Label>
          <Input id="meta_keywords" v-model="form.meta_keywords" type="text" :class="errors.meta_keywords ? 'border-destructive' : ''" />
          <p v-if="errors.meta_keywords" class="text-xs text-destructive">{{ String(errors.meta_keywords[0] || errors.meta_keywords) }}</p>
        </div>
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

const title = 'General'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'General' },
  ]

const form = reactive({
    app_name: "",
    app_description: "",
    meta_author: "",
    meta_description: "",
    meta_keywords: "",
    app_address_line1: "",
    app_address_line2: "",
    app_city: "",
    app_state: "",
    app_zipcode: "",
    app_country: "",
    app_email: "",
    app_phone: "",
    app_fax: "",
    app_website: "",
    financial_year_code: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.general ?? data?.general
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
    await storeAppConfig({ type: 'general', ...form })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'General settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
