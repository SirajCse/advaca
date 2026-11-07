<!--
  Page: Finance/PaymentMethod/Action.vue  (auto-generated full implementation - create & edit)
  API:   financePaymentMethods @ app/finance/payment-methods
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Payment Method' : 'Edit Payment Method'" :navs="navs">
      <PageHeaderAction base="finance.payment-method" title="Payment Method" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Payment Method' : 'Edit Payment Method'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'finance.payment-method.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="code">Code<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="code" v-model="form.code" type="text" :class="errors.code ? 'border-destructive' : ''" />
          <p v-if="errors.code" class="text-xs text-destructive">{{ String(errors.code[0] || errors.code) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="is_payment_gateway">Is payment gateway</Label>
          </div>
          <Switch id="is_payment_gateway" v-model="form.is_payment_gateway" />
        </div>

        <div class="space-y-1.5">
          <Label for="payment_gateway_name">Payment gateway name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="payment_gateway_name" v-model="form.payment_gateway_name" type="text" :class="errors.payment_gateway_name ? 'border-destructive' : ''" />
          <p v-if="errors.payment_gateway_name" class="text-xs text-destructive">{{ String(errors.payment_gateway_name[0] || errors.payment_gateway_name) }}</p>
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
import { financePaymentMethods } from '@/api/finance'

const route = useRoute()
const router = useRouter()

const title = 'Payment Method'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Finance' },
    { label: 'Payment Method' },
  ]

const form = reactive({
    name: "",
    code: "",
    is_payment_gateway: false,
    payment_gateway_name: "",
    description: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof financePaymentMethods.preRequisite !== 'function') return
  try {
    const { data } = await financePaymentMethods.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await financePaymentMethods.show(uuid)
    const record = data?.paymentmethod ?? data
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
      const res = await financePaymentMethods.store({ ...form })
      message = res.data?.message || 'Payment Method created successfully.'
    } else {
      const res = await financePaymentMethods.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Payment Method updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'finance.payment-method.index' })
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
