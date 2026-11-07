<!--
  Page: Transport/Fee/Action.vue  (auto-generated full implementation - create & edit)
  API:   transportFees @ app/transport/fees
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Fee' : 'Edit Fee'" :navs="navs">
      <PageHeaderAction base="transport.fee" title="Fee" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Fee' : 'Edit Fee'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'transport.fee.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="fee_concession_type">Fee concession type<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="fee_concession_type" v-model="form.fee_concession_type" type="text" :class="errors.fee_concession_type ? 'border-destructive' : ''" />
          <p v-if="errors.fee_concession_type" class="text-xs text-destructive">{{ String(errors.fee_concession_type[0] || errors.fee_concession_type) }}</p>
        </div>

        <FormArrayInput
          v-model="form.fee_groups"
          label="Fee groups"
          :required="true"
          placeholder="Add value"
          :error="errors.fee_groups ? String(errors.fee_groups[0] || errors.fee_groups) : ''"
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
import { transportFees } from '@/api/transport'

const route = useRoute()
const router = useRouter()

const title = 'Fee'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Transport' },
    { label: 'Fee' },
  ]

const form = reactive({
    fee_concession_type: "",
    fee_groups: [],
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof transportFees.preRequisite !== 'function') return
  try {
    const { data } = await transportFees.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await transportFees.show(uuid)
    const record = data?.fee ?? data
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
      const res = await transportFees.store({ ...form })
      message = res.data?.message || 'Fee created successfully.'
    } else {
      const res = await transportFees.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Fee updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'transport.fee.index' })
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
