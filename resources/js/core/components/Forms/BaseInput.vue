<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <div class="relative">
      <span v-if="$slots.prefix" class="absolute inset-y-0 left-0 flex items-center pl-3"><slot name="prefix" /></span>
      <input
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-100 sm:text-sm"
        :class="[error ? 'border-danger' : '', $slots.prefix ? 'pl-10' : '', sizeClass]"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="$slots.suffix" class="absolute inset-y-0 right-0 flex items-center pr-3"><slot name="suffix" /></span>
    </div>
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: { type: [String, Number], default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    error: { type: [String, Array], default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autocomplete: { type: String, default: 'off' },
    size: { type: String, default: 'md' },
  },
  emits: ['update:modelValue'],
  computed: {
    sizeClass() {
      return { sm: 'py-1.5 text-xs', md: 'py-2 text-sm', lg: 'py-3 text-base' }[this.size];
    },
  },
};
</script>
