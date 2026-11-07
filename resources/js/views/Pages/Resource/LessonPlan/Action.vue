<!--
  Page: Resource/LessonPlan/Action.vue  (auto-generated full implementation - create & edit)
  API:   resourceLessonPlans @ app/resource/lesson-plans
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Lesson Plan' : 'Edit Lesson Plan'" :navs="navs">
      <PageHeaderAction base="resource.lesson-plan" title="Lesson Plan" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Lesson Plan' : 'Edit Lesson Plan'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'resource.lesson-plan.index' }"
        @submit="submit"
      >
                <FormArrayInput
          v-model="form.batches"
          label="Batch"
          :required="false"
          placeholder="Add value"
          :error="errors.batches ? String(errors.batches[0] || errors.batches) : ''"
        />

        <FormRelationSelect
          v-model="form.subject"
          :options="relationOptions.subject"
          label="Subject"
          :required="true"
          :error="errors.subject ? String(errors.subject[0] || errors.subject) : ''"
        />

        <div class="space-y-1.5">
          <Label for="topic">Topic<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="topic" v-model="form.topic" type="text" :class="errors.topic ? 'border-destructive' : ''" />
          <p v-if="errors.topic" class="text-xs text-destructive">{{ String(errors.topic[0] || errors.topic) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_date">Start date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="start_date" v-model="form.start_date" type="date" :class="errors.start_date ? 'border-destructive' : ''" />
          <p v-if="errors.start_date" class="text-xs text-destructive">{{ String(errors.start_date[0] || errors.start_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="end_date">End date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="end_date" v-model="form.end_date" type="date" :class="errors.end_date ? 'border-destructive' : ''" />
          <p v-if="errors.end_date" class="text-xs text-destructive">{{ String(errors.end_date[0] || errors.end_date) }}</p>
        </div>

        <FormArrayInput
          v-model="form.details"
          label="Details"
          :required="true"
          placeholder="Add value"
          :error="errors.details ? String(errors.details[0] || errors.details) : ''"
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
import { resourceLessonPlans } from '@/api/resource'

const route = useRoute()
const router = useRouter()

const title = 'Lesson Plan'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Resource' },
    { label: 'Lesson Plan' },
  ]

const form = reactive({
    batches: [],
    subject: "",
    topic: "",
    start_date: "",
    end_date: "",
    details: [],
  })

const relationOptions = reactive({
    subject: []
  })

async function loadPreRequisite() {
  if (typeof resourceLessonPlans.preRequisite !== 'function') return
  try {
    const { data } = await resourceLessonPlans.preRequisite()
    preReq.value = data
    
    relationOptions['subject'] = pickPreReq(preReq.value, 'subject')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await resourceLessonPlans.show(uuid)
    const record = data?.lessonplan ?? data
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
      const res = await resourceLessonPlans.store({ ...form })
      message = res.data?.message || 'Lesson Plan created successfully.'
    } else {
      const res = await resourceLessonPlans.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Lesson Plan updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'resource.lesson-plan.index' })
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
