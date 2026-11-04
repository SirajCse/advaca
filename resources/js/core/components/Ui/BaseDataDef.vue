<template>
  <div class="py-2">
    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{{ label }}</p>
    <p class="mt-0.5 text-sm text-gray-800"><slot>{{ value }}</slot></p>
  </div>
</template>

<script>
export default {
  name: 'BaseDataDef',
  props: {
    label: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
  },
};
</script>
