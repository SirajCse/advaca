<!--
  Page: Discipline/Incident/Action.vue  (auto-generated full implementation - create & edit)
  API:   disciplineIncidents @ app/discipline/incidents
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Incident' : 'Edit Incident'" :navs="navs">
      <PageHeaderAction base="discipline.incident" title="Incident" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Incident' : 'Edit Incident'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'discipline.incident.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="true"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="nature">Nature<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="nature" v-model="form.nature" type="text" :class="errors.nature ? 'border-destructive' : ''" />
          <p v-if="errors.nature" class="text-xs text-destructive">{{ String(errors.nature[0] || errors.nature) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="severity">Severity<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="severity" v-model="form.severity" type="text" :class="errors.severity ? 'border-destructive' : ''" />
          <p v-if="errors.severity" class="text-xs text-destructive">{{ String(errors.severity[0] || errors.severity) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="reported_by">Reported by<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="reported_by" v-model="form.reported_by" type="text" :class="errors.reported_by ? 'border-destructive' : ''" />
          <p v-if="errors.reported_by" class="text-xs text-destructive">{{ String(errors.reported_by[0] || errors.reported_by) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.student"
          :options="relationOptions.student"
          label="Student"
          :required="true"
          :error="errors.student ? String(errors.student[0] || errors.student) : ''"
        />

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="action">Action<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="action" v-model="form.action" type="text" :class="errors.action ? 'border-destructive' : ''" />
          <p v-if="errors.action" class="text-xs text-destructive">{{ String(errors.action[0] || errors.action) }}</p>
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
import { disciplineIncidents } from '@/api/discipline'

const route = useRoute()
const router = useRouter()

const title = 'Incident'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Discipline' },
    { label: 'Incident' },
  ]

const form = reactive({
    category: "",
    title: "",
    nature: "",
    severity: "",
    date: "",
    reported_by: "",
    student: "",
    description: "",
    action: "",
    remarks: "",
  })

const relationOptions = reactive({
    category: [],
    student: []
  })

async function loadPreRequisite() {
  if (typeof disciplineIncidents.preRequisite !== 'function') return
  try {
    const { data } = await disciplineIncidents.preRequisite()
    preReq.value = data
    
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await disciplineIncidents.show(uuid)
    const record = data?.incident ?? data
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
      const res = await disciplineIncidents.store({ ...form })
      message = res.data?.message || 'Incident created successfully.'
    } else {
      const res = await disciplineIncidents.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Incident updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'discipline.incident.index' })
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
