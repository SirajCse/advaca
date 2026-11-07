<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'], variant?: 'default' | 'destructive' | 'info' | 'success' | 'warning' }>()
const variants = {
  default: 'text-foreground bg-card',
  destructive: 'text-destructive border-destructive/50 bg-destructive/10',
  info: 'text-primary border-primary/40 bg-primary/10',
  success: 'text-success border-success/40 bg-success/10',
  warning: 'text-warning border-warning/40 bg-warning/10',
}
</script>
<template>
  <div :class="cn('relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7', variants[props.variant ?? 'default'], props.class)" role="alert">
    <slot />
  </div>
</template>
