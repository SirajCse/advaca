<script setup>
defineProps({
  method: { type: [Object, String], default: () => ({}) },
})
</script>

<template>
  <div class="rounded-lg border p-4 text-sm">
    <div v-if="typeof method === 'object'">
      <div class="font-medium">{{ method.name || method.payment_method || 'Payment method' }}</div>
      <div v-if="method.mode" class="text-muted-foreground">Mode: {{ method.mode }}</div>
      <div v-if="method.account_number" class="text-muted-foreground">A/C: {{ method.account_number }}</div>
    </div>
    <template v-else>{{ method }}</template>
  </div>
</template>
