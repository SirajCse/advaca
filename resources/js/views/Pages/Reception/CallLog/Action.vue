<!--
  Page: Reception/CallLog/Action.vue  (auto-generated full implementation - create & edit)
  API:   receptionCallLogs @ app/reception/call-logs
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Call Log' : 'Edit Call Log'" :navs="navs">
      <PageHeaderAction base="reception.call-log" title="Call Log" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Call Log' : 'Edit Call Log'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'reception.call-log.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="purpose">Purpose<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="purpose" v-model="form.purpose" type="text" :class="errors.purpose ? 'border-destructive' : ''" />
          <p v-if="errors.purpose" class="text-xs text-destructive">{{ String(errors.purpose[0] || errors.purpose) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="company_name">Company name<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="company_name" v-model="form.company_name" type="text" :class="errors.company_name ? 'border-destructive' : ''" />
          <p v-if="errors.company_name" class="text-xs text-destructive">{{ String(errors.company_name[0] || errors.company_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="incoming_number">Incoming number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="incoming_number" v-model="form.incoming_number" type="text" :class="errors.incoming_number ? 'border-destructive' : ''" />
          <p v-if="errors.incoming_number" class="text-xs text-destructive">{{ String(errors.incoming_number[0] || errors.incoming_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="outgoing_number">Outgoing number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="outgoing_number" v-model="form.outgoing_number" type="text" :class="errors.outgoing_number ? 'border-destructive' : ''" />
          <p v-if="errors.outgoing_number" class="text-xs text-destructive">{{ String(errors.outgoing_number[0] || errors.outgoing_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="call_at">Call at<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="call_at" v-model="form.call_at" type="date" :class="errors.call_at ? 'border-destructive' : ''" />
          <p v-if="errors.call_at" class="text-xs text-destructive">{{ String(errors.call_at[0] || errors.call_at) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="duration">Duration<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="duration" v-model="form.duration" type="number" :class="errors.duration ? 'border-destructive' : ''" />
          <p v-if="errors.duration" class="text-xs text-destructive">{{ String(errors.duration[0] || errors.duration) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="conversation">Conversation<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="conversation" v-model="form.conversation" type="text" :class="errors.conversation ? 'border-destructive' : ''" />
          <p v-if="errors.conversation" class="text-xs text-destructive">{{ String(errors.conversation[0] || errors.conversation) }}</p>
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
import { receptionCallLogs } from '@/api/reception'

const route = useRoute()
const router = useRouter()

const title = 'Call Log'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Reception' },
    { label: 'Call Log' },
  ]

const form = reactive({
    type: "",
    purpose: "",
    name: "",
    company_name: "",
    incoming_number: "",
    outgoing_number: "",
    call_at: "",
    duration: "",
    conversation: "",
    remarks: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof receptionCallLogs.preRequisite !== 'function') return
  try {
    const { data } = await receptionCallLogs.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await receptionCallLogs.show(uuid)
    const record = data?.calllog ?? data
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
      const res = await receptionCallLogs.store({ ...form })
      message = res.data?.message || 'Call Log created successfully.'
    } else {
      const res = await receptionCallLogs.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Call Log updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'reception.call-log.index' })
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
