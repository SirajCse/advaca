<script setup lang="ts">
import { AlertDialogContent, type AlertDialogContentEmits, type AlertDialogContentProps, AlertDialogOverlay, AlertDialogPortal, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'

const props = defineProps<AlertDialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<AlertDialogContentEmits>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <AlertDialogPortal>
    <AlertDialogOverlay class="fixed inset-0 z-50 bg-black/80" />
    <AlertDialogContent
      v-bind="delegated"
      :class="cn('fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg', props.class)"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
