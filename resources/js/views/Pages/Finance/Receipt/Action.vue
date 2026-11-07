<!--
  Page: Finance/Receipt/Action.vue  (auto-generated full implementation - create & edit)
  API:   financeReceipts @ app/finance/receipts
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Receipt' : 'Edit Receipt'" :navs="navs">
      <PageHeaderAction base="finance.receipt" title="Receipt" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Receipt' : 'Edit Receipt'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'finance.receipt.index' }"
        @submit="submit"
      >
                <FormSelect
          v-model="form.type"
          :options="[{ value: 'student', label: 'Student' }]"
          label="Type"
          :required="true"
          :error="errors.type ? String(errors.type[0] || errors.type) : ''"
        />

        <div class="space-y-1.5">
          <Label for="primary_ledger">Ledger<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="primary_ledger" v-model="form.primary_ledger" type="text" :class="errors.primary_ledger ? 'border-destructive' : ''" />
          <p v-if="errors.primary_ledger" class="text-xs text-destructive">{{ String(errors.primary_ledger[0] || errors.primary_ledger) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="false"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="secondary_ledger">Ledger<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="secondary_ledger" v-model="form.secondary_ledger" type="text" :class="errors.secondary_ledger ? 'border-destructive' : ''" />
          <p v-if="errors.secondary_ledger" class="text-xs text-destructive">{{ String(errors.secondary_ledger[0] || errors.secondary_ledger) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="amount">Amount<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="amount" v-model="form.amount" type="number" :class="errors.amount ? 'border-destructive' : ''" />
          <p v-if="errors.amount" class="text-xs text-destructive">{{ String(errors.amount[0] || errors.amount) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="contact_number">Contact number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="contact_number" v-model="form.contact_number" type="text" :class="errors.contact_number ? 'border-destructive' : ''" />
          <p v-if="errors.contact_number" class="text-xs text-destructive">{{ String(errors.contact_number[0] || errors.contact_number) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.payment_method"
          :options="relationOptions.payment_method"
          label="Payment method"
          :required="true"
          :error="errors.payment_method ? String(errors.payment_method[0] || errors.payment_method) : ''"
        />

        <div class="space-y-1.5">
          <Label for="instrument_number">Instrument number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="instrument_number" v-model="form.instrument_number" type="text" :class="errors.instrument_number ? 'border-destructive' : ''" />
          <p v-if="errors.instrument_number" class="text-xs text-destructive">{{ String(errors.instrument_number[0] || errors.instrument_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="instrument_date">Instrument date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="instrument_date" v-model="form.instrument_date" type="date" :class="errors.instrument_date ? 'border-destructive' : ''" />
          <p v-if="errors.instrument_date" class="text-xs text-destructive">{{ String(errors.instrument_date[0] || errors.instrument_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="clearing_date">Clearing date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="clearing_date" v-model="form.clearing_date" type="date" :class="errors.clearing_date ? 'border-destructive' : ''" />
          <p v-if="errors.clearing_date" class="text-xs text-destructive">{{ String(errors.clearing_date[0] || errors.clearing_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="bank_detail">Bank detail<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="bank_detail" v-model="form.bank_detail" type="text" :class="errors.bank_detail ? 'border-destructive' : ''" />
          <p v-if="errors.bank_detail" class="text-xs text-destructive">{{ String(errors.bank_detail[0] || errors.bank_detail) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="branch_detail">Branch detail<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="branch_detail" v-model="form.branch_detail" type="text" :class="errors.branch_detail ? 'border-destructive' : ''" />
          <p v-if="errors.branch_detail" class="text-xs text-destructive">{{ String(errors.branch_detail[0] || errors.branch_detail) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="reference_number">Reference number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="reference_number" v-model="form.reference_number" type="text" :class="errors.reference_number ? 'border-destructive' : ''" />
          <p v-if="errors.reference_number" class="text-xs text-destructive">{{ String(errors.reference_number[0] || errors.reference_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="card_provider">Card provider<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="card_provider" v-model="form.card_provider" type="text" :class="errors.card_provider ? 'border-destructive' : ''" />
          <p v-if="errors.card_provider" class="text-xs text-destructive">{{ String(errors.card_provider[0] || errors.card_provider) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
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
import { financeReceipts } from '@/api/finance'

const route = useRoute()
const router = useRouter()

const title = 'Receipt'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Finance' },
    { label: 'Receipt' },
  ]

const form = reactive({
    type: "",
    primary_ledger: "",
    date: "",
    category: "",
    secondary_ledger: "",
    amount: "",
    name: "",
    contact_number: "",
    payment_method: "",
    instrument_number: "",
    instrument_date: "",
    clearing_date: "",
    bank_detail: "",
    branch_detail: "",
    reference_number: "",
    card_provider: "",
    description: "",
    remarks: "",
  })

const relationOptions = reactive({
    category: [],
    payment_method: []
  })

async function loadPreRequisite() {
  if (typeof financeReceipts.preRequisite !== 'function') return
  try {
    const { data } = await financeReceipts.preRequisite()
    preReq.value = data
    
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
    relationOptions['payment_method'] = pickPreReq(preReq.value, 'payment_method')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await financeReceipts.show(uuid)
    const record = data?.receipt ?? data
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
      const res = await financeReceipts.store({ ...form })
      message = res.data?.message || 'Receipt created successfully.'
    } else {
      const res = await financeReceipts.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Receipt updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'finance.receipt.index' })
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
