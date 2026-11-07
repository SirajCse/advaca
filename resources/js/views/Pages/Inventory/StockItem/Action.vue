<!--
  Page: Inventory/StockItem/Action.vue  (auto-generated full implementation - create & edit)
  API:   inventoryInventoryStockItems @ app/inventory/inventory/stock-items
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Stock Item' : 'Edit Stock Item'" :navs="navs">
      <PageHeaderAction base="inventory.stock-item" title="Stock Item" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Stock Item' : 'Edit Stock Item'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'inventory.stock-item.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="code">Code<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="code" v-model="form.code" type="text" :class="errors.code ? 'border-destructive' : ''" />
          <p v-if="errors.code" class="text-xs text-destructive">{{ String(errors.code[0] || errors.code) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Stock category"
          :required="true"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="place">Place<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="place" v-model="form.place" type="text" :class="errors.place ? 'border-destructive' : ''" />
          <p v-if="errors.place" class="text-xs text-destructive">{{ String(errors.place[0] || errors.place) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="quantity">Quantity<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="quantity" v-model="form.quantity" type="number" :class="errors.quantity ? 'border-destructive' : ''" />
          <p v-if="errors.quantity" class="text-xs text-destructive">{{ String(errors.quantity[0] || errors.quantity) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="unit">Unit<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="unit" v-model="form.unit" type="text" :class="errors.unit ? 'border-destructive' : ''" />
          <p v-if="errors.unit" class="text-xs text-destructive">{{ String(errors.unit[0] || errors.unit) }}</p>
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
import { inventoryInventoryStockItems } from '@/api/inventory'

const route = useRoute()
const router = useRouter()

const title = 'Stock Item'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Inventory' },
    { label: 'Stock Item' },
  ]

const form = reactive({
    name: "",
    code: "",
    category: "",
    place: "",
    type: "",
    quantity: "",
    unit: "",
    description: "",
  })

const relationOptions = reactive({
    category: []
  })

async function loadPreRequisite() {
  if (typeof inventoryInventoryStockItems.preRequisite !== 'function') return
  try {
    const { data } = await inventoryInventoryStockItems.preRequisite()
    preReq.value = data
    
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await inventoryInventoryStockItems.show(uuid)
    const record = data?.stockitem ?? data
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
      const res = await inventoryInventoryStockItems.store({ ...form })
      message = res.data?.message || 'Stock Item created successfully.'
    } else {
      const res = await inventoryInventoryStockItems.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Stock Item updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'inventory.stock-item.index' })
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
