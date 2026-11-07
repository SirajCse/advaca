<!--
  Page: Academic/Batch/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicBatches @ app/academic/batches
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Batch' : 'Edit Batch'" :navs="navs">
      <PageHeaderAction base="academic.batch" title="Batch" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Batch' : 'Edit Batch'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.batch.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.course"
          :options="relationOptions.course"
          label="Course"
          :required="true"
          :error="errors.course ? String(errors.course[0] || errors.course) : ''"
        />

        <div class="space-y-1.5">
          <Label for="max_strength">Max strength<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="max_strength" v-model="form.max_strength" type="number" :class="errors.max_strength ? 'border-destructive' : ''" />
          <p v-if="errors.max_strength" class="text-xs text-destructive">{{ String(errors.max_strength[0] || errors.max_strength) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="roll_number_prefix">Roll number prefix<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="roll_number_prefix" v-model="form.roll_number_prefix" type="text" :class="errors.roll_number_prefix ? 'border-destructive' : ''" />
          <p v-if="errors.roll_number_prefix" class="text-xs text-destructive">{{ String(errors.roll_number_prefix[0] || errors.roll_number_prefix) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="pg_account">Pg account<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="pg_account" v-model="form.pg_account" type="text" :class="errors.pg_account ? 'border-destructive' : ''" />
          <p v-if="errors.pg_account" class="text-xs text-destructive">{{ String(errors.pg_account[0] || errors.pg_account) }}</p>
        </div>

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
import { academicBatches } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Batch'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Batch' },
  ]

const form = reactive({
    name: "",
    course: "",
    max_strength: "",
    roll_number_prefix: "",
    pg_account: "",
    description: "",
  })

const relationOptions = reactive({
    course: []
  })

async function loadPreRequisite() {
  if (typeof academicBatches.preRequisite !== 'function') return
  try {
    const { data } = await academicBatches.preRequisite()
    preReq.value = data
    
    relationOptions['course'] = pickPreReq(preReq.value, 'course')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicBatches.show(uuid)
    const record = data?.batch ?? data
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
      const res = await academicBatches.store({ ...form })
      message = res.data?.message || 'Batch created successfully.'
    } else {
      const res = await academicBatches.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Batch updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.batch.index' })
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
