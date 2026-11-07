<script setup lang="ts">
import { SelectIcon, SelectScrollUpButton } from 'radix-vue'
import { ChevronUp } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
  <SelectScrollUpButton :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <SelectIcon><ChevronUp class="h-4 w-4" /></SelectIcon>
  </SelectScrollUpButton>
</template>
