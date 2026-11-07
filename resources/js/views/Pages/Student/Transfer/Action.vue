<!--
  Page: Student/Transfer/Action.vue  (auto-generated full implementation - create & edit)
  API:   studentTransfers @ app/student/transfers
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Transfer' : 'Edit Transfer'" :navs="navs">
      <PageHeaderAction base="student.transfer" title="Transfer" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Transfer' : 'Edit Transfer'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'student.transfer.index' }"
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
          <Label for="reason">Reason<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="reason" v-model="form.reason" type="text" :class="errors.reason ? 'border-destructive' : ''" />
          <p v-if="errors.reason" class="text-xs text-destructive">{{ String(errors.reason[0] || errors.reason) }}</p>
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
import { studentTransfers } from '@/api/student'

const route = useRoute()
const router = useRouter()

const title = 'Transfer'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Transfer' },
  ]

const form = reactive({
    student: "",
    date: "",
    reason: "",
    remarks: "",
  })

const relationOptions = reactive({
    student: []
  })

async function loadPreRequisite() {
  if (typeof studentTransfers.preRequisite !== 'function') return
  try {
    const { data } = await studentTransfers.preRequisite()
    preReq.value = data
    
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await studentTransfers.show(uuid)
    const record = data?.transfer ?? data
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
      const res = await studentTransfers.store({ ...form })
      message = res.data?.message || 'Transfer created successfully.'
    } else {
      const res = await studentTransfers.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Transfer updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.transfer.index' })
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
