<script setup>
import { onMounted, ref } from 'vue'
import http from '@/lib/http'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import DataTable from '@/views/Components/DataTable.vue'
import { fmtDateTime } from '@/lib/helpers'

const initialized = ref(false)
const loading = ref(false)
const items = ref([])
const meta = ref({})
const query = ref({ page: 1, per_page: 20, q: '' })

const headers = [
  { name: 'login_at', label: 'Login at' },
  { name: 'ip', label: 'IP' },
  { name: 'user_agent', label: 'User agent' },
  { name: 'state', label: 'State' },
  { name: 'actions', label: 'Actions', class: 'text-right', sortable: false },
]

async function fetchRecords() {
  loading.value = true
  try {
    const { data } = await http.get('/app/failed-login-attempts', { params: { ...query.value } })
    items.value = data?.data ?? []
    meta.value = data?.meta ?? {}
  } catch {
    items.value = []
  }
  loading.value = false
  initialized.value = true
}

onMounted(fetchRecords)
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Failed Login Attempts" :navs="[{ label: 'Security' }, { label: 'Failed Login Attempts' }]" />
    <ParentTransition appear :visibility="initialized">
      <DataTable
        v-model:query="query"
        title="Failed login attempts"
        :headers="headers"
        :items="items"
        :meta="meta"
        :loading="loading"
        @query="fetchRecords"
      >
        <template #item-login_at="{ value }">{{ fmtDateTime(value) }}</template>
      </DataTable>
    </ParentTransition>
  </div>
</template>
