<!--
  Page: Activity/Trip/Action.vue  (auto-generated full implementation - create & edit)
  API:   activityTrips @ app/activity/trips
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Trip' : 'Edit Trip'" :navs="navs">
      <PageHeaderAction base="activity.trip" title="Trip" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Trip' : 'Edit Trip'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'activity.trip.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="venue">Venue<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="venue" v-model="form.venue" type="text" :class="errors.venue ? 'border-destructive' : ''" />
          <p v-if="errors.venue" class="text-xs text-destructive">{{ String(errors.venue[0] || errors.venue) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_date">Start date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="start_date" v-model="form.start_date" type="date" :class="errors.start_date ? 'border-destructive' : ''" />
          <p v-if="errors.start_date" class="text-xs text-destructive">{{ String(errors.start_date[0] || errors.start_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_time">Start time<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="start_time" v-model="form.start_time" type="date" :class="errors.start_time ? 'border-destructive' : ''" />
          <p v-if="errors.start_time" class="text-xs text-destructive">{{ String(errors.start_time[0] || errors.start_time) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="end_date">End date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="end_date" v-model="form.end_date" type="date" :class="errors.end_date ? 'border-destructive' : ''" />
          <p v-if="errors.end_date" class="text-xs text-destructive">{{ String(errors.end_date[0] || errors.end_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="end_time">End time<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="end_time" v-model="form.end_time" type="date" :class="errors.end_time ? 'border-destructive' : ''" />
          <p v-if="errors.end_time" class="text-xs text-destructive">{{ String(errors.end_time[0] || errors.end_time) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="fee">Fee<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="fee" v-model="form.fee" type="number" :class="errors.fee ? 'border-destructive' : ''" />
          <p v-if="errors.fee" class="text-xs text-destructive">{{ String(errors.fee[0] || errors.fee) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="student_audience_type">Audience<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="student_audience_type" v-model="form.student_audience_type" type="text" :class="errors.student_audience_type ? 'border-destructive' : ''" />
          <p v-if="errors.student_audience_type" class="text-xs text-destructive">{{ String(errors.student_audience_type[0] || errors.student_audience_type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="employee_audience_type">Audience<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="employee_audience_type" v-model="form.employee_audience_type" type="text" :class="errors.employee_audience_type ? 'border-destructive' : ''" />
          <p v-if="errors.employee_audience_type" class="text-xs text-destructive">{{ String(errors.employee_audience_type[0] || errors.employee_audience_type) }}</p>
        </div>

        <FormArrayInput
          v-model="form.student_audiences"
          label="Audience"
          :required="true"
          placeholder="Add value"
          :error="errors.student_audiences ? String(errors.student_audiences[0] || errors.student_audiences) : ''"
        />

        <FormArrayInput
          v-model="form.employee_audiences"
          label="Audience"
          :required="true"
          placeholder="Add value"
          :error="errors.employee_audiences ? String(errors.employee_audiences[0] || errors.employee_audiences) : ''"
        />

        <div class="space-y-1.5">
          <Label for="summary">Summary<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="summary" v-model="form.summary" :rows="4" />
          <p v-if="errors.summary" class="text-xs text-destructive">{{ String(errors.summary[0] || errors.summary) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="itinerary">Itinerary<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="itinerary" v-model="form.itinerary" type="text" :class="errors.itinerary ? 'border-destructive' : ''" />
          <p v-if="errors.itinerary" class="text-xs text-destructive">{{ String(errors.itinerary[0] || errors.itinerary) }}</p>
        </div>

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
import { activityTrips } from '@/api/activity'

const route = useRoute()
const router = useRouter()

const title = 'Trip'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Activity' },
    { label: 'Trip' },
  ]

const form = reactive({
    type: "",
    title: "",
    venue: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    fee: "",
    student_audience_type: "",
    employee_audience_type: "",
    student_audiences: [],
    employee_audiences: [],
    summary: "",
    itinerary: "",
    description: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof activityTrips.preRequisite !== 'function') return
  try {
    const { data } = await activityTrips.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await activityTrips.show(uuid)
    const record = data?.trip ?? data
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
      const res = await activityTrips.store({ ...form })
      message = res.data?.message || 'Trip created successfully.'
    } else {
      const res = await activityTrips.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Trip updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'activity.trip.index' })
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
