<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'
const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()
const delegated = computed(() => {
  const { class: _, ...d } = props
  return d
})
</script>
<template>
  <DialogDescription v-bind="delegated" :class="cn('text-sm text-muted-foreground', props.class)"><slot /></DialogDescription>
</template>
