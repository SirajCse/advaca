<!--
  Page: Student/Dialogue/Action.vue  (auto-generated full implementation - create & edit)
  API:   employeesEmployeeDialogues @ app/employees/{employee}/dialogues
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Dialogue' : 'Edit Dialogue'" :navs="navs">
      <PageHeaderAction base="student.dialogue" title="Dialogue" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Dialogue' : 'Edit Dialogue'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.dialogue.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="false"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
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
import { employeesEmployeeDialogues } from '@/api/employees'

const route = useRoute()
const router = useRouter()
const parentVal = computed(() => route.params['employee'] ?? route.query['employee'] ?? '')

const title = 'Dialogue'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Dialogue' },
  ]

const form = reactive({
    category: "",
    title: "",
    description: "",
    date: "",
  })

const relationOptions = reactive({
    category: []
  })

async function loadPreRequisite() {
  if (typeof employeesEmployeeDialogues.preRequisite !== 'function') return
  try {
    const { data } = await employeesEmployeeDialogues.preRequisite()
    preReq.value = data
    
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await employeesEmployeeDialogues.show(parentVal.value, uuid)
    const record = data?.dialogue ?? data
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
      const res = await employeesEmployeeDialogues.store(parentVal.value, { ...form })
      message = res.data?.message || 'Dialogue created successfully.'
    } else {
      const res = await employeesEmployeeDialogues.update(parentVal.value, route.params.uuid, { ...form })
      message = res.data?.message || 'Dialogue updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.dialogue.index' })
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
