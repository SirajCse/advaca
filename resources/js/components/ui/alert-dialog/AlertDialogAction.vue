<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <AlertDialogAction v-bind="delegated" :class="cn('inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90', props.class)"><slot /></AlertDialogAction>
</template>
