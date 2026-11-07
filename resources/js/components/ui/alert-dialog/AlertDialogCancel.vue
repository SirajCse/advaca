<script setup lang="ts">
import { AlertDialogCancel, type AlertDialogCancelProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<AlertDialogCancelProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <AlertDialogCancel v-bind="delegated" :class="cn('inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold shadow-sm hover:bg-accent', props.class)"><slot /></AlertDialogCancel>
</template>
