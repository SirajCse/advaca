<!--
  Page: Config/WhatsAppTemplate/Action.vue  (auto-generated full implementation - create & edit)
  API:   configWhatsappTemplates @ app/config/whatsapp-templates
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Whats App Template' : 'Edit Whats App Template'" :navs="navs">
      <PageHeaderAction base="config.whats-app-template" title="Whats App Template" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Whats App Template' : 'Edit Whats App Template'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'config.whats-app-template.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.subject"
          :options="relationOptions.subject"
          label="Subject"
          :required="true"
          :error="errors.subject ? String(errors.subject[0] || errors.subject) : ''"
        />

        <div class="space-y-1.5">
          <Label for="content">Content<span v-if="true" class="text-destructive"> *</span></Label>
          <Textarea id="content" v-model="form.content" :rows="4" />
          <p v-if="errors.content" class="text-xs text-destructive">{{ String(errors.content[0] || errors.content) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.template_id"
          :options="relationOptions.template_id"
          label="Template"
          :required="false"
          :error="errors.template_id ? String(errors.template_id[0] || errors.template_id) : ''"
        />


        <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
      </FormAction>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormAction from '@/views/Components/FormAction.vue'
import FormSelect from '@/views/Components/FormSelect.vue'
import FormRelationSelect from '@/views/Components/FormRelationSelect.vue'
import FormArrayInput from '@/views/Components/FormArrayInput.vue'
import { pickPreReq } from '@/lib/helpers'
import { configWhatsappTemplates } from '@/api/core'

const route = useRoute()
const router = useRouter()

const title = 'Whats App Template'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Config' },
    { label: 'Whats App Template' },
  ]

const form = reactive({
    subject: "",
    content: "",
    template_id: "",
  })

const relationOptions = reactive({
    subject: [],
    template_id: []
  })

// no pre-requisite endpoint for this feature

async function loadRecord(uuid) {
  try {
    const { data } = await configWhatsappTemplates.show(uuid)
    const record = data?.whatsapptemplate ?? data
        Object.keys(form).forEach((k) => {
      let v = record[k]
      if (v && typeof v === 'object' && !Array.isArray(v)) v = v.uuid ?? v.id ?? v.name ?? ''
      if (v === null || v === undefined) {
        v = Array.isArray(form[k]) ? [] : (typeof form[k] === 'boolean' ? false : '')
      }
      form[k] = v
    })
  } catch {
    // keep defaults
  }
}

async function submit() {
  processing.value = true
  errors.value = {}
  submitError.value = ''
  try {
    let message
    if (isCreate.value) {
      const res = await configWhatsappTemplates.store({ ...form })
      message = res.data?.message || 'Whats App Template created successfully.'
    } else {
      const res = await configWhatsappTemplates.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Whats App Template updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'config.whats-app-template.index' })
  } catch (e) {
    if (e.fieldErrors && Object.keys(e.fieldErrors).length) {
      errors.value = e.fieldErrors
    }
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(async () => {
  if (!isCreate.value) {
    await loadRecord(route.params.uuid)
  }
  initialized.value = true
})
</script>
