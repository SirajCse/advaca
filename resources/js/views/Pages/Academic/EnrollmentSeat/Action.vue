<!--
  Page: Academic/EnrollmentSeat/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicEnrollmentSeats @ app/academic/enrollment-seats
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Enrollment Seat' : 'Edit Enrollment Seat'" :navs="navs">
      <PageHeaderAction base="academic.enrollment-seat" title="Enrollment Seat" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Enrollment Seat' : 'Edit Enrollment Seat'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.enrollment-seat.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="enrollment_type">Enrollment type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="enrollment_type" v-model="form.enrollment_type" type="text" :class="errors.enrollment_type ? 'border-destructive' : ''" />
          <p v-if="errors.enrollment_type" class="text-xs text-destructive">{{ String(errors.enrollment_type[0] || errors.enrollment_type) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.course"
          :options="relationOptions.course"
          label="Course"
          :required="true"
          :error="errors.course ? String(errors.course[0] || errors.course) : ''"
        />

        <div class="space-y-1.5">
          <Label for="max_seat">Max seat<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="max_seat" v-model="form.max_seat" type="number" :class="errors.max_seat ? 'border-destructive' : ''" />
          <p v-if="errors.max_seat" class="text-xs text-destructive">{{ String(errors.max_seat[0] || errors.max_seat) }}</p>
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
import { academicEnrollmentSeats } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Enrollment Seat'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Enrollment Seat' },
  ]

const form = reactive({
    enrollment_type: "",
    course: "",
    max_seat: "",
    description: "",
  })

const relationOptions = reactive({
    course: []
  })

async function loadPreRequisite() {
  if (typeof academicEnrollmentSeats.preRequisite !== 'function') return
  try {
    const { data } = await academicEnrollmentSeats.preRequisite()
    preReq.value = data
    
    relationOptions['course'] = pickPreReq(preReq.value, 'course')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicEnrollmentSeats.show(uuid)
    const record = data?.enrollmentseat ?? data
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
      const res = await academicEnrollmentSeats.store({ ...form })
      message = res.data?.message || 'Enrollment Seat created successfully.'
    } else {
      const res = await academicEnrollmentSeats.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Enrollment Seat updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.enrollment-seat.index' })
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
