<!--
  Page: Exam/Schedule/Action.vue  (auto-generated full implementation - create & edit)
  API:   examSchedules @ app/exam/schedules
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Schedule' : 'Edit Schedule'" :navs="navs">
      <PageHeaderAction base="exam.schedule" title="Schedule" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Schedule' : 'Edit Schedule'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'exam.schedule.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.exam"
          :options="relationOptions.exam"
          label="Exam"
          :required="true"
          :error="errors.exam ? String(errors.exam[0] || errors.exam) : ''"
        />

        <FormRelationSelect
          v-model="form.batch"
          :options="relationOptions.batch"
          label="Batch"
          :required="true"
          :error="errors.batch ? String(errors.batch[0] || errors.batch) : ''"
        />

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="is_reassessment">Reassessment</Label>
          </div>
          <Switch id="is_reassessment" v-model="form.is_reassessment" />
        </div>

        <FormRelationSelect
          v-model="form.grade"
          :options="relationOptions.grade"
          label="Grade"
          :required="true"
          :error="errors.grade ? String(errors.grade[0] || errors.grade) : ''"
        />

        <div class="space-y-1.5">
          <Label for="assessment">Assessment<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="assessment" v-model="form.assessment" type="text" :class="errors.assessment ? 'border-destructive' : ''" />
          <p v-if="errors.assessment" class="text-xs text-destructive">{{ String(errors.assessment[0] || errors.assessment) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="observation">Observation<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="observation" v-model="form.observation" type="text" :class="errors.observation ? 'border-destructive' : ''" />
          <p v-if="errors.observation" class="text-xs text-destructive">{{ String(errors.observation[0] || errors.observation) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="competency">Competency<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="competency" v-model="form.competency" type="text" :class="errors.competency ? 'border-destructive' : ''" />
          <p v-if="errors.competency" class="text-xs text-destructive">{{ String(errors.competency[0] || errors.competency) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="last_exam_date">Last exam date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="last_exam_date" v-model="form.last_exam_date" type="date" :class="errors.last_exam_date ? 'border-destructive' : ''" />
          <p v-if="errors.last_exam_date" class="text-xs text-destructive">{{ String(errors.last_exam_date[0] || errors.last_exam_date) }}</p>
        </div>

        <FormArrayInput
          v-model="form.records"
          label="Subject"
          :required="true"
          placeholder="Add value"
          :error="errors.records ? String(errors.records[0] || errors.records) : ''"
        />

        <FormArrayInput
          v-model="form.additional_subjects"
          label="Additional subject"
          :required="false"
          placeholder="Add value"
          :error="errors.additional_subjects ? String(errors.additional_subjects[0] || errors.additional_subjects) : ''"
        />

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
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
import { examSchedules } from '@/api/exam'

const route = useRoute()
const router = useRouter()

const title = 'Schedule'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Exam' },
    { label: 'Schedule' },
  ]

const form = reactive({
    exam: "",
    batch: "",
    is_reassessment: false,
    grade: "",
    assessment: "",
    observation: "",
    competency: "",
    last_exam_date: "",
    records: [],
    additional_subjects: [],
    description: "",
  })

const relationOptions = reactive({
    exam: [],
    batch: [],
    grade: []
  })

async function loadPreRequisite() {
  if (typeof examSchedules.preRequisite !== 'function') return
  try {
    const { data } = await examSchedules.preRequisite()
    preReq.value = data
    
    relationOptions['exam'] = pickPreReq(preReq.value, 'exam')
    relationOptions['batch'] = pickPreReq(preReq.value, 'batch')
    relationOptions['grade'] = pickPreReq(preReq.value, 'grade')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await examSchedules.show(uuid)
    const record = data?.schedule ?? data
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
      const res = await examSchedules.store({ ...form })
      message = res.data?.message || 'Schedule created successfully.'
    } else {
      const res = await examSchedules.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Schedule updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'exam.schedule.index' })
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
