<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <flat-pickr
      :value="modelValue"
      :config="config"
      :placeholder="placeholder"
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
      :class="error ? 'border-danger' : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
import { Hindi as hindiLocale } from 'flatpickr/dist/l10n/fr.js';

export default {
  name: 'DatePicker',
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    error: { type: [String, Array], default: '' },
    required: { type: Boolean, default: false },
    minDate: { type: String, default: '' },
    maxDate: { type: String, default: '' },
    mode: { type: String, default: 'single' },
  },
  emits: ['update:modelValue'],
  computed: {
    config() {
      return {
        dateFormat: 'Y-m-d',
        allowInput: true,
        mode: this.mode === 'range' ? 'range' : 'single',
        minDate: this.minDate || null,
        maxDate: this.maxDate || null,
      };
    },
  },
};
</script>
