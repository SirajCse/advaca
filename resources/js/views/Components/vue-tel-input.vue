<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Phone number' },
  invalid: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue', 'validate'])
</script>

<template>
  <input
    type="tel"
    :value="modelValue"
    :placeholder="placeholder"
    class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    @input="emit('update:modelValue', $event.target.value); emit('validate', { valid: $event.target.value.length >= 7 })"
  />
</template>
