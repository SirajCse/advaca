<!--
  Page: Student/ServiceRequest/Action.vue  (auto-generated full implementation - create & edit)
  API:   studentServiceRequests @ app/student/service-requests
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Service Request' : 'Edit Service Request'" :navs="navs">
      <PageHeaderAction base="student.service-request" title="Service Request" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Service Request' : 'Edit Service Request'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.service-request.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.student"
          :options="relationOptions.student"
          label="Student"
          :required="true"
          :error="errors.student ? String(errors.student[0] || errors.student) : ''"
        />

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="request_type">Request type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="request_type" v-model="form.request_type" type="text" :class="errors.request_type ? 'border-destructive' : ''" />
          <p v-if="errors.request_type" class="text-xs text-destructive">{{ String(errors.request_type[0] || errors.request_type) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.transport_stoppage"
          :options="relationOptions.transport_stoppage"
          label="Transport stoppage"
          :required="false"
          :error="errors.transport_stoppage ? String(errors.transport_stoppage[0] || errors.transport_stoppage) : ''"
        />

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="true" class="text-destructive"> *</span></Label>
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
import { studentServiceRequests } from '@/api/student'

const route = useRoute()
const router = useRouter()

const title = 'Service Request'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Service Request' },
  ]

const form = reactive({
    student: "",
    date: "",
    type: "",
    request_type: "",
    transport_stoppage: "",
    description: "",
  })

const relationOptions = reactive({
    student: [],
    transport_stoppage: []
  })

async function loadPreRequisite() {
  if (typeof studentServiceRequests.preRequisite !== 'function') return
  try {
    const { data } = await studentServiceRequests.preRequisite()
    preReq.value = data
    
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
    relationOptions['transport_stoppage'] = pickPreReq(preReq.value, 'transport_stoppage')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await studentServiceRequests.show(uuid)
    const record = data?.servicerequest ?? data
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
      const res = await studentServiceRequests.store({ ...form })
      message = res.data?.message || 'Service Request created successfully.'
    } else {
      const res = await studentServiceRequests.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Service Request updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.service-request.index' })
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
