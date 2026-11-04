<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="item in items" :key="item.label" class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{{ item.label }}</p>
      <p class="mt-1 text-sm text-gray-800"><slot :item="item">{{ item.value }}</slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowItem',
  props: { items: { type: Array, default: () => [] } },
};
</script>
