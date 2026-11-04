<template>
  <div class="list-item border-b border-border py-3"><slot /></div>
</template>
<script setup>
defineProps({ name: { type: String, default: '' } })
</script>
