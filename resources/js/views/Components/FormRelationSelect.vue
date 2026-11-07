<script setup>
import FormSelect from './FormSelect.vue'

const props = defineProps({
  modelValue: { type: [String, Number, null], default: '' },
  options: { type: Array, default: () => [] },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Select...' },
  error: { type: String, default: '' },
  name: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <FormSelect
    :model-value="modelValue"
    :options="options"
    :label="label"
    :required="required"
    :disabled="disabled || !options.length"
    :placeholder="options.length ? placeholder : 'No options available'"
    :error="error"
    :name="name"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
