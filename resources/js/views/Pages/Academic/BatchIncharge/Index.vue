<!--
  Page: Academic/BatchIncharge/Index.vue  (auto-generated full implementation)
  API:   academicBatchIncharges @ app/academic/batch-incharges
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Batch Incharge" :navs="navs">
      <PageHeaderAction base="academic.batch-incharge" title="Batch Incharge" :actions="['create']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <DataTable
        v-model:query="query"
        title="Batch Incharge"
        :headers="headers"
        :items="items"
        :meta="meta"
        :loading="loading"
        @query="fetchRecords"
      >
        <template #item-created_at="{ value }">{{ fmtDate(value) }}</template>

        <template #item-actions="{ item }">
          <div class="flex items-center justify-end gap-1">
            <Button v-if="canShow" variant="ghost" size="xs" @click="view(item)">
              <Eye class="h-3.5 w-3.5" />
              View
            </Button>
            <Button v-if="canEdit" variant="ghost" size="xs" @click="edit(item)">
              <Pencil class="h-3.5 w-3.5" />
              Edit
            </Button>
            <Button v-if="canDelete" variant="ghost" size="xs" class="text-destructive" @click="remove(item)">
              <Trash2 class="h-3.5 w-3.5" />
              Delete
            </Button>
          </div>
        </template>
      </DataTable>
    </ParentTransition>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Eye, Pencil, Trash2 } from 'lucide-vue-next'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import DataTable from '@/views/Components/DataTable.vue'
import { fmtBool, fmtDate } from '@/lib/helpers'
import { academicBatchIncharges } from '@/api/academic'

const router = useRouter()

const title = 'Batch Incharge'
const initialized = ref(false)
const loading = ref(false)
const items = ref([])
const meta = ref({})

const query = reactive({
  page: 1,
  per_page: 20,
  q: '',
  sort: '',
  order: '',
})

const headers = [
    { name: 'batch', label: 'Batch' },
    { name: 'employee', label: 'Employee' },
    { name: 'period', label: 'Period' },
    { name: 'duration', label: 'Duration' },
    { name: 'remarks', label: 'Remarks' },
    { name: 'created_at', label: 'Created at' },
    { name: 'actions', label: 'Actions', class: 'text-right', sortable: false },
  ]

const navs = [
    { label: 'Academic' },
    { label: 'Batch Incharge' },
  ]

const canShow = true
const canEdit = true
const canDelete = true

async function fetchRecords(params = {}) {
  loading.value = true
  try {
    const { data } = await academicBatchIncharges.index({ ...query, ...params })
    items.value = data?.data ?? []
    meta.value = data?.meta ?? { current_page: 1, last_page: 1, total: items.value.length }
  } catch {
    items.value = []
  }
  loading.value = false
  initialized.value = true
}

function view(item) {
  router.push({ name: 'academic.batch-incharge.show', params: { uuid: item.uuid || item.id } })
}

function edit(item) {
  router.push({ name: 'academic.batch-incharge.edit', params: { uuid: item.uuid || item.id } })
}

async function remove(item) {
  const result = await Swal.fire({
    title: 'Delete Batch Incharge?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await academicBatchIncharges.destroy(item.uuid || item.id)
    Swal.fire({ icon: 'success', title: 'Deleted', text: 'Batch Incharge deleted successfully.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    fetchRecords()
  } catch {
    // error toast handled globally
  }
}

onMounted(() => fetchRecords())
</script>
