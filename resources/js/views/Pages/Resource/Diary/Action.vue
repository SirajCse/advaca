<!--
  Page: Resource/Diary/Action.vue  (auto-generated full implementation - create & edit)
  API:   resourceDiaries @ app/resource/diaries
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Diary' : 'Edit Diary'" :navs="navs">
      <PageHeaderAction base="resource.diary" title="Diary" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Diary' : 'Edit Diary'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'resource.diary.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="audience_type">Audience type<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="audience_type" v-model="form.audience_type" type="text" :class="errors.audience_type ? 'border-destructive' : ''" />
          <p v-if="errors.audience_type" class="text-xs text-destructive">{{ String(errors.audience_type[0] || errors.audience_type) }}</p>
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
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <FormArrayInput
          v-model="form.details"
          label="Details"
          :required="true"
          placeholder="Add value"
          :error="errors.details ? String(errors.details[0] || errors.details) : ''"
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
import { resourceDiaries } from '@/api/resource'

const route = useRoute()
const router = useRouter()

const title = 'Diary'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Resource' },
    { label: 'Diary' },
  ]

const form = reactive({
    audience_type: "",
    batches: [],
    subject: "",
    students: [],
    date: "",
    details: [],
  })

const relationOptions = reactive({
    subject: []
  })

async function loadPreRequisite() {
  if (typeof resourceDiaries.preRequisite !== 'function') return
  try {
    const { data } = await resourceDiaries.preRequisite()
    preReq.value = data
    
    relationOptions['subject'] = pickPreReq(preReq.value, 'subject')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await resourceDiaries.show(uuid)
    const record = data?.diary ?? data
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
      const res = await resourceDiaries.store({ ...form })
      message = res.data?.message || 'Diary created successfully.'
    } else {
      const res = await resourceDiaries.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Diary updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'resource.diary.index' })
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
