<!--
  Page: Academic/CertificateTemplate/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicCertificateTemplates @ app/academic/certificate-templates
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Certificate Template' : 'Edit Certificate Template'" :navs="navs">
      <PageHeaderAction base="academic.certificate-template" title="Certificate Template" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Certificate Template' : 'Edit Certificate Template'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.certificate-template.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="number_prefix">Number prefix<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="number_prefix" v-model="form.number_prefix" type="text" :class="errors.number_prefix ? 'border-destructive' : ''" />
          <p v-if="errors.number_prefix" class="text-xs text-destructive">{{ String(errors.number_prefix[0] || errors.number_prefix) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="number_digit">Number digit<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="number_digit" v-model="form.number_digit" type="text" :class="errors.number_digit ? 'border-destructive' : ''" />
          <p v-if="errors.number_digit" class="text-xs text-destructive">{{ String(errors.number_digit[0] || errors.number_digit) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="number_suffix">Number suffix<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="number_suffix" v-model="form.number_suffix" type="text" :class="errors.number_suffix ? 'border-destructive' : ''" />
          <p v-if="errors.number_suffix" class="text-xs text-destructive">{{ String(errors.number_suffix[0] || errors.number_suffix) }}</p>
        </div>

        <FormArrayInput
          v-model="form.custom_fields"
          label="Custom fields"
          :required="true"
          placeholder="Add value"
          :error="errors.custom_fields ? String(errors.custom_fields[0] || errors.custom_fields) : ''"
        />

        <div class="space-y-1.5">
          <Label for="custom_template_file_name">Custom template file name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="custom_template_file_name" type="file" @change="(e) => (form.custom_template_file_name = e.target.files?.[0] ?? null)" />
          <p v-if="errors.custom_template_file_name" class="text-xs text-destructive">{{ String(errors.custom_template_file_name[0] || errors.custom_template_file_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="content">Content<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="content" type="file" @change="(e) => (form.content = e.target.files?.[0] ?? null)" />
          <p v-if="errors.content" class="text-xs text-destructive">{{ String(errors.content[0] || errors.content) }}</p>
        </div>


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
import { academicCertificateTemplates } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Certificate Template'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Certificate Template' },
  ]

const form = reactive({
    name: "",
    type: "",
    number_prefix: "",
    number_digit: "",
    number_suffix: "",
    custom_fields: [],
    custom_template_file_name: null,
    content: null,
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof academicCertificateTemplates.preRequisite !== 'function') return
  try {
    const { data } = await academicCertificateTemplates.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicCertificateTemplates.show(uuid)
    const record = data?.certificatetemplate ?? data
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
      const res = await academicCertificateTemplates.store({ ...form })
      message = res.data?.message || 'Certificate Template created successfully.'
    } else {
      const res = await academicCertificateTemplates.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Certificate Template updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.certificate-template.index' })
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
    await loadRecordAndPreReq(route.params.uuid)
  } else {
    await loadPreRequisite()
  }
  initialized.value = true
})
</script>
