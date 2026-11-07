<script setup lang="ts">
import { TooltipContent, type TooltipContentProps, TooltipPortal } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<TooltipContentProps & { class?: HTMLAttributes['class'] }>()
</script>
<template>
  <TooltipPortal>
    <TooltipContent v-bind="props" :class="cn('z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95', props.class)"><slot /></TooltipContent>
  </TooltipPortal>
</template>
