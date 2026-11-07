<script setup>
defineProps({
  summary: { type: Object, default: () => ({}) },
})
</script>

<template>
  <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
    <div v-for="(v, k) in summary" :key="k" class="rounded-lg border p-3">
      <div class="text-xs text-muted-foreground">{{ k.replace(/_/g, ' ') }}</div>
      <div class="text-lg font-semibold">{{ v }}</div>
    </div>
  </div>
</template>
