<!--
  Page: Utility/Todo/Index.vue  (auto-generated full implementation)
  API:   utilityTodos @ app/utility/todos
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Todo" :navs="navs">
      <PageHeaderAction base="utility.todo" title="Todo" :actions="['create']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <DataTable
        v-model:query="query"
        title="Todo"
        :headers="headers"
        :items="items"
        :meta="meta"
        :loading="loading"
        @query="fetchRecords"
      >
        <template #item-is_due_today="{ value }">{{ value === 'true' || value === 'Yes' ? 'Yes' : value === 'false' || value === 'No' ? 'No' : '-' }}</template>
        <template #item-is_overdue="{ value }">{{ value === 'true' || value === 'Yes' ? 'Yes' : value === 'false' || value === 'No' ? 'No' : '-' }}</template>
        <template #item-is_archived="{ value }">{{ value === 'true' || value === 'Yes' ? 'Yes' : value === 'false' || value === 'No' ? 'No' : '-' }}</template>
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
import { utilityTodos } from '@/api/utility'

const router = useRouter()

const title = 'Todo'
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
    { name: 'title', label: 'Title' },
    { name: 'due', label: 'Due' },
    { name: 'is_due_today', label: 'Is due today' },
    { name: 'is_overdue', label: 'Is overdue' },
    { name: 'is_archived', label: 'Is archived' },
    { name: 'description', label: 'Description' },
    { name: 'status', label: 'Status' },
    { name: 'created_at', label: 'Created at' },
    { name: 'actions', label: 'Actions', class: 'text-right', sortable: false },
  ]

const navs = [
    { label: 'Utility' },
    { label: 'Todo' },
  ]

const canShow = true
const canEdit = true
const canDelete = true

async function fetchRecords(params = {}) {
  loading.value = true
  try {
    const { data } = await utilityTodos.index({ ...query, ...params })
    items.value = data?.data ?? []
    meta.value = data?.meta ?? { current_page: 1, last_page: 1, total: items.value.length }
  } catch {
    items.value = []
  }
  loading.value = false
  initialized.value = true
}

function view(item) {
  router.push({ name: 'utility.todo.show', params: { uuid: item.uuid || item.id } })
}

function edit(item) {
  router.push({ name: 'utility.todo.edit', params: { uuid: item.uuid || item.id } })
}

async function remove(item) {
  const result = await Swal.fire({
    title: 'Delete Todo?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await utilityTodos.destroy(item.uuid || item.id)
    Swal.fire({ icon: 'success', title: 'Deleted', text: 'Todo deleted successfully.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    fetchRecords()
  } catch {
    // error toast handled globally
  }
}

onMounted(() => fetchRecords())
</script>
