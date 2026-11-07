<!--
  Page: Finance/LedgerType/Action.vue  (auto-generated full implementation - create & edit)
  API:   financeLedgerTypes @ app/finance/ledger-types
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Ledger Type' : 'Edit Ledger Type'" :navs="navs">
      <PageHeaderAction base="finance.ledger-type" title="Ledger Type" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Ledger Type' : 'Edit Ledger Type'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'finance.ledger-type.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="alias">Alias<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="alias" v-model="form.alias" type="text" :class="errors.alias ? 'border-destructive' : ''" />
          <p v-if="errors.alias" class="text-xs text-destructive">{{ String(errors.alias[0] || errors.alias) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="parent">Parent<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="parent" v-model="form.parent" type="text" :class="errors.parent ? 'border-destructive' : ''" />
          <p v-if="errors.parent" class="text-xs text-destructive">{{ String(errors.parent[0] || errors.parent) }}</p>
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
import { financeLedgerTypes } from '@/api/finance'

const route = useRoute()
const router = useRouter()

const title = 'Ledger Type'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Finance' },
    { label: 'Ledger Type' },
  ]

const form = reactive({
    name: "",
    alias: "",
    description: "",
    parent: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof financeLedgerTypes.preRequisite !== 'function') return
  try {
    const { data } = await financeLedgerTypes.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await financeLedgerTypes.show(uuid)
    const record = data?.ledgertype ?? data
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
      const res = await financeLedgerTypes.store({ ...form })
      message = res.data?.message || 'Ledger Type created successfully.'
    } else {
      const res = await financeLedgerTypes.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Ledger Type updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'finance.ledger-type.index' })
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
