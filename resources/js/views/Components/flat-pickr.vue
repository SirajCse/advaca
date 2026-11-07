<script setup>
// Compat wrapper: native date/datetime input (flatpickr-free)
const props = defineProps({
  modelValue: { type: [String, null], default: '' },
  config: { type: Object, default: () => ({}) },
  placeholder: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])
const type = props.config?.enableTime ? 'datetime-local' : 'date'
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    @change="emit('update:modelValue', $event.target.value)"
  />
</template>
