<script setup lang="ts">
const props = defineProps<{ page?: number, totalPages?: number, itemsPerPage?: number, total?: number }>()
const emit = defineEmits<{ (e: 'update:page', v: number): void }>()
</script>
<template>
  <slot :page="page" :totalPages="totalPages" :go="(p: number) => emit('update:page', p)" />
</template>
