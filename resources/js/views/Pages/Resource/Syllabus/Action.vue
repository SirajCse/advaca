<!--
  Page: Resource/Syllabus/Action.vue  (auto-generated full implementation - create & edit)
  API:   resourceSyllabuses @ app/resource/syllabuses
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Syllabus' : 'Edit Syllabus'" :navs="navs">
      <PageHeaderAction base="resource.syllabus" title="Syllabus" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Syllabus' : 'Edit Syllabus'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'resource.syllabus.index' }"
        @submit="submit"
      >
                <FormArrayInput
          v-model="form.batches"
          label="Batch"
          :required="false"
          placeholder="Add value"
          :error="errors.batches ? String(errors.batches[0] || errors.batches) : ''"
        />

        <FormRelationSelect
          v-model="form.subject"
          :options="relationOptions.subject"
          label="Subject"
          :required="true"
          :error="errors.subject ? String(errors.subject[0] || errors.subject) : ''"
        />

        <div class="space-y-1.5">
          <Label for="remarks">Remarks<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="remarks" v-model="form.remarks" :rows="4" />
          <p v-if="errors.remarks" class="text-xs text-destructive">{{ String(errors.remarks[0] || errors.remarks) }}</p>
        </div>

        <FormArrayInput
          v-model="form.units"
          label="Units"
          :required="true"
          placeholder="Add value"
          :error="errors.units ? String(errors.units[0] || errors.units) : ''"
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
import { resourceSyllabuses } from '@/api/resource'

const route = useRoute()
const router = useRouter()

const title = 'Syllabus'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Resource' },
    { label: 'Syllabus' },
  ]

const form = reactive({
    batches: [],
    subject: "",
    remarks: "",
    units: [],
  })

const relationOptions = reactive({
    subject: []
  })

async function loadPreRequisite() {
  if (typeof resourceSyllabuses.preRequisite !== 'function') return
  try {
    const { data } = await resourceSyllabuses.preRequisite()
    preReq.value = data
    
    relationOptions['subject'] = pickPreReq(preReq.value, 'subject')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await resourceSyllabuses.show(uuid)
    const record = data?.syllabus ?? data
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
      const res = await resourceSyllabuses.store({ ...form })
      message = res.data?.message || 'Syllabus created successfully.'
    } else {
      const res = await resourceSyllabuses.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Syllabus updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'resource.syllabus.index' })
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
