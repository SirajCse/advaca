<script setup>
defineProps({
  logs: { type: Array, default: () => [] },
})
</script>

<template>
  <div v-if="logs && logs.length" class="space-y-2 rounded-lg border p-4 text-sm">
    <div v-for="(log, i) in logs" :key="i" class="flex justify-between gap-3 border-b pb-1 last:border-0">
      <span>{{ log.description || log.message }}</span>
      <span class="text-muted-foreground">{{ log.created_at }}</span>
    </div>
  </div>
</template>
