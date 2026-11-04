<template>
  <base-table>
    <thead class="bg-gray-50">
      <tr>
        <th v-for="(column, index) in columns" :key="index" class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
          {{ column.label || column }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="hover:bg-gray-50">
        <td v-for="(column, colIndex) in columns" :key="colIndex" class="px-4 py-3 text-gray-700">
          {{ typeof column === 'object' ? row[column.key] : row[column] }}
        </td>
      </tr>
    </tbody>
  </base-table>
</template>

<script>
import BaseTable from './BaseTable.vue';

export default {
  name: 'SimpleTable',
  components: { BaseTable },
  props: {
    columns: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
  },
};
</script>
