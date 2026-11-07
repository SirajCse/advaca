<script setup>
defineProps({
  balance: { type: [Number, String], default: 0 },
  currency: { type: String, default: '' },
})
</script>

<template>
  <div class="rounded-lg border p-4">
    <div class="text-xs text-muted-foreground">Ledger balance</div>
    <div class="text-2xl font-bold">{{ currency }} {{ balance }}</div>
  </div>
</template>
