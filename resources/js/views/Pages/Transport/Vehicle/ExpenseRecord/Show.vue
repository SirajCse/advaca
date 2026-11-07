<!--
  Page: Transport/Vehicle/ExpenseRecord/Show.vue  (auto-generated full implementation)
  API:   transportVehicles @ app/transport/vehicles
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Vehicle" :navs="navs">
      <PageHeaderAction base="transport.vehicle.expense-record" title="Vehicle" :actions="['list', 'edit', 'print']" :edit-uuid="uuid" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <div v-if="record" class="space-y-5">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle class="text-lg">{{ record.name || record.title || record.name || 'Detail' }}</CardTitle>
              <CardDescription>Vehicle details</CardDescription>
            </div>
            <Button variant="destructive" size="sm" @click="remove">
              <Trash2 class="h-4 w-4" />
              Delete
            </Button>
          </CardHeader>
          <CardContent>
            <dl class="grid gap-x-8 gap-y-4 md:grid-cols-2">
              <div v-for="field in displayFields" :key="field.name" class="space-y-1">
                <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">{{ field.label }}</dt>
                <dd class="text-sm">
                  <Badge v-if="field.name === 'status'" :variant="String(valueOf(field)).includes('active') ? 'success' : 'secondary'">
                    {{ valueOf(field) }}
                  </Badge>
                  <template v-else>{{ valueOf(field) }}</template>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <slot name="extra" :record="record" />
      </div>
      <Card v-else-if="initialized">
        <CardContent class="py-10 text-center text-muted-foreground">Record not found.</CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2 } from 'lucide-vue-next'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { displayValue, fmtDate, fmtDateTime } from '@/lib/helpers'
import { transportVehicles } from '@/api/transport'

const route = useRoute()
const router = useRouter()

const title = 'Vehicle'
const uuid = computed(() => route.params.uuid)
const initialized = ref(false)
const record = ref(null)

const navs = [
    { label: 'Transport' },
    { label: 'Vehicle' },
  ]

const displayFields = [
    { name: 'uuid', label: 'Uuid', type: 'text' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'name_with_registration_number', label: 'Name with registration number', type: 'text' },
    { name: 'registration_number', label: 'Registration number', type: 'text' },
    { name: 'registration_date', label: 'Registration date', type: 'date' },
    { name: 'registration_place', label: 'Registration place', type: 'text' },
    { name: 'type', label: 'Type', type: 'badge' },
    { name: 'model_number', label: 'Model number', type: 'text' },
    { name: 'make', label: 'Make', type: 'text' },
    { name: 'class', label: 'Class', type: 'text' },
    { name: 'fuel_type', label: 'Fuel type', type: 'text' },
    { name: 'chassis_number', label: 'Chassis number', type: 'text' },
    { name: 'engine_number', label: 'Engine number', type: 'text' },
    { name: 'cubic_capacity', label: 'Cubic capacity', type: 'text' },
  ]

function valueOf(field) {
  const v = record.value?.[field.name]
  if (field.type === 'date') return fmtDate(v)
  if (field.type === 'datetime') return fmtDateTime(v)
  return displayValue(v)
}

async function load() {
  try {
    const { data } = await transportVehicles.show(uuid.value)
    record.value = data?.vehicle ?? data
  } catch {
    record.value = null
  }
  initialized.value = true
}

async function remove() {
  const result = await Swal.fire({
    title: 'Delete Vehicle?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await transportVehicles.destroy(uuid.value)
    Swal.fire({ icon: 'success', title: 'Deleted', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'transport.vehicle.expense-record.index' })
  } catch {}
}

onMounted(load)
</script>
