<!--
  Page: Calendar/Event/Action.vue  (auto-generated full implementation - create & edit)
  API:   calendarEvents @ app/calendar/events
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Event' : 'Edit Event'" :navs="navs">
      <PageHeaderAction base="calendar.event" title="Event" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Event' : 'Edit Event'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'calendar.event.index' }"
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
          <Label for="incharge">Incharge<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="incharge" v-model="form.incharge" type="text" :class="errors.incharge ? 'border-destructive' : ''" />
          <p v-if="errors.incharge" class="text-xs text-destructive">{{ String(errors.incharge[0] || errors.incharge) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="is_public">Is public</Label>
          </div>
          <Switch id="is_public" v-model="form.is_public" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="for_alumni">For alumni</Label>
          </div>
          <Switch id="for_alumni" v-model="form.for_alumni" />
        </div>

        <FormArrayInput
          v-model="form.sessions"
          label="Sessions"
          :required="false"
          placeholder="Add value"
          :error="errors.sessions ? String(errors.sessions[0] || errors.sessions) : ''"
        />

        <FormArrayInput
          v-model="form.periods"
          label="Periods"
          :required="false"
          placeholder="Add value"
          :error="errors.periods ? String(errors.periods[0] || errors.periods) : ''"
        />

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
          <Label for="excerpt">Excerpt<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="excerpt" v-model="form.excerpt" type="text" :class="errors.excerpt ? 'border-destructive' : ''" />
          <p v-if="errors.excerpt" class="text-xs text-destructive">{{ String(errors.excerpt[0] || errors.excerpt) }}</p>
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
import { calendarEvents } from '@/api/calendar'

const route = useRoute()
const router = useRouter()

const title = 'Event'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Calendar' },
    { label: 'Event' },
  ]

const form = reactive({
    type: "",
    title: "",
    venue: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    incharge: "",
    is_public: false,
    for_alumni: false,
    sessions: [],
    periods: [],
    student_audience_type: "",
    employee_audience_type: "",
    student_audiences: [],
    employee_audiences: [],
    excerpt: "",
    description: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof calendarEvents.preRequisite !== 'function') return
  try {
    const { data } = await calendarEvents.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await calendarEvents.show(uuid)
    const record = data?.event ?? data
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
      const res = await calendarEvents.store({ ...form })
      message = res.data?.message || 'Event created successfully.'
    } else {
      const res = await calendarEvents.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Event updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'calendar.event.index' })
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
