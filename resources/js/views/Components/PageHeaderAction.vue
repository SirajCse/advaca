<template>
  <div class="page-header-action flex items-center space-x-2">
    <slot />
  </div>
</template>
<script setup>
defineProps({
  name: { type: String, default: '' },
  title: { type: [String, Object], default: '' },
  actions: { type: Array, default: () => [] },
})
</script>
