<script setup lang="ts">
import { Separator, type SeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'

const props = withDefaults(defineProps<SeparatorProps & { class?: HTMLAttributes['class'] }>(), {
  orientation: 'horizontal',
})
const delegated = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>
<template>
  <Separator
    v-bind="delegated"
    :class="cn('shrink-0 bg-border', props.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', props.class)"
  />
</template>
