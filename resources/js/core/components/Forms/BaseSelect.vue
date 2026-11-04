<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <select
      :value="modelValue"
      :disabled="disabled"
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-100 sm:text-sm"
      :class="error ? 'border-danger' : ''"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option v-for="option in normalizedOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    modelValue: { type: [String, Number], default: '' },
    options: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    labelKey: { type: String, default: 'label' },
    valueKey: { type: String, default: 'value' },
    placeholder: { type: String, default: '' },
    error: { type: [String, Array], default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  computed: {
    normalizedOptions() {
      return this.options.map((o) =>
        typeof o === 'object' ? { label: o[this.labelKey], value: o[this.valueKey] } : { label: o, value: o },
      );
    },
  },
};
</script>
