<!--
  Page: Student/Documents/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeeDocuments @ app/employee/documents
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Documents' : 'Edit Documents'" :navs="navs">
      <PageHeaderAction base="student.documents" title="Documents" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Documents' : 'Edit Documents'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.documents.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.student"
          :options="relationOptions.student"
          label="Student"
          :required="true"
          :error="errors.student ? String(errors.student[0] || errors.student) : ''"
        />

        <div class="space-y-1.5">
          <Label for="type">Document type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="number">Number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="number" v-model="form.number" type="text" :class="errors.number ? 'border-destructive' : ''" />
          <p v-if="errors.number" class="text-xs text-destructive">{{ String(errors.number[0] || errors.number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="issue_date">Issue date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="issue_date" v-model="form.issue_date" type="date" :class="errors.issue_date ? 'border-destructive' : ''" />
          <p v-if="errors.issue_date" class="text-xs text-destructive">{{ String(errors.issue_date[0] || errors.issue_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_date">Start date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="start_date" v-model="form.start_date" type="date" :class="errors.start_date ? 'border-destructive' : ''" />
          <p v-if="errors.start_date" class="text-xs text-destructive">{{ String(errors.start_date[0] || errors.start_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="end_date">End date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="end_date" v-model="form.end_date" type="date" :class="errors.end_date ? 'border-destructive' : ''" />
          <p v-if="errors.end_date" class="text-xs text-destructive">{{ String(errors.end_date[0] || errors.end_date) }}</p>
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
import { employeeDocuments } from '@/api/employee'

const route = useRoute()
const router = useRouter()

const title = 'Documents'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Documents' },
  ]

const form = reactive({
    student: "",
    type: "",
    title: "",
    number: "",
    description: "",
    issue_date: "",
    start_date: "",
    end_date: "",
  })

const relationOptions = reactive({
    student: []
  })

async function loadPreRequisite() {
  if (typeof employeeDocuments.preRequisite !== 'function') return
  try {
    const { data } = await employeeDocuments.preRequisite()
    preReq.value = data
    
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeeDocuments.show(uuid)
    const record = data?.documents ?? data
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
      const res = await employeeDocuments.store({ ...form })
      message = res.data?.message || 'Documents created successfully.'
    } else {
      const res = await employeeDocuments.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Documents updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.documents.index' })
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
