<!--
  Page: Calendar/Holiday/Action.vue  (auto-generated full implementation - create & edit)
  API:   calendarHolidays @ app/calendar/holidays
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Holiday' : 'Edit Holiday'" :navs="navs">
      <PageHeaderAction base="calendar.holiday" title="Holiday" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Holiday' : 'Edit Holiday'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'calendar.holiday.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="date" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
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

        <div class="space-y-1.5">
          <Label for="dates">Dates<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="dates" v-model="form.dates" type="date" :class="errors.dates ? 'border-destructive' : ''" />
          <p v-if="errors.dates" class="text-xs text-destructive">{{ String(errors.dates[0] || errors.dates) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="days">Days<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="days" v-model="form.days" type="text" :class="errors.days ? 'border-destructive' : ''" />
          <p v-if="errors.days" class="text-xs text-destructive">{{ String(errors.days[0] || errors.days) }}</p>
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
import { calendarHolidays } from '@/api/calendar'

const route = useRoute()
const router = useRouter()

const title = 'Holiday'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Calendar' },
    { label: 'Holiday' },
  ]

const form = reactive({
    type: "",
    name: "",
    start_date: "",
    end_date: "",
    dates: "",
    days: "",
    description: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof calendarHolidays.preRequisite !== 'function') return
  try {
    const { data } = await calendarHolidays.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await calendarHolidays.show(uuid)
    const record = data?.holiday ?? data
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
      const res = await calendarHolidays.store({ ...form })
      message = res.data?.message || 'Holiday created successfully.'
    } else {
      const res = await calendarHolidays.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Holiday updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'calendar.holiday.index' })
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
