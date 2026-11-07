<!--
  Page: Transport/Vehicle/FuelRecord/Action.vue  (auto-generated full implementation - create & edit)
  API:   transportVehicles @ app/transport/vehicles
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Vehicle' : 'Edit Vehicle'" :navs="navs">
      <PageHeaderAction base="transport.vehicle.fuel-record" title="Vehicle" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Vehicle' : 'Edit Vehicle'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'transport.vehicle.fuel-record.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="registration_number">Registration number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="registration_number" v-model="form.registration_number" type="text" :class="errors.registration_number ? 'border-destructive' : ''" />
          <p v-if="errors.registration_number" class="text-xs text-destructive">{{ String(errors.registration_number[0] || errors.registration_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="registration_place">Registration place<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="registration_place" v-model="form.registration_place" type="text" :class="errors.registration_place ? 'border-destructive' : ''" />
          <p v-if="errors.registration_place" class="text-xs text-destructive">{{ String(errors.registration_place[0] || errors.registration_place) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="registration_date">Registration date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="registration_date" v-model="form.registration_date" type="date" :class="errors.registration_date ? 'border-destructive' : ''" />
          <p v-if="errors.registration_date" class="text-xs text-destructive">{{ String(errors.registration_date[0] || errors.registration_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="chassis_number">Chassis number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="chassis_number" v-model="form.chassis_number" type="text" :class="errors.chassis_number ? 'border-destructive' : ''" />
          <p v-if="errors.chassis_number" class="text-xs text-destructive">{{ String(errors.chassis_number[0] || errors.chassis_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="engine_number">Engine number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="engine_number" v-model="form.engine_number" type="text" :class="errors.engine_number ? 'border-destructive' : ''" />
          <p v-if="errors.engine_number" class="text-xs text-destructive">{{ String(errors.engine_number[0] || errors.engine_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="cubic_capacity">Cubic capacity<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="cubic_capacity" v-model="form.cubic_capacity" type="text" :class="errors.cubic_capacity ? 'border-destructive' : ''" />
          <p v-if="errors.cubic_capacity" class="text-xs text-destructive">{{ String(errors.cubic_capacity[0] || errors.cubic_capacity) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="color">Color<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="color" v-model="form.color" type="text" :class="errors.color ? 'border-destructive' : ''" />
          <p v-if="errors.color" class="text-xs text-destructive">{{ String(errors.color[0] || errors.color) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="model_number">Model number<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="model_number" v-model="form.model_number" type="text" :class="errors.model_number ? 'border-destructive' : ''" />
          <p v-if="errors.model_number" class="text-xs text-destructive">{{ String(errors.model_number[0] || errors.model_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="make">Make<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="make" v-model="form.make" type="text" :class="errors.make ? 'border-destructive' : ''" />
          <p v-if="errors.make" class="text-xs text-destructive">{{ String(errors.make[0] || errors.make) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="class">Class<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="class" v-model="form.class" type="text" :class="errors.class ? 'border-destructive' : ''" />
          <p v-if="errors.class" class="text-xs text-destructive">{{ String(errors.class[0] || errors.class) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="fuel_type">Fuel type<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="fuel_type" v-model="form.fuel_type" type="text" :class="errors.fuel_type ? 'border-destructive' : ''" />
          <p v-if="errors.fuel_type" class="text-xs text-destructive">{{ String(errors.fuel_type[0] || errors.fuel_type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="fuel_capacity">Fuel capacity<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="fuel_capacity" v-model="form.fuel_capacity" type="number" :class="errors.fuel_capacity ? 'border-destructive' : ''" />
          <p v-if="errors.fuel_capacity" class="text-xs text-destructive">{{ String(errors.fuel_capacity[0] || errors.fuel_capacity) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="seating_capacity">Seating capacity<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="seating_capacity" v-model="form.seating_capacity" type="number" :class="errors.seating_capacity ? 'border-destructive' : ''" />
          <p v-if="errors.seating_capacity" class="text-xs text-destructive">{{ String(errors.seating_capacity[0] || errors.seating_capacity) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="max_seating_allowed">Max seating allowed<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="max_seating_allowed" v-model="form.max_seating_allowed" type="number" :class="errors.max_seating_allowed ? 'border-destructive' : ''" />
          <p v-if="errors.max_seating_allowed" class="text-xs text-destructive">{{ String(errors.max_seating_allowed[0] || errors.max_seating_allowed) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="ownership">Ownership<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="ownership" v-model="form.ownership" type="text" :class="errors.ownership ? 'border-destructive' : ''" />
          <p v-if="errors.ownership" class="text-xs text-destructive">{{ String(errors.ownership[0] || errors.ownership) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="ownership_date">Ownership date<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="ownership_date" v-model="form.ownership_date" type="date" :class="errors.ownership_date ? 'border-destructive' : ''" />
          <p v-if="errors.ownership_date" class="text-xs text-destructive">{{ String(errors.ownership_date[0] || errors.ownership_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="owner_name">Owner name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="owner_name" v-model="form.owner_name" type="text" :class="errors.owner_name ? 'border-destructive' : ''" />
          <p v-if="errors.owner_name" class="text-xs text-destructive">{{ String(errors.owner_name[0] || errors.owner_name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="owner_address">Owner address<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="owner_address" v-model="form.owner_address" type="text" :class="errors.owner_address ? 'border-destructive' : ''" />
          <p v-if="errors.owner_address" class="text-xs text-destructive">{{ String(errors.owner_address[0] || errors.owner_address) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="owner_phone">Owner phone<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="owner_phone" v-model="form.owner_phone" type="text" :class="errors.owner_phone ? 'border-destructive' : ''" />
          <p v-if="errors.owner_phone" class="text-xs text-destructive">{{ String(errors.owner_phone[0] || errors.owner_phone) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="owner_email">Owner email<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="owner_email" v-model="form.owner_email" type="email" :class="errors.owner_email ? 'border-destructive' : ''" />
          <p v-if="errors.owner_email" class="text-xs text-destructive">{{ String(errors.owner_email[0] || errors.owner_email) }}</p>
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
import { transportVehicles } from '@/api/transport'

const route = useRoute()
const router = useRouter()

const title = 'Vehicle'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Transport' },
    { label: 'Vehicle' },
  ]

const form = reactive({
    name: "",
    registration_number: "",
    registration_place: "",
    registration_date: "",
    type: "",
    chassis_number: "",
    engine_number: "",
    cubic_capacity: "",
    color: "",
    model_number: "",
    make: "",
    class: "",
    fuel_type: "",
    fuel_capacity: "",
    seating_capacity: "",
    max_seating_allowed: "",
    ownership: "",
    ownership_date: "",
    owner_name: "",
    owner_address: "",
    owner_phone: "",
    owner_email: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof transportVehicles.preRequisite !== 'function') return
  try {
    const { data } = await transportVehicles.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await transportVehicles.show(uuid)
    const record = data?.vehicle ?? data
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
      const res = await transportVehicles.store({ ...form })
      message = res.data?.message || 'Vehicle created successfully.'
    } else {
      const res = await transportVehicles.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Vehicle updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'transport.vehicle.fuel-record.index' })
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
