<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <DialogTitle v-bind="delegated" :class="cn('text-lg font-semibold leading-none tracking-tight', props.class)"><slot /></DialogTitle>
</template>
