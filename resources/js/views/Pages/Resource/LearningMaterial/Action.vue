<!--
  Page: Resource/LearningMaterial/Action.vue  (auto-generated full implementation - create & edit)
  API:   resourceLearningMaterials @ app/resource/learning-materials
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Learning Material' : 'Edit Learning Material'" :navs="navs">
      <PageHeaderAction base="resource.learning-material" title="Learning Material" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Learning Material' : 'Edit Learning Material'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'resource.learning-material.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="audience_type">Audience type<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="audience_type" v-model="form.audience_type" type="text" :class="errors.audience_type ? 'border-destructive' : ''" />
          <p v-if="errors.audience_type" class="text-xs text-destructive">{{ String(errors.audience_type[0] || errors.audience_type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <FormArrayInput
          v-model="form.batches"
          label="Batch"
          :required="true"
          placeholder="Add value"
          :error="errors.batches ? String(errors.batches[0] || errors.batches) : ''"
        />

        <FormRelationSelect
          v-model="form.subject"
          :options="relationOptions.subject"
          label="Subject"
          :required="false"
          :error="errors.subject ? String(errors.subject[0] || errors.subject) : ''"
        />

        <FormArrayInput
          v-model="form.students"
          label="Student"
          :required="true"
          placeholder="Add value"
          :error="errors.students ? String(errors.students[0] || errors.students) : ''"
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
import { resourceLearningMaterials } from '@/api/resource'

const route = useRoute()
const router = useRouter()

const title = 'Learning Material'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Resource' },
    { label: 'Learning Material' },
  ]

const form = reactive({
    audience_type: "",
    title: "",
    batches: [],
    subject: "",
    students: [],
    description: "",
  })

const relationOptions = reactive({
    subject: []
  })

async function loadPreRequisite() {
  if (typeof resourceLearningMaterials.preRequisite !== 'function') return
  try {
    const { data } = await resourceLearningMaterials.preRequisite()
    preReq.value = data
    
    relationOptions['subject'] = pickPreReq(preReq.value, 'subject')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await resourceLearningMaterials.show(uuid)
    const record = data?.learningmaterial ?? data
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
      const res = await resourceLearningMaterials.store({ ...form })
      message = res.data?.message || 'Learning Material created successfully.'
    } else {
      const res = await resourceLearningMaterials.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Learning Material updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'resource.learning-material.index' })
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
