<!--
  Page: Inventory/StockCategory/Action.vue  (auto-generated full implementation - create & edit)
  API:   inventoryInventoryStockCategories @ app/inventory/inventory/stock-categories
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Stock Category' : 'Edit Stock Category'" :navs="navs">
      <PageHeaderAction base="inventory.stock-category" title="Stock Category" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Stock Category' : 'Edit Stock Category'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'inventory.stock-category.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.inventory"
          :options="relationOptions.inventory"
          label="Inventory"
          :required="true"
          :error="errors.inventory ? String(errors.inventory[0] || errors.inventory) : ''"
        />

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
import { inventoryInventoryStockCategories } from '@/api/inventory'

const route = useRoute()
const router = useRouter()

const title = 'Stock Category'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Inventory' },
    { label: 'Stock Category' },
  ]

const form = reactive({
    name: "",
    inventory: "",
    description: "",
  })

const relationOptions = reactive({
    inventory: []
  })

async function loadPreRequisite() {
  if (typeof inventoryInventoryStockCategories.preRequisite !== 'function') return
  try {
    const { data } = await inventoryInventoryStockCategories.preRequisite()
    preReq.value = data
    
    relationOptions['inventory'] = pickPreReq(preReq.value, 'inventory')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await inventoryInventoryStockCategories.show(uuid)
    const record = data?.stockcategory ?? data
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
      const res = await inventoryInventoryStockCategories.store({ ...form })
      message = res.data?.message || 'Stock Category created successfully.'
    } else {
      const res = await inventoryInventoryStockCategories.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Stock Category updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'inventory.stock-category.index' })
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
