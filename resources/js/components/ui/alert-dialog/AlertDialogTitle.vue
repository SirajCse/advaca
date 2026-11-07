<script setup lang="ts">
import { AlertDialogTitle, type AlertDialogTitleProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<AlertDialogTitleProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <AlertDialogTitle v-bind="delegated" :class="cn('text-lg font-semibold', props.class)"><slot /></AlertDialogTitle>
</template>
