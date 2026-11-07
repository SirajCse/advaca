<!--
  Page: Finance/FeeHead/Action.vue  (auto-generated full implementation - create & edit)
  API:   financeFeeHeads @ app/finance/fee-heads
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Fee Head' : 'Edit Fee Head'" :navs="navs">
      <PageHeaderAction base="finance.fee-head" title="Fee Head" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Fee Head' : 'Edit Fee Head'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'finance.fee-head.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="fee_group">Fee group<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="fee_group" v-model="form.fee_group" type="text" :class="errors.fee_group ? 'border-destructive' : ''" />
          <p v-if="errors.fee_group" class="text-xs text-destructive">{{ String(errors.fee_group[0] || errors.fee_group) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="tax">Tax<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="tax" v-model="form.tax" type="text" :class="errors.tax ? 'border-destructive' : ''" />
          <p v-if="errors.tax" class="text-xs text-destructive">{{ String(errors.tax[0] || errors.tax) }}</p>
        </div>

        <FormSelect
          v-model="form.tax_type"
          :options="[{ value: 'inclusive', label: 'Inclusive' }]"
          label="Type"
          :required="false"
          :error="errors.tax_type ? String(errors.tax_type[0] || errors.tax_type) : ''"
        />

        <div class="space-y-1.5">
          <Label for="hsn_code">Hsn code<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="hsn_code" v-model="form.hsn_code" type="text" :class="errors.hsn_code ? 'border-destructive' : ''" />
          <p v-if="errors.hsn_code" class="text-xs text-destructive">{{ String(errors.hsn_code[0] || errors.hsn_code) }}</p>
        </div>

        <FormArrayInput
          v-model="form.components"
          label="Components"
          :required="false"
          placeholder="Add value"
          :error="errors.components ? String(errors.components[0] || errors.components) : ''"
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
import { financeFeeHeads } from '@/api/finance'

const route = useRoute()
const router = useRouter()

const title = 'Fee Head'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Finance' },
    { label: 'Fee Head' },
  ]

const form = reactive({
    name: "",
    fee_group: "",
    type: "",
    tax: "",
    tax_type: "",
    hsn_code: "",
    components: [],
    description: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof financeFeeHeads.preRequisite !== 'function') return
  try {
    const { data } = await financeFeeHeads.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await financeFeeHeads.show(uuid)
    const record = data?.feehead ?? data
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
      const res = await financeFeeHeads.store({ ...form })
      message = res.data?.message || 'Fee Head created successfully.'
    } else {
      const res = await financeFeeHeads.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Fee Head updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'finance.fee-head.index' })
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
