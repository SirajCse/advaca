<script setup lang="ts">
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <DropdownMenuSubTrigger v-bind="delegated" :class="cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class)">
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
