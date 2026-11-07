<!--
  Page: Student/FeeRefund/Action.vue  (auto-generated full implementation - create & edit)
  API:   studentsStudentFeeRefunds @ app/students/{student}/fee-refunds
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Fee Refund' : 'Edit Fee Refund'" :navs="navs">
      <PageHeaderAction base="student.fee-refund" title="Fee Refund" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Fee Refund' : 'Edit Fee Refund'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.fee-refund.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
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
import { studentsStudentFeeRefunds } from '@/api/students'

const route = useRoute()
const router = useRouter()
const parentVal = computed(() => route.params['student'] ?? route.query['student'] ?? '')

const title = 'Fee Refund'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Fee Refund' },
  ]

const form = reactive({
    name: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof studentsStudentFeeRefunds.preRequisite !== 'function') return
  try {
    const { data } = await studentsStudentFeeRefunds.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await studentsStudentFeeRefunds.show(parentVal.value, uuid)
    const record = data?.feerefund ?? data
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
      const res = await studentsStudentFeeRefunds.store(parentVal.value, { ...form })
      message = res.data?.message || 'Fee Refund created successfully.'
    } else {
      const res = await studentsStudentFeeRefunds.update(parentVal.value, route.params.uuid, { ...form })
      message = res.data?.message || 'Fee Refund updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.fee-refund.index' })
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
