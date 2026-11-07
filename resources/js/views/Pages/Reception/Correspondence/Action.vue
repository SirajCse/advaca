<!--
  Page: Reception/Correspondence/Action.vue  (auto-generated full implementation - create & edit)
  API:   receptionCorrespondences @ app/reception/correspondences
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Correspondence' : 'Edit Correspondence'" :navs="navs">
      <PageHeaderAction base="reception.correspondence" title="Correspondence" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Correspondence' : 'Edit Correspondence'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'reception.correspondence.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="mode">Mode<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="mode" v-model="form.mode" type="text" :class="errors.mode ? 'border-destructive' : ''" />
          <p v-if="errors.mode" class="text-xs text-destructive">{{ String(errors.mode[0] || errors.mode) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="reference">Reference<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="reference" v-model="form.reference" type="text" :class="errors.reference ? 'border-destructive' : ''" />
          <p v-if="errors.reference" class="text-xs text-destructive">{{ String(errors.reference[0] || errors.reference) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="sender_title">Sender title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="sender_title" v-model="form.sender_title" type="text" :class="errors.sender_title ? 'border-destructive' : ''" />
          <p v-if="errors.sender_title" class="text-xs text-destructive">{{ String(errors.sender_title[0] || errors.sender_title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="sender_address">Sender address<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="sender_address" v-model="form.sender_address" type="text" :class="errors.sender_address ? 'border-destructive' : ''" />
          <p v-if="errors.sender_address" class="text-xs text-destructive">{{ String(errors.sender_address[0] || errors.sender_address) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="receiver_title">Receiver title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="receiver_title" v-model="form.receiver_title" type="text" :class="errors.receiver_title ? 'border-destructive' : ''" />
          <p v-if="errors.receiver_title" class="text-xs text-destructive">{{ String(errors.receiver_title[0] || errors.receiver_title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="receiver_address">Receiver address<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="receiver_address" v-model="form.receiver_address" type="text" :class="errors.receiver_address ? 'border-destructive' : ''" />
          <p v-if="errors.receiver_address" class="text-xs text-destructive">{{ String(errors.receiver_address[0] || errors.receiver_address) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="letter_number">Letter number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="letter_number" v-model="form.letter_number" type="text" :class="errors.letter_number ? 'border-destructive' : ''" />
          <p v-if="errors.letter_number" class="text-xs text-destructive">{{ String(errors.letter_number[0] || errors.letter_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
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
import { receptionCorrespondences } from '@/api/reception'

const route = useRoute()
const router = useRouter()

const title = 'Correspondence'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Reception' },
    { label: 'Correspondence' },
  ]

const form = reactive({
    type: "",
    mode: "",
    reference: "",
    sender_title: "",
    sender_address: "",
    receiver_title: "",
    receiver_address: "",
    letter_number: "",
    date: "",
    remarks: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof receptionCorrespondences.preRequisite !== 'function') return
  try {
    const { data } = await receptionCorrespondences.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await receptionCorrespondences.show(uuid)
    const record = data?.correspondence ?? data
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
      const res = await receptionCorrespondences.store({ ...form })
      message = res.data?.message || 'Correspondence created successfully.'
    } else {
      const res = await receptionCorrespondences.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Correspondence updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'reception.correspondence.index' })
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
