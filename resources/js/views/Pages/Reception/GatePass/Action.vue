<!--
  Page: Reception/GatePass/Action.vue  (auto-generated full implementation - create & edit)
  API:   receptionGatePasses @ app/reception/gate-passes
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Gate Pass' : 'Edit Gate Pass'" :navs="navs">
      <PageHeaderAction base="reception.gate-pass" title="Gate Pass" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Gate Pass' : 'Edit Gate Pass'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'reception.gate-pass.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="to">To<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="to" v-model="form.to" type="text" :class="errors.to ? 'border-destructive' : ''" />
          <p v-if="errors.to" class="text-xs text-destructive">{{ String(errors.to[0] || errors.to) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="purpose">Purpose<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="purpose" v-model="form.purpose" type="text" :class="errors.purpose ? 'border-destructive' : ''" />
          <p v-if="errors.purpose" class="text-xs text-destructive">{{ String(errors.purpose[0] || errors.purpose) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_at">Datetime<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="start_at" v-model="form.start_at" type="date" :class="errors.start_at ? 'border-destructive' : ''" />
          <p v-if="errors.start_at" class="text-xs text-destructive">{{ String(errors.start_at[0] || errors.start_at) }}</p>
        </div>

        <FormArrayInput
          v-model="form.requesters"
          label="Requesters"
          :required="true"
          placeholder="Add value"
          :error="errors.requesters ? String(errors.requesters[0] || errors.requesters) : ''"
        />

        <div class="space-y-1.5">
          <Label for="reason">Reason<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="reason" v-model="form.reason" type="text" :class="errors.reason ? 'border-destructive' : ''" />
          <p v-if="errors.reason" class="text-xs text-destructive">{{ String(errors.reason[0] || errors.reason) }}</p>
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
import { receptionGatePasses } from '@/api/reception'

const route = useRoute()
const router = useRouter()

const title = 'Gate Pass'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Reception' },
    { label: 'Gate Pass' },
  ]

const form = reactive({
    to: "",
    purpose: "",
    start_at: "",
    requesters: [],
    reason: "",
    remarks: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof receptionGatePasses.preRequisite !== 'function') return
  try {
    const { data } = await receptionGatePasses.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await receptionGatePasses.show(uuid)
    const record = data?.gatepass ?? data
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
      const res = await receptionGatePasses.store({ ...form })
      message = res.data?.message || 'Gate Pass created successfully.'
    } else {
      const res = await receptionGatePasses.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Gate Pass updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'reception.gate-pass.index' })
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
