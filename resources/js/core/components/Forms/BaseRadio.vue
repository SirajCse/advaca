<template>
  <label class="inline-flex items-center">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      class="border-gray-300 text-primary focus:ring-primary"
      @change="$emit('update:modelValue', value)"
    />
    <span v-if="label" class="ml-2 text-sm text-gray-700">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'BaseRadio',
  props: {
    modelValue: { type: [String, Number, Boolean], default: '' },
    value: { type: [String, Number, Boolean], default: '' },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
};
</script>
