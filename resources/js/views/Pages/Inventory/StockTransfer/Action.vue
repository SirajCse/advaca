<!--
  Page: Inventory/StockTransfer/Action.vue  (auto-generated full implementation - create & edit)
  API:   inventoryInventoryStockTransfers @ app/inventory/inventory/stock-transfers
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Stock Transfer' : 'Edit Stock Transfer'" :navs="navs">
      <PageHeaderAction base="inventory.stock-transfer" title="Stock Transfer" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Stock Transfer' : 'Edit Stock Transfer'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'inventory.stock-transfer.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="from_place">From place<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="from_place" v-model="form.from_place" type="text" :class="errors.from_place ? 'border-destructive' : ''" />
          <p v-if="errors.from_place" class="text-xs text-destructive">{{ String(errors.from_place[0] || errors.from_place) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="to_place">To place<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="to_place" v-model="form.to_place" type="text" :class="errors.to_place ? 'border-destructive' : ''" />
          <p v-if="errors.to_place" class="text-xs text-destructive">{{ String(errors.to_place[0] || errors.to_place) }}</p>
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
import { inventoryInventoryStockTransfers } from '@/api/inventory'

const route = useRoute()
const router = useRouter()

const title = 'Stock Transfer'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Inventory' },
    { label: 'Stock Transfer' },
  ]

const form = reactive({
    date: "",
    from_place: "",
    to_place: "",
    description: "",
    items: [],
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof inventoryInventoryStockTransfers.preRequisite !== 'function') return
  try {
    const { data } = await inventoryInventoryStockTransfers.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await inventoryInventoryStockTransfers.show(uuid)
    const record = data?.stocktransfer ?? data
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
      const res = await inventoryInventoryStockTransfers.store({ ...form })
      message = res.data?.message || 'Stock Transfer created successfully.'
    } else {
      const res = await inventoryInventoryStockTransfers.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Stock Transfer updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'inventory.stock-transfer.index' })
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
