<!--
  Page: Discipline/Incident/Show.vue  (auto-generated full implementation)
  API:   disciplineIncidents @ app/discipline/incidents
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Incident" :navs="navs">
      <PageHeaderAction base="discipline.incident" title="Incident" :actions="['list', 'edit', 'print']" :edit-uuid="uuid" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <div v-if="record" class="space-y-5">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle class="text-lg">{{ record.name || record.title || record.name || 'Detail' }}</CardTitle>
              <CardDescription>Incident details</CardDescription>
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
import { disciplineIncidents } from '@/api/discipline'

const route = useRoute()
const router = useRouter()

const title = 'Incident'
const uuid = computed(() => route.params.uuid)
const initialized = ref(false)
const record = ref(null)

const navs = [
    { label: 'Discipline' },
    { label: 'Incident' },
  ]

const displayFields = [
    { name: 'uuid', label: 'Uuid', type: 'text' },
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'student', label: 'Student', type: 'text' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'contact_number', label: 'Contact number', type: 'text' },
    { name: 'category', label: 'Category', type: 'badge' },
    { name: 'nature', label: 'Nature', type: 'text' },
    { name: 'severity', label: 'Severity', type: 'text' },
    { name: 'reported_by', label: 'Reported by', type: 'text' },
    { name: 'date', label: 'Date', type: 'date' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'action', label: 'Action', type: 'text' },
    { name: 'remarks', label: 'Remarks', type: 'text' },
    { name: 'media_token', label: 'Media token', type: 'text' },
  ]

function valueOf(field) {
  const v = record.value?.[field.name]
  if (field.type === 'date') return fmtDate(v)
  if (field.type === 'datetime') return fmtDateTime(v)
  return displayValue(v)
}

async function load() {
  try {
    const { data } = await disciplineIncidents.show(uuid.value)
    record.value = data?.incident ?? data
  } catch {
    record.value = null
  }
  initialized.value = true
}

async function remove() {
  const result = await Swal.fire({
    title: 'Delete Incident?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await disciplineIncidents.destroy(uuid.value)
    Swal.fire({ icon: 'success', title: 'Deleted', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'discipline.incident.index' })
  } catch {}
}

onMounted(load)
</script>
