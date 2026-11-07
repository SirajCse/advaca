<script setup lang="ts">
import { SelectRoot, type SelectRootProps } from 'radix-vue'
const props = defineProps<SelectRootProps>()
const emit = defineEmits<{ (e: 'update:modelValue', v: any): void, (e: 'update:open', v: boolean): void }>()
</script>
<template>
  <SelectRoot
    :model-value="props.modelValue"
    :default-open="props.defaultOpen"
    :open="props.open"
    :disabled="props.disabled"
    @update:model-value="emit('update:modelValue', $event)"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </SelectRoot>
</template>
