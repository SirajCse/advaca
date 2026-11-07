<script setup lang="ts">
import { SelectIcon, SelectScrollDownButton } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
  <SelectScrollDownButton :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <SelectIcon><ChevronDown class="h-4 w-4" /></SelectIcon>
  </SelectScrollDownButton>
</template>
