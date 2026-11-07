<script setup lang="ts">
import { TabsContent } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'], value?: any }>()
</script>
<template>
  <TabsContent :value="props.value" :class="cn('mt-2 focus-visible:outline-none', props.class)"><slot /></TabsContent>
</template>
