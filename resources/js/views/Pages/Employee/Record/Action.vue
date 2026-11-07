<!--
  Page: Employee/Record/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeesEmployeeRecords @ app/employees/{employee}/records
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Record' : 'Edit Record'" :navs="navs">
      <PageHeaderAction base="employee.record" title="Record" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Record' : 'Edit Record'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'employee.record.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="status">Status<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="status" v-model="form.status" type="text" :class="errors.status ? 'border-destructive' : ''" />
          <p v-if="errors.status" class="text-xs text-destructive">{{ String(errors.status[0] || errors.status) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="comment">Comment<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="comment" v-model="form.comment" type="text" :class="errors.comment ? 'border-destructive' : ''" />
          <p v-if="errors.comment" class="text-xs text-destructive">{{ String(errors.comment[0] || errors.comment) }}</p>
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
import { employeesEmployeeRecords } from '@/api/employees'

const route = useRoute()
const router = useRouter()
const parentVal = computed(() => route.params['employee'] ?? route.query['employee'] ?? '')

const title = 'Record'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Employee' },
    { label: 'Record' },
  ]

const form = reactive({
    status: "",
    comment: "",
    remarks: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof employeesEmployeeRecords.preRequisite !== 'function') return
  try {
    const { data } = await employeesEmployeeRecords.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeesEmployeeRecords.show(parentVal.value, uuid)
    const record = data?.record ?? data
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
      const res = await employeesEmployeeRecords.store(parentVal.value, { ...form })
      message = res.data?.message || 'Record created successfully.'
    } else {
      const res = await employeesEmployeeRecords.update(parentVal.value, route.params.uuid, { ...form })
      message = res.data?.message || 'Record updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'employee.record.index' })
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
