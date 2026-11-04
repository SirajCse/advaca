<script setup lang="ts">
import { Separator, type SeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
const props = withDefaults(defineProps<SeparatorProps & { class?: string }>(), { orientation: 'horizontal' })
</script>
<template>
  <Separator :orientation="orientation" :class="cn('shrink-0 bg-border', orientation === 'vertical' ? 'h-full w-[1px]' : 'h-[1px] w-full', props.class)" />
</template>
