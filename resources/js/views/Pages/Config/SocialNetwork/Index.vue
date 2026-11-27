<!--
  Page: Config/SocialNetwork/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Social network" :navs="navs">
      <PageHeaderAction base="config.social-network" title="Social network" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Social network settings</CardTitle>
            <CardDescription>Configure Social network options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div class="space-y-1.5">
          <Label for="facebook">Facebook</Label>
          <Input id="facebook" v-model="form.facebook" type="text" :class="errors.facebook ? 'border-destructive' : ''" />
          <p v-if="errors.facebook" class="text-xs text-destructive">{{ String(errors.facebook[0] || errors.facebook) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="twitter">Twitter</Label>
          <Input id="twitter" v-model="form.twitter" type="text" :class="errors.twitter ? 'border-destructive' : ''" />
          <p v-if="errors.twitter" class="text-xs text-destructive">{{ String(errors.twitter[0] || errors.twitter) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="google">Google</Label>
          <Input id="google" v-model="form.google" type="text" :class="errors.google ? 'border-destructive' : ''" />
          <p v-if="errors.google" class="text-xs text-destructive">{{ String(errors.google[0] || errors.google) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="linkedin">Linkedin</Label>
          <Input id="linkedin" v-model="form.linkedin" type="text" :class="errors.linkedin ? 'border-destructive' : ''" />
          <p v-if="errors.linkedin" class="text-xs text-destructive">{{ String(errors.linkedin[0] || errors.linkedin) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="youtube">Youtube</Label>
          <Input id="youtube" v-model="form.youtube" type="text" :class="errors.youtube ? 'border-destructive' : ''" />
          <p v-if="errors.youtube" class="text-xs text-destructive">{{ String(errors.youtube[0] || errors.youtube) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="github">Github</Label>
          <Input id="github" v-model="form.github" type="text" :class="errors.github ? 'border-destructive' : ''" />
          <p v-if="errors.github" class="text-xs text-destructive">{{ String(errors.github[0] || errors.github) }}</p>
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

const title = 'Social network'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Social network' },
  ]

const form = reactive({
    facebook: "",
    twitter: "",
    google: "",
    linkedin: "",
    youtube: "",
    github: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.social_network ?? data?.social_network
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
    await storeAppConfig({ type: 'social_network', ...form })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Social network settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
