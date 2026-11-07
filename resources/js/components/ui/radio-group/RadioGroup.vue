<script setup lang="ts">
import { RadioGroupRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'], modelValue?: any, orientation?: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', v: any): void }>()
</script>
<template>
  <RadioGroupRoot
    :model-value="props.modelValue"
    :orientation="props.orientation"
    :class="cn('grid gap-2', props.class)"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadioGroupRoot>
</template>
