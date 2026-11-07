<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'], modelValue?: boolean | 'indeterminate', disabled?: boolean }>()
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean | 'indeterminate'): void }>()
</script>
<template>
  <CheckboxRoot
    :model-value="props.modelValue"
    :disabled="props.disabled"
    :class="cn('peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground', props.class)"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
      <Check class="h-3.5 w-3.5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
