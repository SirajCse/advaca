<!--
  Page: Recruitment/Application/Action.vue  (auto-generated full implementation - create & edit)
  API:   recruitmentApplications @ app/recruitment/applications
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Application' : 'Edit Application'" :navs="navs">
      <PageHeaderAction base="recruitment.application" title="Application" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Application' : 'Edit Application'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'recruitment.application.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.designation"
          :options="relationOptions.designation"
          label="Designation"
          :required="true"
          :error="errors.designation ? String(errors.designation[0] || errors.designation) : ''"
        />

        <div class="space-y-1.5">
          <Label for="first_name">First name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="first_name" v-model="form.first_name" type="text" :class="errors.first_name ? 'border-destructive' : ''" />
          <p v-if="errors.first_name" class="text-xs text-destructive">{{ String(errors.first_name[0] || errors.first_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="middle_name">Middle name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="middle_name" v-model="form.middle_name" type="text" :class="errors.middle_name ? 'border-destructive' : ''" />
          <p v-if="errors.middle_name" class="text-xs text-destructive">{{ String(errors.middle_name[0] || errors.middle_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="third_name">Third name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="third_name" v-model="form.third_name" type="text" :class="errors.third_name ? 'border-destructive' : ''" />
          <p v-if="errors.third_name" class="text-xs text-destructive">{{ String(errors.third_name[0] || errors.third_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="last_name">Last name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="last_name" v-model="form.last_name" type="text" :class="errors.last_name ? 'border-destructive' : ''" />
          <p v-if="errors.last_name" class="text-xs text-destructive">{{ String(errors.last_name[0] || errors.last_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="birth_date">Birth date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="birth_date" v-model="form.birth_date" type="date" :class="errors.birth_date ? 'border-destructive' : ''" />
          <p v-if="errors.birth_date" class="text-xs text-destructive">{{ String(errors.birth_date[0] || errors.birth_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="gender">Gender<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="gender" v-model="form.gender" type="text" :class="errors.gender ? 'border-destructive' : ''" />
          <p v-if="errors.gender" class="text-xs text-destructive">{{ String(errors.gender[0] || errors.gender) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="father_name">Father name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="father_name" v-model="form.father_name" type="text" :class="errors.father_name ? 'border-destructive' : ''" />
          <p v-if="errors.father_name" class="text-xs text-destructive">{{ String(errors.father_name[0] || errors.father_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="mother_name">Mother name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="mother_name" v-model="form.mother_name" type="text" :class="errors.mother_name ? 'border-destructive' : ''" />
          <p v-if="errors.mother_name" class="text-xs text-destructive">{{ String(errors.mother_name[0] || errors.mother_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="contact_number">Contact number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="contact_number" v-model="form.contact_number" type="text" :class="errors.contact_number ? 'border-destructive' : ''" />
          <p v-if="errors.contact_number" class="text-xs text-destructive">{{ String(errors.contact_number[0] || errors.contact_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="email">Email<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="email" v-model="form.email" type="email" :class="errors.email ? 'border-destructive' : ''" />
          <p v-if="errors.email" class="text-xs text-destructive">{{ String(errors.email[0] || errors.email) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="application_date">Application date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="application_date" v-model="form.application_date" type="date" :class="errors.application_date ? 'border-destructive' : ''" />
          <p v-if="errors.application_date" class="text-xs text-destructive">{{ String(errors.application_date[0] || errors.application_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="availability_date">Availability date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="availability_date" v-model="form.availability_date" type="date" :class="errors.availability_date ? 'border-destructive' : ''" />
          <p v-if="errors.availability_date" class="text-xs text-destructive">{{ String(errors.availability_date[0] || errors.availability_date) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.religion"
          :options="relationOptions.religion"
          label="Religion"
          :required="false"
          :error="errors.religion ? String(errors.religion[0] || errors.religion) : ''"
        />

        <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="false"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <FormRelationSelect
          v-model="form.caste"
          :options="relationOptions.caste"
          label="Caste"
          :required="false"
          :error="errors.caste ? String(errors.caste[0] || errors.caste) : ''"
        />

        <FormRelationSelect
          v-model="form.blood_group"
          :options="relationOptions.blood_group"
          label="Blood group"
          :required="false"
          :error="errors.blood_group ? String(errors.blood_group[0] || errors.blood_group) : ''"
        />

        <div class="space-y-1.5">
          <Label for="marital_status">Marital status<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="marital_status" v-model="form.marital_status" type="text" :class="errors.marital_status ? 'border-destructive' : ''" />
          <p v-if="errors.marital_status" class="text-xs text-destructive">{{ String(errors.marital_status[0] || errors.marital_status) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="qualification_summary">Qualification summary<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="qualification_summary" v-model="form.qualification_summary" type="text" :class="errors.qualification_summary ? 'border-destructive' : ''" />
          <p v-if="errors.qualification_summary" class="text-xs text-destructive">{{ String(errors.qualification_summary[0] || errors.qualification_summary) }}</p>
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
import { recruitmentApplications } from '@/api/recruitment'

const route = useRoute()
const router = useRouter()

const title = 'Application'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Recruitment' },
    { label: 'Application' },
  ]

const form = reactive({
    designation: "",
    first_name: "",
    middle_name: "",
    third_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    father_name: "",
    mother_name: "",
    contact_number: "",
    email: "",
    application_date: "",
    availability_date: "",
    religion: "",
    category: "",
    caste: "",
    blood_group: "",
    marital_status: "",
    qualification_summary: "",
  })

const relationOptions = reactive({
    designation: [],
    religion: [],
    category: [],
    caste: [],
    blood_group: []
  })

async function loadPreRequisite() {
  if (typeof recruitmentApplications.preRequisite !== 'function') return
  try {
    const { data } = await recruitmentApplications.preRequisite()
    preReq.value = data
    
    relationOptions['designation'] = pickPreReq(preReq.value, 'designation')
    relationOptions['religion'] = pickPreReq(preReq.value, 'religion')
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
    relationOptions['caste'] = pickPreReq(preReq.value, 'caste')
    relationOptions['blood_group'] = pickPreReq(preReq.value, 'blood_group')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await recruitmentApplications.show(uuid)
    const record = data?.application ?? data
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
      const res = await recruitmentApplications.store({ ...form })
      message = res.data?.message || 'Application created successfully.'
    } else {
      const res = await recruitmentApplications.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Application updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'recruitment.application.index' })
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
