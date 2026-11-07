<!--
  Page: Student/CustomFee/Action.vue  (auto-generated full implementation - create & edit)
  API:   studentsStudentCustomFees @ app/students/{student}/custom-fees
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Custom Fee' : 'Edit Custom Fee'" :navs="navs">
      <PageHeaderAction base="student.custom-fee" title="Custom Fee" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Custom Fee' : 'Edit Custom Fee'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.custom-fee.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.fee_head"
          :options="relationOptions.fee_head"
          label="Custom fee"
          :required="true"
          :error="errors.fee_head ? String(errors.fee_head[0] || errors.fee_head) : ''"
        />

        <div class="space-y-1.5">
          <Label for="amount">Amount<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="amount" v-model="form.amount" type="number" :class="errors.amount ? 'border-destructive' : ''" />
          <p v-if="errors.amount" class="text-xs text-destructive">{{ String(errors.amount[0] || errors.amount) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="due_date">Due date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="due_date" v-model="form.due_date" type="date" :class="errors.due_date ? 'border-destructive' : ''" />
          <p v-if="errors.due_date" class="text-xs text-destructive">{{ String(errors.due_date[0] || errors.due_date) }}</p>
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
import { studentsStudentCustomFees } from '@/api/students'

const route = useRoute()
const router = useRouter()
const parentVal = computed(() => route.params['student'] ?? route.query['student'] ?? '')

const title = 'Custom Fee'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Custom Fee' },
  ]

const form = reactive({
    fee_head: "",
    amount: "",
    due_date: "",
    remarks: "",
  })

const relationOptions = reactive({
    fee_head: []
  })

async function loadPreRequisite() {
  if (typeof studentsStudentCustomFees.preRequisite !== 'function') return
  try {
    const { data } = await studentsStudentCustomFees.preRequisite()
    preReq.value = data
    
    relationOptions['fee_head'] = pickPreReq(preReq.value, 'fee_head')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await studentsStudentCustomFees.show(parentVal.value, uuid)
    const record = data?.customfee ?? data
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
      const res = await studentsStudentCustomFees.store(parentVal.value, { ...form })
      message = res.data?.message || 'Custom Fee created successfully.'
    } else {
      const res = await studentsStudentCustomFees.update(parentVal.value, route.params.uuid, { ...form })
      message = res.data?.message || 'Custom Fee updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.custom-fee.index' })
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
