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
                    <div class="space-y-1.5">
          <Label for="app_name">App name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="app_name" v-model="form.app_name" type="text" :class="errors.app_name ? 'border-destructive' : ''" />
          <p v-if="errors.app_name" class="text-xs text-destructive">{{ String(errors.app_name[0] || errors.app_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="meta_author">Meta author<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="meta_author" v-model="form.meta_author" type="text" :class="errors.meta_author ? 'border-destructive' : ''" />
          <p v-if="errors.meta_author" class="text-xs text-destructive">{{ String(errors.meta_author[0] || errors.meta_author) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="meta_description">Meta description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="meta_description" v-model="form.meta_description" :rows="4" />
          <p v-if="errors.meta_description" class="text-xs text-destructive">{{ String(errors.meta_description[0] || errors.meta_description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="meta_keywords">Meta keywords<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="meta_keywords" v-model="form.meta_keywords" type="text" :class="errors.meta_keywords ? 'border-destructive' : ''" />
          <p v-if="errors.meta_keywords" class="text-xs text-destructive">{{ String(errors.meta_keywords[0] || errors.meta_keywords) }}</p>
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
    meta_author: "",
    meta_description: "",
    meta_keywords: "",
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
    await storeAppConfig({ general: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'General settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
