<!--
  Page: Inventory/StockRequisition/Action.vue  (auto-generated full implementation - create & edit)
  API:   inventoryInventoryStockRequisitions @ app/inventory/inventory/stock-requisitions
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Stock Requisition' : 'Edit Stock Requisition'" :navs="navs">
      <PageHeaderAction base="inventory.stock-requisition" title="Stock Requisition" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Stock Requisition' : 'Edit Stock Requisition'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'inventory.stock-requisition.index' }"
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
          v-model="form.vendor"
          :options="relationOptions.vendor"
          label="Vendor"
          :required="false"
          :error="errors.vendor ? String(errors.vendor[0] || errors.vendor) : ''"
        />

        <FormRelationSelect
          v-model="form.employee"
          :options="relationOptions.employee"
          label="Employee"
          :required="false"
          :error="errors.employee ? String(errors.employee[0] || errors.employee) : ''"
        />

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="place">Place<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="place" v-model="form.place" type="text" :class="errors.place ? 'border-destructive' : ''" />
          <p v-if="errors.place" class="text-xs text-destructive">{{ String(errors.place[0] || errors.place) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <FormArrayInput
          v-model="form.items"
          label="Items"
          :required="true"
          placeholder="Add value"
          :error="errors.items ? String(errors.items[0] || errors.items) : ''"
        />


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
import { inventoryInventoryStockRequisitions } from '@/api/inventory'

const route = useRoute()
const router = useRouter()

const title = 'Stock Requisition'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Inventory' },
    { label: 'Stock Requisition' },
  ]

const form = reactive({
    inventory: "",
    vendor: "",
    employee: "",
    date: "",
    place: "",
    description: "",
    items: [],
  })

const relationOptions = reactive({
    inventory: [],
    vendor: [],
    employee: []
  })

async function loadPreRequisite() {
  if (typeof inventoryInventoryStockRequisitions.preRequisite !== 'function') return
  try {
    const { data } = await inventoryInventoryStockRequisitions.preRequisite()
    preReq.value = data
    
    relationOptions['inventory'] = pickPreReq(preReq.value, 'inventory')
    relationOptions['vendor'] = pickPreReq(preReq.value, 'vendor')
    relationOptions['employee'] = pickPreReq(preReq.value, 'employee')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await inventoryInventoryStockRequisitions.show(uuid)
    const record = data?.stockrequisition ?? data
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
      const res = await inventoryInventoryStockRequisitions.store({ ...form })
      message = res.data?.message || 'Stock Requisition created successfully.'
    } else {
      const res = await inventoryInventoryStockRequisitions.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Stock Requisition updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'inventory.stock-requisition.index' })
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
