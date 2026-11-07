<!--
  Page: Reception/VisitorLog/Action.vue  (auto-generated full implementation - create & edit)
  API:   receptionVisitorLogs @ app/reception/visitor-logs
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Visitor Log' : 'Edit Visitor Log'" :navs="navs">
      <PageHeaderAction base="reception.visitor-log" title="Visitor Log" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Visitor Log' : 'Edit Visitor Log'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'reception.visitor-log.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="count">Count<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="count" v-model="form.count" type="number" :class="errors.count ? 'border-destructive' : ''" />
          <p v-if="errors.count" class="text-xs text-destructive">{{ String(errors.count[0] || errors.count) }}</p>
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
          <Label for="contact_number">Contact number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="contact_number" v-model="form.contact_number" type="text" :class="errors.contact_number ? 'border-destructive' : ''" />
          <p v-if="errors.contact_number" class="text-xs text-destructive">{{ String(errors.contact_number[0] || errors.contact_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="entry_at">Entry at<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="entry_at" v-model="form.entry_at" type="date" :class="errors.entry_at ? 'border-destructive' : ''" />
          <p v-if="errors.entry_at" class="text-xs text-destructive">{{ String(errors.entry_at[0] || errors.entry_at) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="exit_at">Exit at<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="exit_at" v-model="form.exit_at" type="date" :class="errors.exit_at ? 'border-destructive' : ''" />
          <p v-if="errors.exit_at" class="text-xs text-destructive">{{ String(errors.exit_at[0] || errors.exit_at) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.visitor"
          :options="relationOptions.visitor"
          label="Visitor"
          :required="false"
          :error="errors.visitor ? String(errors.visitor[0] || errors.visitor) : ''"
        />

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
import { receptionVisitorLogs } from '@/api/reception'

const route = useRoute()
const router = useRouter()

const title = 'Visitor Log'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Reception' },
    { label: 'Visitor Log' },
  ]

const form = reactive({
    type: "",
    count: "",
    purpose: "",
    name: "",
    company_name: "",
    contact_number: "",
    entry_at: "",
    exit_at: "",
    visitor: "",
    remarks: "",
  })

const relationOptions = reactive({
    visitor: []
  })

async function loadPreRequisite() {
  if (typeof receptionVisitorLogs.preRequisite !== 'function') return
  try {
    const { data } = await receptionVisitorLogs.preRequisite()
    preReq.value = data
    
    relationOptions['visitor'] = pickPreReq(preReq.value, 'visitor')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await receptionVisitorLogs.show(uuid)
    const record = data?.visitorlog ?? data
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
      const res = await receptionVisitorLogs.store({ ...form })
      message = res.data?.message || 'Visitor Log created successfully.'
    } else {
      const res = await receptionVisitorLogs.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Visitor Log updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'reception.visitor-log.index' })
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
