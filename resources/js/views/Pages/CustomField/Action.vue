<!--
  Page: CustomField/Action.vue  (auto-generated full implementation - create & edit)
  API:   customFields @ app/custom-fields
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Custom Field' : 'Edit Custom Field'" :navs="navs">
      <PageHeaderAction base="custom-field" title="Custom Field" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Custom Field' : 'Edit Custom Field'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'custom-field.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="form">Form<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="form" v-model="form.form" type="text" :class="errors.form ? 'border-destructive' : ''" />
          <p v-if="errors.form" class="text-xs text-destructive">{{ String(errors.form[0] || errors.form) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="label">Label<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="label" v-model="form.label" type="text" :class="errors.label ? 'border-destructive' : ''" />
          <p v-if="errors.label" class="text-xs text-destructive">{{ String(errors.label[0] || errors.label) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="is_required">Is required</Label>
          </div>
          <Switch id="is_required" v-model="form.is_required" />
        </div>

        <div class="space-y-1.5">
          <Label for="min_length">Min length<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="min_length" v-model="form.min_length" type="number" :class="errors.min_length ? 'border-destructive' : ''" />
          <p v-if="errors.min_length" class="text-xs text-destructive">{{ String(errors.min_length[0] || errors.min_length) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="max_length">Max length<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="max_length" v-model="form.max_length" type="number" :class="errors.max_length ? 'border-destructive' : ''" />
          <p v-if="errors.max_length" class="text-xs text-destructive">{{ String(errors.max_length[0] || errors.max_length) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="min_value">Min value<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="min_value" v-model="form.min_value" type="number" :class="errors.min_value ? 'border-destructive' : ''" />
          <p v-if="errors.min_value" class="text-xs text-destructive">{{ String(errors.min_value[0] || errors.min_value) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="max_value">Max value<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="max_value" v-model="form.max_value" type="number" :class="errors.max_value ? 'border-destructive' : ''" />
          <p v-if="errors.max_value" class="text-xs text-destructive">{{ String(errors.max_value[0] || errors.max_value) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="options">Options<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="options" v-model="form.options" type="text" :class="errors.options ? 'border-destructive' : ''" />
          <p v-if="errors.options" class="text-xs text-destructive">{{ String(errors.options[0] || errors.options) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="position">Position<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="position" v-model="form.position" type="number" :class="errors.position ? 'border-destructive' : ''" />
          <p v-if="errors.position" class="text-xs text-destructive">{{ String(errors.position[0] || errors.position) }}</p>
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
import { customFields } from '@/api/core'

const route = useRoute()
const router = useRouter()

const title = 'Custom Field'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Custom Field' },
    { label: 'Custom Field' },
  ]

const form = reactive({
    form: "",
    type: "",
    label: "",
    is_required: false,
    min_length: "",
    max_length: "",
    min_value: "",
    max_value: "",
    options: "",
    position: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof customFields.preRequisite !== 'function') return
  try {
    const { data } = await customFields.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await customFields.show(uuid)
    const record = data?.customfield ?? data
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
      const res = await customFields.store({ ...form })
      message = res.data?.message || 'Custom Field created successfully.'
    } else {
      const res = await customFields.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Custom Field updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'custom-field.index' })
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
