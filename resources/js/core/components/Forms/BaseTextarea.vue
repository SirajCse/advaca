<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <textarea
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-100 sm:text-sm"
      :class="error ? 'border-danger' : ''"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    rows: { type: Number, default: 3 },
    placeholder: { type: String, default: '' },
    error: { type: [String, Array], default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
};
</script>
