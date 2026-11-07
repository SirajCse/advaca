<!--
  Page: Student/Qualification/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeesEmployeeQualifications @ app/employees/{employee}/qualifications
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Qualification' : 'Edit Qualification'" :navs="navs">
      <PageHeaderAction base="student.qualification" title="Qualification" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Qualification' : 'Edit Qualification'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.qualification.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="level">Level<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="level" v-model="form.level" type="text" :class="errors.level ? 'border-destructive' : ''" />
          <p v-if="errors.level" class="text-xs text-destructive">{{ String(errors.level[0] || errors.level) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.course"
          :options="relationOptions.course"
          label="Course"
          :required="true"
          :error="errors.course ? String(errors.course[0] || errors.course) : ''"
        />

        <FormRelationSelect
          v-model="form.session"
          :options="relationOptions.session"
          label="Session"
          :required="false"
          :error="errors.session ? String(errors.session[0] || errors.session) : ''"
        />

        <div class="space-y-1.5">
          <Label for="institute">Institute<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="institute" v-model="form.institute" type="text" :class="errors.institute ? 'border-destructive' : ''" />
          <p v-if="errors.institute" class="text-xs text-destructive">{{ String(errors.institute[0] || errors.institute) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="institute_address">Institute address<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="institute_address" v-model="form.institute_address" type="text" :class="errors.institute_address ? 'border-destructive' : ''" />
          <p v-if="errors.institute_address" class="text-xs text-destructive">{{ String(errors.institute_address[0] || errors.institute_address) }}</p>
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

        <div class="space-y-1.5">
          <Label for="affiliated_to">Affiliated to<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="affiliated_to" v-model="form.affiliated_to" type="text" :class="errors.affiliated_to ? 'border-destructive' : ''" />
          <p v-if="errors.affiliated_to" class="text-xs text-destructive">{{ String(errors.affiliated_to[0] || errors.affiliated_to) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="result">Result<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="result" v-model="form.result" type="text" :class="errors.result ? 'border-destructive' : ''" />
          <p v-if="errors.result" class="text-xs text-destructive">{{ String(errors.result[0] || errors.result) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="total_marks">Total marks<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="total_marks" v-model="form.total_marks" type="number" :class="errors.total_marks ? 'border-destructive' : ''" />
          <p v-if="errors.total_marks" class="text-xs text-destructive">{{ String(errors.total_marks[0] || errors.total_marks) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="obtained_marks">Obtained marks<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="obtained_marks" v-model="form.obtained_marks" type="number" :class="errors.obtained_marks ? 'border-destructive' : ''" />
          <p v-if="errors.obtained_marks" class="text-xs text-destructive">{{ String(errors.obtained_marks[0] || errors.obtained_marks) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="failed_subjects">Failed subjects<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="failed_subjects" v-model="form.failed_subjects" type="text" :class="errors.failed_subjects ? 'border-destructive' : ''" />
          <p v-if="errors.failed_subjects" class="text-xs text-destructive">{{ String(errors.failed_subjects[0] || errors.failed_subjects) }}</p>
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
import { employeesEmployeeQualifications } from '@/api/employees'

const route = useRoute()
const router = useRouter()
const parentVal = computed(() => route.params['employee'] ?? route.query['employee'] ?? '')

const title = 'Qualification'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Qualification' },
  ]

const form = reactive({
    level: "",
    course: "",
    session: "",
    institute: "",
    institute_address: "",
    start_date: "",
    end_date: "",
    affiliated_to: "",
    result: "",
    total_marks: "",
    obtained_marks: "",
    failed_subjects: "",
  })

const relationOptions = reactive({
    course: [],
    session: []
  })

async function loadPreRequisite() {
  if (typeof employeesEmployeeQualifications.preRequisite !== 'function') return
  try {
    const { data } = await employeesEmployeeQualifications.preRequisite()
    preReq.value = data
    
    relationOptions['course'] = pickPreReq(preReq.value, 'course')
    relationOptions['session'] = pickPreReq(preReq.value, 'session')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeesEmployeeQualifications.show(parentVal.value, uuid)
    const record = data?.qualification ?? data
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
      const res = await employeesEmployeeQualifications.store(parentVal.value, { ...form })
      message = res.data?.message || 'Qualification created successfully.'
    } else {
      const res = await employeesEmployeeQualifications.update(parentVal.value, route.params.uuid, { ...form })
      message = res.data?.message || 'Qualification updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.qualification.index' })
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
