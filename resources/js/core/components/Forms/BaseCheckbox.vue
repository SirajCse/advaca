<template>
  <label class="inline-flex items-center">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="rounded border-gray-300 text-primary focus:ring-primary"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span v-if="label" class="ml-2 text-sm text-gray-700">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
};
</script>
