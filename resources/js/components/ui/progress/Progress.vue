<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
const props = defineProps<{ modelValue?: number, class?: any }>()
</script>
<template>
  <ProgressRoot :model-value="props.modelValue" :class="cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', props.class)">
    <ProgressIndicator class="h-full w-full flex-1 bg-primary transition-all" :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%)`" />
  </ProgressRoot>
</template>
