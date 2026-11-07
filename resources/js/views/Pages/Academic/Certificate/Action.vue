<!--
  Page: Academic/Certificate/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicCertificates @ app/academic/certificates
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Certificate' : 'Edit Certificate'" :navs="navs">
      <PageHeaderAction base="academic.certificate" title="Certificate" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Certificate' : 'Edit Certificate'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.certificate.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.template"
          :options="relationOptions.template"
          label="Template"
          :required="true"
          :error="errors.template ? String(errors.template[0] || errors.template) : ''"
        />

        <FormRelationSelect
          v-model="form.student"
          :options="relationOptions.student"
          label="Student"
          :required="false"
          :error="errors.student ? String(errors.student[0] || errors.student) : ''"
        />

        <FormRelationSelect
          v-model="form.employee"
          :options="relationOptions.employee"
          label="Employee"
          :required="false"
          :error="errors.employee ? String(errors.employee[0] || errors.employee) : ''"
        />

        <div class="space-y-1.5">
          <Label for="name">Name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="is_duplicate">Is duplicate</Label>
          </div>
          <Switch id="is_duplicate" v-model="form.is_duplicate" />
        </div>

        <FormArrayInput
          v-model="form.custom_fields"
          label="Custom fields"
          :required="false"
          placeholder="Add value"
          :error="errors.custom_fields ? String(errors.custom_fields[0] || errors.custom_fields) : ''"
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
import { academicCertificates } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Certificate'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Certificate' },
  ]

const form = reactive({
    template: "",
    student: "",
    employee: "",
    name: "",
    date: "",
    is_duplicate: false,
    custom_fields: [],
  })

const relationOptions = reactive({
    template: [],
    student: [],
    employee: []
  })

async function loadPreRequisite() {
  if (typeof academicCertificates.preRequisite !== 'function') return
  try {
    const { data } = await academicCertificates.preRequisite()
    preReq.value = data
    
    relationOptions['template'] = pickPreReq(preReq.value, 'template')
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
    relationOptions['employee'] = pickPreReq(preReq.value, 'employee')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicCertificates.show(uuid)
    const record = data?.certificate ?? data
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
      const res = await academicCertificates.store({ ...form })
      message = res.data?.message || 'Certificate created successfully.'
    } else {
      const res = await academicCertificates.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Certificate updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.certificate.index' })
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
