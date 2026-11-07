<!--
  Page: Employee/Document/Index.vue  (auto-generated full implementation)
  API:   employeesEmployeeDocuments @ app/employees/{employee}/documents
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Document" :navs="navs">
      <PageHeaderAction base="employee.document" title="Document" :actions="['create']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <DataTable
        v-model:query="query"
        title="Document"
        :headers="headers"
        :items="items"
        :meta="meta"
        :loading="loading"
        @query="fetchRecords"
      >
        <template #item-is_submitted_original="{ value }">{{ value === 'true' || value === 'Yes' ? 'Yes' : value === 'false' || value === 'No' ? 'No' : '-' }}</template>
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
import { employeesEmployeeDocuments } from '@/api/employees'

const router = useRouter()
const parentVal = computed(() => route.params['employee'] ?? route.query['employee'] ?? '')

const title = 'Document'
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
    { name: 'student', label: 'Student' },
    { name: 'type', label: 'Type' },
    { name: 'title', label: 'Title' },
    { name: 'number', label: 'Number' },
    { name: 'description', label: 'Description' },
    { name: 'period', label: 'Period' },
    { name: 'is_submitted_original', label: 'Is submitted original' },
    { name: 'created_at', label: 'Created at' },
    { name: 'actions', label: 'Actions', class: 'text-right', sortable: false },
  ]

const navs = [
    { label: 'Employee' },
    { label: 'Document' },
  ]

const canShow = true
const canEdit = true
const canDelete = true

async function fetchRecords(params = {}) {
  loading.value = true
  try {
    const { data } = await employeesEmployeeDocuments.index(parentVal.value, { ...query, ...params })
    items.value = data?.data ?? []
    meta.value = data?.meta ?? { current_page: 1, last_page: 1, total: items.value.length }
  } catch {
    items.value = []
  }
  loading.value = false
  initialized.value = true
}

function view(item) {
  router.push({ name: 'employee.document.show', params: { uuid: item.uuid || item.id } })
}

function edit(item) {
  router.push({ name: 'employee.document.edit', params: { uuid: item.uuid || item.id } })
}

async function remove(item) {
  const result = await Swal.fire({
    title: 'Delete Document?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await employeesEmployeeDocuments.destroy(parentVal.value, item.uuid || item.id)
    Swal.fire({ icon: 'success', title: 'Deleted', text: 'Document deleted successfully.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    fetchRecords()
  } catch {
    // error toast handled globally
  }
}

onMounted(() => fetchRecords())
</script>
