<!--
  Page: Student/LeaveRequest/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeeLeaveRequests @ app/employee/leave/requests
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Leave Request' : 'Edit Leave Request'" :navs="navs">
      <PageHeaderAction base="student.leave-request" title="Leave Request" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Leave Request' : 'Edit Leave Request'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.leave-request.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.student"
          :options="relationOptions.student"
          label="Student"
          :required="true"
          :error="errors.student ? String(errors.student[0] || errors.student) : ''"
        />

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

        <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="true"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="reason">Reason<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="reason" v-model="form.reason" type="text" :class="errors.reason ? 'border-destructive' : ''" />
          <p v-if="errors.reason" class="text-xs text-destructive">{{ String(errors.reason[0] || errors.reason) }}</p>
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
import { employeeLeaveRequests } from '@/api/employee'

const route = useRoute()
const router = useRouter()

const title = 'Leave Request'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Leave Request' },
  ]

const form = reactive({
    student: "",
    start_date: "",
    end_date: "",
    category: "",
    reason: "",
  })

const relationOptions = reactive({
    student: [],
    category: []
  })

async function loadPreRequisite() {
  if (typeof employeeLeaveRequests.preRequisite !== 'function') return
  try {
    const { data } = await employeeLeaveRequests.preRequisite()
    preReq.value = data
    
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeeLeaveRequests.show(uuid)
    const record = data?.leaverequest ?? data
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
      const res = await employeeLeaveRequests.store({ ...form })
      message = res.data?.message || 'Leave Request created successfully.'
    } else {
      const res = await employeeLeaveRequests.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Leave Request updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.leave-request.index' })
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
