<!--
  Page: Communication/WhatsApp/Action.vue  (auto-generated full implementation - create & edit)
  API:   communicationWhatsapp @ app/communication/whatsapp
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Whats App' : 'Edit Whats App'" :navs="navs">
      <PageHeaderAction base="communication.whats-app" title="Whats App" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Whats App' : 'Edit Whats App'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'communication.whats-app.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.subject"
          :options="relationOptions.subject"
          label="Subject"
          :required="true"
          :error="errors.subject ? String(errors.subject[0] || errors.subject) : ''"
        />

        <div class="space-y-1.5">
          <Label for="student_audience_type">Audience<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="student_audience_type" v-model="form.student_audience_type" type="text" :class="errors.student_audience_type ? 'border-destructive' : ''" />
          <p v-if="errors.student_audience_type" class="text-xs text-destructive">{{ String(errors.student_audience_type[0] || errors.student_audience_type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="employee_audience_type">Audience<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="employee_audience_type" v-model="form.employee_audience_type" type="text" :class="errors.employee_audience_type ? 'border-destructive' : ''" />
          <p v-if="errors.employee_audience_type" class="text-xs text-destructive">{{ String(errors.employee_audience_type[0] || errors.employee_audience_type) }}</p>
        </div>

        <FormArrayInput
          v-model="form.student_audiences"
          label="Audience"
          :required="true"
          placeholder="Add value"
          :error="errors.student_audiences ? String(errors.student_audiences[0] || errors.student_audiences) : ''"
        />

        <FormArrayInput
          v-model="form.employee_audiences"
          label="Audience"
          :required="true"
          placeholder="Add value"
          :error="errors.employee_audiences ? String(errors.employee_audiences[0] || errors.employee_audiences) : ''"
        />

        <div class="space-y-1.5">
          <Label for="inclusion">Inclusion<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="inclusion" v-model="form.inclusion" type="text" :class="errors.inclusion ? 'border-destructive' : ''" />
          <p v-if="errors.inclusion" class="text-xs text-destructive">{{ String(errors.inclusion[0] || errors.inclusion) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="exclusion">Exclusion<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="exclusion" v-model="form.exclusion" type="text" :class="errors.exclusion ? 'border-destructive' : ''" />
          <p v-if="errors.exclusion" class="text-xs text-destructive">{{ String(errors.exclusion[0] || errors.exclusion) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="content">Content<span v-if="true" class="text-destructive"> *</span></Label>
          <Textarea id="content" v-model="form.content" :rows="4" />
          <p v-if="errors.content" class="text-xs text-destructive">{{ String(errors.content[0] || errors.content) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="template_code">Template code<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="template_code" v-model="form.template_code" type="text" :class="errors.template_code ? 'border-destructive' : ''" />
          <p v-if="errors.template_code" class="text-xs text-destructive">{{ String(errors.template_code[0] || errors.template_code) }}</p>
        </div>

        <FormArrayInput
          v-model="form.variables"
          label="Variables"
          :required="false"
          placeholder="Add value"
          :error="errors.variables ? String(errors.variables[0] || errors.variables) : ''"
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
import { communicationWhatsapp } from '@/api/communication'

const route = useRoute()
const router = useRouter()

const title = 'Whats App'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Communication' },
    { label: 'Whats App' },
  ]

const form = reactive({
    subject: "",
    student_audience_type: "",
    employee_audience_type: "",
    student_audiences: [],
    employee_audiences: [],
    inclusion: "",
    exclusion: "",
    content: "",
    template_code: "",
    variables: [],
  })

const relationOptions = reactive({
    subject: []
  })

async function loadPreRequisite() {
  if (typeof communicationWhatsapp.preRequisite !== 'function') return
  try {
    const { data } = await communicationWhatsapp.preRequisite()
    preReq.value = data
    
    relationOptions['subject'] = pickPreReq(preReq.value, 'subject')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await communicationWhatsapp.show(uuid)
    const record = data?.whatsapp ?? data
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
      const res = await communicationWhatsapp.store({ ...form })
      message = res.data?.message || 'Whats App created successfully.'
    } else {
      const res = await communicationWhatsapp.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Whats App updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'communication.whats-app.index' })
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
