<!--
  Page: Hostel/RoomAllocation/Action.vue  (auto-generated full implementation - create & edit)
  API:   hostelRoomAllocations @ app/hostel/room-allocations
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Room Allocation' : 'Edit Room Allocation'" :navs="navs">
      <PageHeaderAction base="hostel.room-allocation" title="Room Allocation" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Room Allocation' : 'Edit Room Allocation'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'hostel.room-allocation.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.room"
          :options="relationOptions.room"
          label="Room"
          :required="true"
          :error="errors.room ? String(errors.room[0] || errors.room) : ''"
        />

        <FormRelationSelect
          v-model="form.student"
          :options="relationOptions.student"
          label="Student"
          :required="true"
          :error="errors.student ? String(errors.student[0] || errors.student) : ''"
        />

        <div class="space-y-1.5">
          <Label for="start_date">Start date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="start_date" v-model="form.start_date" type="date" :class="errors.start_date ? 'border-destructive' : ''" />
          <p v-if="errors.start_date" class="text-xs text-destructive">{{ String(errors.start_date[0] || errors.start_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="end_date">End date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="end_date" v-model="form.end_date" type="date" :class="errors.end_date ? 'border-destructive' : ''" />
          <p v-if="errors.end_date" class="text-xs text-destructive">{{ String(errors.end_date[0] || errors.end_date) }}</p>
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
import { hostelRoomAllocations } from '@/api/hostel'

const route = useRoute()
const router = useRouter()

const title = 'Room Allocation'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Hostel' },
    { label: 'Room Allocation' },
  ]

const form = reactive({
    room: "",
    student: "",
    start_date: "",
    end_date: "",
    remarks: "",
  })

const relationOptions = reactive({
    room: [],
    student: []
  })

async function loadPreRequisite() {
  if (typeof hostelRoomAllocations.preRequisite !== 'function') return
  try {
    const { data } = await hostelRoomAllocations.preRequisite()
    preReq.value = data
    
    relationOptions['room'] = pickPreReq(preReq.value, 'room')
    relationOptions['student'] = pickPreReq(preReq.value, 'student')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await hostelRoomAllocations.show(uuid)
    const record = data?.roomallocation ?? data
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
      const res = await hostelRoomAllocations.store({ ...form })
      message = res.data?.message || 'Room Allocation created successfully.'
    } else {
      const res = await hostelRoomAllocations.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Room Allocation updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'hostel.room-allocation.index' })
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
