<script setup lang="ts">
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean, variant?: 'default' | 'destructive' }>()
const delegated = computed(() => {
  const { class: _, inset: __, variant: ___, ...d } = props
  return d
})
</script>
<template>
  <DropdownMenuItem
    v-bind="delegated"
    :class="cn('relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0', props.inset && 'pl-8', props.variant === 'destructive' && 'text-destructive focus:text-destructive', props.class)"
  >
    <slot />
  </DropdownMenuItem>
</template>
