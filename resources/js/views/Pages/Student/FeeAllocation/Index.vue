<!--
  Source path: resources/js/views/Pages/Student/FeeAllocation/Index.vue
  Component:   Index
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('student.feeallocation.feeallocation')" :navs="navs">
      <PageHeaderAction :name="'Index'" :title="$t('student.feeallocation.feeallocation')" :actions="['list']" />
    </PageHeader>
    <ParentTransition appear :visibility="true">
      <DataTable :title="$t('student.feeallocation.feeallocation')" :headers="headers" :meta="meta" module="student.feeallocation">
        <TableRow v-for="item in items" :key="item.id || item.uuid">
          <TableCell>{{ item.name || item.title || item.uuid }}</TableCell>
          <TableCell>{{ item.createdAt || item.created_at || '-' }}</TableCell>
          <TableCell class="text-right">
            <Button variant="ghost" size="sm" @click="view(item)">View</Button>
            <Button variant="ghost" size="sm" @click="edit(item)">Edit</Button>
          </TableCell>
        </TableRow>
        <TableRow v-if="!items.length">
          <TableCell colspan="3" class="text-center text-muted-foreground py-8">
            No records found.
          </TableCell>
        </TableRow>
      </DataTable>
    </ParentTransition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Link, router } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { TableBody, TableRow, TableCell } from '@/components/ui/table'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Components/ParentTransition.vue'
import DataTable from '@/views/Components/DataTable.vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
  meta: { type: Object, default: () => ({}) },
})

const headers = [
  { name: 'name', label: 'Name' },
  { name: 'createdAt', label: 'Created' },
  { name: 'action', label: 'Actions' },
]

const navs = [
  { label: 'Student', path: 'Student' },
  { label: 'Fee Allocation', path: 'Index' },
]

const view = (item) => router.push({ name: 'IndexShow', params: { uuid: item.uuid } })
const edit = (item) => router.push({ name: 'IndexEdit', params: { uuid: item.uuid } })
</script>
