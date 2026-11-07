<script setup lang="ts">
import { PopoverContent, type PopoverContentEmits, type PopoverContentProps, PopoverPortal, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = withDefaults(defineProps<PopoverContentProps & { class?: HTMLAttributes['class'] }>(), { sideOffset: 4 })
const emits = defineEmits<PopoverContentEmits>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <PopoverPortal>
    <PopoverContent v-bind="delegated" :class="cn('z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', props.class)">
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
