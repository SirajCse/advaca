<template>
  <tr class="hover:bg-gray-50" :class="clickable ? 'cursor-pointer' : ''">
    <td v-for="column in columns" :key="column.key" class="px-4 py-3 text-gray-700" :class="column.class">
      <slot :name="column.key" :row="row" :value="value(row, column.key)">
        {{ value(row, column.key) }}
      </slot>
    </td>
    <td v-if="$slots.actions" class="px-4 py-3 text-right">
      <slot name="actions" :row="row" />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'DataRow',
  props: {
    row: { type: Object, required: true },
    columns: { type: Array, default: () => [] },
  },
  emits: ['click'],
  computed: {
    clickable() {
      return !!this.$attrs.onClick;
    },
  },
  methods: {
    value(row, key) {
      return key.split('.').reduce((acc, part) => (acc ? acc[part] : ''), row);
    },
  },
};
</script>
