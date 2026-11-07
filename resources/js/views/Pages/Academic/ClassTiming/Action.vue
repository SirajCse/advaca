<!--
  Page: Academic/ClassTiming/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicClassTimings @ app/academic/class-timings
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Class Timing' : 'Edit Class Timing'" :navs="navs">
      <PageHeaderAction base="academic.class-timing" title="Class Timing" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Class Timing' : 'Edit Class Timing'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.class-timing.index' }"
        @submit="submit"
      >
                <FormArrayInput
          v-model="form.batches"
          label="Batches"
          :required="true"
          placeholder="Add value"
          :error="errors.batches ? String(errors.batches[0] || errors.batches) : ''"
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
import { academicClassTimings } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Class Timing'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Class Timing' },
  ]

const form = reactive({
    batches: [],
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof academicClassTimings.preRequisite !== 'function') return
  try {
    const { data } = await academicClassTimings.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicClassTimings.show(uuid)
    const record = data?.classtiming ?? data
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
      const res = await academicClassTimings.store({ ...form })
      message = res.data?.message || 'Class Timing created successfully.'
    } else {
      const res = await academicClassTimings.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Class Timing updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.class-timing.index' })
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
