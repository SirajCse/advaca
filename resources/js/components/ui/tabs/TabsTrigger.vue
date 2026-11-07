<script setup lang="ts">
import { TabsTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'], value?: any }>()
</script>
<template>
  <TabsTrigger :value="props.value" :class="cn('inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow', props.class)"><slot /></TabsTrigger>
</template>
