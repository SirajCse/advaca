<template>
  <div>
    <base-loader v-if="loading" />
    <div v-else class="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table class="min-w-full divide-y divide-gray-200 text-sm">
        <data-head :columns="columns" :sortable="sortable" @sort="$emit('sort', $event)" />
        <tbody class="divide-y divide-gray-100">
          <data-row
            v-for="(row, index) in rows"
            :key="row.uuid || index"
            :row="row"
            :columns="columns"
            @click="$emit('row-click', row)"
          >
            <template v-for="(_, name) in $slots" #[name]="slotProps">
              <slot :name="name" v-bind="slotProps" />
            </template>
          </data-row>
        </tbody>
      </table>
      <div v-if="!rows.length" class="px-4 py-10 text-center text-sm text-gray-400">
        <slot name="empty">{{ $trans('global.no_record_found') || 'No records found' }}</slot>
      </div>
    </div>
    <pagination v-if="paginate && meta && meta.last_page > 1" :meta="meta" class="mt-3" @page-change="$emit('page-change', $event)" />
  </div>
</template>

<script>
import DataHead from './DataHead.vue';
import DataRow from './DataRow.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'DataTable',
  components: { DataHead, DataRow, Pagination },
  props: {
    columns: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    meta: { type: Object, default: () => ({}) },
    loading: { type: Boolean, default: false },
    sortable: { type: Boolean, default: false },
    paginate: { type: Boolean, default: true },
  },
  emits: ['sort', 'row-click', 'page-change'],
};
</script>
