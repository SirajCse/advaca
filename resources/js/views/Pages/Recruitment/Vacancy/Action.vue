<!--
  Page: Recruitment/Vacancy/Action.vue  (auto-generated full implementation - create & edit)
  API:   recruitmentVacancies @ app/recruitment/vacancies
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Vacancy' : 'Edit Vacancy'" :navs="navs">
      <PageHeaderAction base="recruitment.vacancy" title="Vacancy" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Vacancy' : 'Edit Vacancy'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'recruitment.vacancy.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <FormArrayInput
          v-model="form.records"
          label="Records"
          :required="true"
          placeholder="Add value"
          :error="errors.records ? String(errors.records[0] || errors.records) : ''"
        />

        <div class="space-y-1.5">
          <Label for="last_application_date">Last application date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="last_application_date" v-model="form.last_application_date" type="date" :class="errors.last_application_date ? 'border-destructive' : ''" />
          <p v-if="errors.last_application_date" class="text-xs text-destructive">{{ String(errors.last_application_date[0] || errors.last_application_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="true" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="responsibility">Responsibility<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="responsibility" v-model="form.responsibility" type="text" :class="errors.responsibility ? 'border-destructive' : ''" />
          <p v-if="errors.responsibility" class="text-xs text-destructive">{{ String(errors.responsibility[0] || errors.responsibility) }}</p>
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
import { recruitmentVacancies } from '@/api/recruitment'

const route = useRoute()
const router = useRouter()

const title = 'Vacancy'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Recruitment' },
    { label: 'Vacancy' },
  ]

const form = reactive({
    title: "",
    records: [],
    last_application_date: "",
    description: "",
    responsibility: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof recruitmentVacancies.preRequisite !== 'function') return
  try {
    const { data } = await recruitmentVacancies.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await recruitmentVacancies.show(uuid)
    const record = data?.vacancy ?? data
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
      const res = await recruitmentVacancies.store({ ...form })
      message = res.data?.message || 'Vacancy created successfully.'
    } else {
      const res = await recruitmentVacancies.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Vacancy updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'recruitment.vacancy.index' })
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
