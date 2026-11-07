<script setup lang="ts">
import { DropdownMenuContent, type DropdownMenuContentEmits, type DropdownMenuContentProps, DropdownMenuPortal, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'

const props = withDefaults(defineProps<DropdownMenuContentProps & { class?: HTMLAttributes['class'], sideOffset?: number }>(), { sideOffset: 4 })
const emits = defineEmits<DropdownMenuContentEmits>()
const delegated = computed(() => {
  const { class: _, sideOffset: __, ...d } = props
  return d
})
</script>
<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="delegated"
      :side-offset="props.sideOffset"
      :class="cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95', props.class)"
      @auto-focus.prevent
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
