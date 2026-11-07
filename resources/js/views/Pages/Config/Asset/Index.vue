<!--
  Page: Config/Asset/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Assets" :navs="navs">
      <PageHeaderAction base="config.asset" title="Assets" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Assets settings</CardTitle>
            <CardDescription>Configure Assets options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="space-y-1.5">
          <Label for="favicon">Favicon<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="favicon" v-model="form.favicon" type="text" :class="errors.favicon ? 'border-destructive' : ''" />
          <p v-if="errors.favicon" class="text-xs text-destructive">{{ String(errors.favicon[0] || errors.favicon) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="logo">Logo<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="logo" v-model="form.logo" type="text" :class="errors.logo ? 'border-destructive' : ''" />
          <p v-if="errors.logo" class="text-xs text-destructive">{{ String(errors.logo[0] || errors.logo) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="logo_light">Logo light<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="logo_light" v-model="form.logo_light" type="text" :class="errors.logo_light ? 'border-destructive' : ''" />
          <p v-if="errors.logo_light" class="text-xs text-destructive">{{ String(errors.logo_light[0] || errors.logo_light) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="icon">Icon<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="icon" v-model="form.icon" type="text" :class="errors.icon ? 'border-destructive' : ''" />
          <p v-if="errors.icon" class="text-xs text-destructive">{{ String(errors.icon[0] || errors.icon) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="icon_light">Icon light<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="icon_light" v-model="form.icon_light" type="text" :class="errors.icon_light ? 'border-destructive' : ''" />
          <p v-if="errors.icon_light" class="text-xs text-destructive">{{ String(errors.icon_light[0] || errors.icon_light) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="guest_background">Guest background<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="guest_background" v-model="form.guest_background" type="text" :class="errors.guest_background ? 'border-destructive' : ''" />
          <p v-if="errors.guest_background" class="text-xs text-destructive">{{ String(errors.guest_background[0] || errors.guest_background) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="guest_full_page_background">Guest full page background<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="guest_full_page_background" v-model="form.guest_full_page_background" type="text" :class="errors.guest_full_page_background ? 'border-destructive' : ''" />
          <p v-if="errors.guest_full_page_background" class="text-xs text-destructive">{{ String(errors.guest_full_page_background[0] || errors.guest_full_page_background) }}</p>
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

const title = 'Assets'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Assets' },
  ]

const form = reactive({
    favicon: "",
    logo: "",
    logo_light: "",
    icon: "",
    icon_light: "",
    guest_background: "",
    guest_full_page_background: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.assets ?? data?.assets
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
    await storeAppConfig({ assets: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Assets settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
