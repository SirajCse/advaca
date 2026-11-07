<!--
  Page: Student/TransferRequest/Action.vue  (auto-generated full implementation - create & edit)
  API:   studentTransferRequests @ app/student/transfer-requests
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Transfer Request' : 'Edit Transfer Request'" :navs="navs">
      <PageHeaderAction base="student.transfer-request" title="Transfer Request" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Transfer Request' : 'Edit Transfer Request'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.transfer-request.index' }"
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
          <Label for="request_date">Request date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="request_date" v-model="form.request_date" type="date" :class="errors.request_date ? 'border-destructive' : ''" />
          <p v-if="errors.request_date" class="text-xs text-destructive">{{ String(errors.request_date[0] || errors.request_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="transfer_certificate_number">Transfer certificate number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="transfer_certificate_number" v-model="form.transfer_certificate_number" type="text" :class="errors.transfer_certificate_number ? 'border-destructive' : ''" />
          <p v-if="errors.transfer_certificate_number" class="text-xs text-destructive">{{ String(errors.transfer_certificate_number[0] || errors.transfer_certificate_number) }}</p>
        </div>

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
import { studentTransferRequests } from '@/api/student'

const route = useRoute()
const router = useRouter()

const title = 'Transfer Request'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Transfer Request' },
  ]

const form = reactive({
    student: "",
    request_date: "",
    transfer_certificate_number: "",
    reason: "",
  })

const relationOptions = reactive({
    student: []
  })

async function loadPreRequisite() {
  if (typeof studentTransferRequests.preRequisite !== 'function') return
  try {
    const { data } = await studentTransferRequests.preRequisite()
    preReq.value = data
    
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await studentTransferRequests.show(uuid)
    const record = data?.transferrequest ?? data
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
      const res = await studentTransferRequests.store({ ...form })
      message = res.data?.message || 'Transfer Request created successfully.'
    } else {
      const res = await studentTransferRequests.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Transfer Request updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.transfer-request.index' })
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
