<script setup lang="ts">
import { AlertDialogDescription, type AlertDialogDescriptionProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <AlertDialogDescription v-bind="delegated" :class="cn('text-sm text-muted-foreground', props.class)"><slot /></AlertDialogDescription>
</template>
