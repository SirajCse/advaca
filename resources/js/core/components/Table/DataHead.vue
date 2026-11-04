<template>
  <thead class="bg-gray-50">
    <tr>
      <th
        v-for="column in columns"
        :key="column.key"
        class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
        :class="column.class"
        @click="sortable && column.sortable && $emit('sort', column.key)"
      >
        <span :class="{ 'cursor-pointer hover:text-gray-700': sortable && column.sortable }">
          {{ column.label }}
        </span>
      </th>
      <th v-if="hasActions" class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
        {{ $trans('global.actions') || 'Actions' }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'DataHead',
  props: {
    columns: { type: Array, default: () => [] },
    sortable: { type: Boolean, default: false },
  },
  emits: ['sort'],
  computed: {
    hasActions() {
      return !!(this.$slots.actions || this.$parent.$slots.actions);
    },
  },
};
</script>
