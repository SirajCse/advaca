<!--
  Page: Employee/Experiences/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeeExperiences @ app/employee/experiences
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Experiences' : 'Edit Experiences'" :navs="navs">
      <PageHeaderAction base="employee.experiences" title="Experiences" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Experiences' : 'Edit Experiences'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'employee.experiences.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.employee"
          :options="relationOptions.employee"
          label="Employee"
          :required="true"
          :error="errors.employee ? String(errors.employee[0] || errors.employee) : ''"
        />

        <div class="space-y-1.5">
          <Label for="headline">Headline<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="headline" v-model="form.headline" type="text" :class="errors.headline ? 'border-destructive' : ''" />
          <p v-if="errors.headline" class="text-xs text-destructive">{{ String(errors.headline[0] || errors.headline) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="organization_name">Organization name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="organization_name" v-model="form.organization_name" type="text" :class="errors.organization_name ? 'border-destructive' : ''" />
          <p v-if="errors.organization_name" class="text-xs text-destructive">{{ String(errors.organization_name[0] || errors.organization_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="location">Location<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="location" v-model="form.location" type="text" :class="errors.location ? 'border-destructive' : ''" />
          <p v-if="errors.location" class="text-xs text-destructive">{{ String(errors.location[0] || errors.location) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="employment_type">Employment type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="employment_type" v-model="form.employment_type" type="text" :class="errors.employment_type ? 'border-destructive' : ''" />
          <p v-if="errors.employment_type" class="text-xs text-destructive">{{ String(errors.employment_type[0] || errors.employment_type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_date">Start date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="start_date" v-model="form.start_date" type="date" :class="errors.start_date ? 'border-destructive' : ''" />
          <p v-if="errors.start_date" class="text-xs text-destructive">{{ String(errors.start_date[0] || errors.start_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="end_date">End date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="end_date" v-model="form.end_date" type="date" :class="errors.end_date ? 'border-destructive' : ''" />
          <p v-if="errors.end_date" class="text-xs text-destructive">{{ String(errors.end_date[0] || errors.end_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="job_profile">Job profile<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="job_profile" v-model="form.job_profile" type="text" :class="errors.job_profile ? 'border-destructive' : ''" />
          <p v-if="errors.job_profile" class="text-xs text-destructive">{{ String(errors.job_profile[0] || errors.job_profile) }}</p>
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
import { employeeExperiences } from '@/api/employee'

const route = useRoute()
const router = useRouter()

const title = 'Experiences'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Employee' },
    { label: 'Experiences' },
  ]

const form = reactive({
    employee: "",
    headline: "",
    title: "",
    organization_name: "",
    location: "",
    employment_type: "",
    start_date: "",
    end_date: "",
    job_profile: "",
  })

const relationOptions = reactive({
    employee: []
  })

async function loadPreRequisite() {
  if (typeof employeeExperiences.preRequisite !== 'function') return
  try {
    const { data } = await employeeExperiences.preRequisite()
    preReq.value = data
    
    relationOptions['employee'] = pickPreReq(preReq.value, 'employee')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeeExperiences.show(uuid)
    const record = data?.experiences ?? data
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
      const res = await employeeExperiences.store({ ...form })
      message = res.data?.message || 'Experiences created successfully.'
    } else {
      const res = await employeeExperiences.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Experiences updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'employee.experiences.index' })
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
