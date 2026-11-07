<!--
  Page: Academic/CourseIncharge/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicCourseIncharges @ app/academic/course-incharges
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Course Incharge' : 'Edit Course Incharge'" :navs="navs">
      <PageHeaderAction base="academic.course-incharge" title="Course Incharge" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Course Incharge' : 'Edit Course Incharge'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.course-incharge.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.course"
          :options="relationOptions.course"
          label="Course"
          :required="true"
          :error="errors.course ? String(errors.course[0] || errors.course) : ''"
        />

        <FormRelationSelect
          v-model="form.employee"
          :options="relationOptions.employee"
          label="Employee"
          :required="true"
          :error="errors.employee ? String(errors.employee[0] || errors.employee) : ''"
        />

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
          <Label for="remarks">Remarks<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="remarks" v-model="form.remarks" :rows="4" />
          <p v-if="errors.remarks" class="text-xs text-destructive">{{ String(errors.remarks[0] || errors.remarks) }}</p>
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
import { academicCourseIncharges } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Course Incharge'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Course Incharge' },
  ]

const form = reactive({
    course: "",
    employee: "",
    start_date: "",
    end_date: "",
    remarks: "",
  })

const relationOptions = reactive({
    course: [],
    employee: []
  })

async function loadPreRequisite() {
  if (typeof academicCourseIncharges.preRequisite !== 'function') return
  try {
    const { data } = await academicCourseIncharges.preRequisite()
    preReq.value = data
    
    relationOptions['course'] = pickPreReq(preReq.value, 'course')
    relationOptions['employee'] = pickPreReq(preReq.value, 'employee')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicCourseIncharges.show(uuid)
    const record = data?.courseincharge ?? data
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
      const res = await academicCourseIncharges.store({ ...form })
      message = res.data?.message || 'Course Incharge created successfully.'
    } else {
      const res = await academicCourseIncharges.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Course Incharge updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.course-incharge.index' })
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
