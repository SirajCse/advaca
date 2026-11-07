<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuSubContent, type DropdownMenuSubContentEmits, type DropdownMenuSubContentProps, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<DropdownMenuSubContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DropdownMenuSubContentEmits>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent v-bind="delegated" :class="cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg', props.class)">
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
