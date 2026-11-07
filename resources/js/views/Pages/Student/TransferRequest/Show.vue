<!--
  Page: Student/TransferRequest/Show.vue  (auto-generated full implementation)
  API:   studentTransferRequests @ app/student/transfer-requests
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Transfer Request" :navs="navs">
      <PageHeaderAction base="student.transfer-request" title="Transfer Request" :actions="['list', 'edit', 'print']" :edit-uuid="uuid" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <div v-if="record" class="space-y-5">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle class="text-lg">{{ record.name || record.title || record.name || 'Detail' }}</CardTitle>
              <CardDescription>Transfer Request details</CardDescription>
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
import { studentTransferRequests } from '@/api/student'

const route = useRoute()
const router = useRouter()

const title = 'Transfer Request'
const uuid = computed(() => route.params.uuid)
const initialized = ref(false)
const record = ref(null)

const navs = [
    { label: 'Student' },
    { label: 'Transfer Request' },
  ]

const displayFields = [
    { name: 'uuid', label: 'Uuid', type: 'text' },
    { name: 'code_number', label: 'Code number', type: 'text' },
    { name: 'student', label: 'Student', type: 'text' },
    { name: 'reason', label: 'Reason', type: 'text' },
    { name: 'comment', label: 'Comment', type: 'text' },
    { name: 'transfer_certificate_number', label: 'Transfer certificate number', type: 'text' },
    { name: 'processed_by', label: 'Processed by', type: 'text' },
    { name: 'status', label: 'Status', type: 'badge' },
    { name: 'request_date', label: 'Request date', type: 'date' },
    { name: 'processed_at', label: 'Processed at', type: 'date' },
    { name: 'is_editable', label: 'Is editable', type: 'bool' },
    { name: 'media_token', label: 'Media token', type: 'text' },
    { name: 'media', label: 'Media', type: 'text' },
    { name: 'created_at', label: 'Created at', type: 'date' },
  ]

function valueOf(field) {
  const v = record.value?.[field.name]
  if (field.type === 'date') return fmtDate(v)
  if (field.type === 'datetime') return fmtDateTime(v)
  return displayValue(v)
}

async function load() {
  try {
    const { data } = await studentTransferRequests.show(uuid.value)
    record.value = data?.transferrequest ?? data
  } catch {
    record.value = null
  }
  initialized.value = true
}

async function remove() {
  const result = await Swal.fire({
    title: 'Delete Transfer Request?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await studentTransferRequests.destroy(uuid.value)
    Swal.fire({ icon: 'success', title: 'Deleted', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'student.transfer-request.index' })
  } catch {}
}

onMounted(load)
</script>
