<!--
  Page: Finance/Receipt/Show.vue  (auto-generated full implementation)
  API:   financeReceipts @ app/finance/receipts
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Receipt" :navs="navs">
      <PageHeaderAction base="finance.receipt" title="Receipt" :actions="['list', 'edit', 'print']" :edit-uuid="uuid" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <div v-if="record" class="space-y-5">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle class="text-lg">{{ record.name || record.title || record.name || 'Detail' }}</CardTitle>
              <CardDescription>Receipt details</CardDescription>
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
import { financeReceipts } from '@/api/finance'

const route = useRoute()
const router = useRouter()

const title = 'Receipt'
const uuid = computed(() => route.params.uuid)
const initialized = ref(false)
const record = ref(null)

const navs = [
    { label: 'Finance' },
    { label: 'Receipt' },
  ]

const displayFields = [
    { name: 'uuid', label: 'Uuid', type: 'text' },
    { name: 'code_number', label: 'Code number', type: 'text' },
    { name: 'date', label: 'Date', type: 'date' },
    { name: 'amount', label: 'Amount', type: 'text' },
    { name: 'transactionable', label: 'Transactionable', type: 'text' },
    { name: 'type', label: 'Type', type: 'badge' },
    { name: 'secondary_type', label: 'Secondary type', type: 'text' },
    { name: 'sub_head', label: 'Sub head', type: 'text' },
    { name: 'detail', label: 'Detail', type: 'text' },
    { name: 'category', label: 'Category', type: 'badge' },
    { name: 'period', label: 'Period', type: 'text' },
    { name: 'payment', label: 'Payment', type: 'text' },
    { name: 'payments', label: 'Payments', type: 'text' },
    { name: 'sub_heading', label: 'Sub heading', type: 'text' },
  ]

function valueOf(field) {
  const v = record.value?.[field.name]
  if (field.type === 'date') return fmtDate(v)
  if (field.type === 'datetime') return fmtDateTime(v)
  return displayValue(v)
}

async function load() {
  try {
    const { data } = await financeReceipts.show(uuid.value)
    record.value = data?.receipt ?? data
  } catch {
    record.value = null
  }
  initialized.value = true
}

async function remove() {
  const result = await Swal.fire({
    title: 'Delete Receipt?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await financeReceipts.destroy(uuid.value)
    Swal.fire({ icon: 'success', title: 'Deleted', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'finance.receipt.index' })
  } catch {}
}

onMounted(load)
</script>
