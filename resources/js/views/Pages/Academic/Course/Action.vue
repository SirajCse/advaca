<!--
  Page: Academic/Course/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicCourses @ app/academic/courses
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Course' : 'Edit Course'" :navs="navs">
      <PageHeaderAction base="academic.course" title="Course" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Course' : 'Edit Course'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.course.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="term">Term<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="term" v-model="form.term" type="text" :class="errors.term ? 'border-destructive' : ''" />
          <p v-if="errors.term" class="text-xs text-destructive">{{ String(errors.term[0] || errors.term) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.division"
          :options="relationOptions.division"
          label="Division"
          :required="true"
          :error="errors.division ? String(errors.division[0] || errors.division) : ''"
        />

        <div class="space-y-1.5">
          <Label for="code">Code<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="code" v-model="form.code" type="text" :class="errors.code ? 'border-destructive' : ''" />
          <p v-if="errors.code" class="text-xs text-destructive">{{ String(errors.code[0] || errors.code) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="shortcode">Shortcode<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="shortcode" v-model="form.shortcode" type="text" :class="errors.shortcode ? 'border-destructive' : ''" />
          <p v-if="errors.shortcode" class="text-xs text-destructive">{{ String(errors.shortcode[0] || errors.shortcode) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_registration">Enable registration</Label>
          </div>
          <Switch id="enable_registration" v-model="form.enable_registration" />
        </div>

        <div class="space-y-1.5">
          <Label for="registration_fee">Registration fee<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="registration_fee" v-model="form.registration_fee" type="number" :class="errors.registration_fee ? 'border-destructive' : ''" />
          <p v-if="errors.registration_fee" class="text-xs text-destructive">{{ String(errors.registration_fee[0] || errors.registration_fee) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="batch_with_same_subject">Batch with same subject</Label>
          </div>
          <Switch id="batch_with_same_subject" v-model="form.batch_with_same_subject" />
        </div>

        <div class="space-y-1.5">
          <Label for="pg_account">Pg account<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="pg_account" v-model="form.pg_account" type="text" :class="errors.pg_account ? 'border-destructive' : ''" />
          <p v-if="errors.pg_account" class="text-xs text-destructive">{{ String(errors.pg_account[0] || errors.pg_account) }}</p>
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
import { academicCourses } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Course'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Course' },
  ]

const form = reactive({
    name: "",
    term: "",
    division: "",
    code: "",
    shortcode: "",
    enable_registration: false,
    registration_fee: "",
    batch_with_same_subject: false,
    pg_account: "",
    description: "",
  })

const relationOptions = reactive({
    division: []
  })

async function loadPreRequisite() {
  if (typeof academicCourses.preRequisite !== 'function') return
  try {
    const { data } = await academicCourses.preRequisite()
    preReq.value = data
    
    relationOptions['division'] = pickPreReq(preReq.value, 'division')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicCourses.show(uuid)
    const record = data?.course ?? data
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
      const res = await academicCourses.store({ ...form })
      message = res.data?.message || 'Course created successfully.'
    } else {
      const res = await academicCourses.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Course updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.course.index' })
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
