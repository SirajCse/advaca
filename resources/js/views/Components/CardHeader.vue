<template>
  <div class="mb-4 flex items-center justify-between">
    <h3 class="text-sm font-semibold text-gray-800">{{ title }}</h3>
    <slot name="actions" />
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  props: { title: { type: String, default: '' } },
};
</script>
