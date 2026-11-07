<!--
  Page: Inventory/Incharge/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeesEmployeeIncharges @ app/employees/{employee}/incharges
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Incharge' : 'Edit Incharge'" :navs="navs">
      <PageHeaderAction base="inventory.incharge" title="Incharge" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Incharge' : 'Edit Incharge'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'inventory.incharge.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.inventory"
          :options="relationOptions.inventory"
          label="Inventory"
          :required="true"
          :error="errors.inventory ? String(errors.inventory[0] || errors.inventory) : ''"
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
import { employeesEmployeeIncharges } from '@/api/employees'

const route = useRoute()
const router = useRouter()
const parentVal = computed(() => route.params['employee'] ?? route.query['employee'] ?? '')

const title = 'Incharge'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Inventory' },
    { label: 'Incharge' },
  ]

const form = reactive({
    inventory: "",
    employee: "",
    start_date: "",
    end_date: "",
    remarks: "",
  })

const relationOptions = reactive({
    inventory: [],
    employee: []
  })

async function loadPreRequisite() {
  if (typeof employeesEmployeeIncharges.preRequisite !== 'function') return
  try {
    const { data } = await employeesEmployeeIncharges.preRequisite()
    preReq.value = data
    
    relationOptions['inventory'] = pickPreReq(preReq.value, 'inventory')
    relationOptions['employee'] = pickPreReq(preReq.value, 'employee')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeesEmployeeIncharges.show(parentVal.value, uuid)
    const record = data?.incharge ?? data
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
      const res = await employeesEmployeeIncharges.store(parentVal.value, { ...form })
      message = res.data?.message || 'Incharge created successfully.'
    } else {
      const res = await employeesEmployeeIncharges.update(parentVal.value, route.params.uuid, { ...form })
      message = res.data?.message || 'Incharge updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'inventory.incharge.index' })
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
