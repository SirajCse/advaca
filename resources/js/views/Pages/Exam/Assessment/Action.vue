<!--
  Page: Exam/Assessment/Action.vue  (auto-generated full implementation - create & edit)
  API:   examAssessments @ app/exam/assessments
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Assessment' : 'Edit Assessment'" :navs="navs">
      <PageHeaderAction base="exam.assessment" title="Assessment" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Assessment' : 'Edit Assessment'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'exam.assessment.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <FormArrayInput
          v-model="form.records"
          label="Type"
          :required="true"
          placeholder="Add value"
          :error="errors.records ? String(errors.records[0] || errors.records) : ''"
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
import { examAssessments } from '@/api/exam'

const route = useRoute()
const router = useRouter()

const title = 'Assessment'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Exam' },
    { label: 'Assessment' },
  ]

const form = reactive({
    name: "",
    records: [],
    description: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof examAssessments.preRequisite !== 'function') return
  try {
    const { data } = await examAssessments.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await examAssessments.show(uuid)
    const record = data?.assessment ?? data
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
      const res = await examAssessments.store({ ...form })
      message = res.data?.message || 'Assessment created successfully.'
    } else {
      const res = await examAssessments.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Assessment updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'exam.assessment.index' })
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
