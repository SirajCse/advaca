<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <div class="flex flex-wrap gap-3">
      <base-radio
        v-for="option in normalized"
        :key="option.value"
        :model-value="modelValue"
        :value="option.value"
        :label="option.label"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </div>
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
import BaseRadio from './BaseRadio.vue';

export default {
  name: 'BaseRadioGroup',
  components: { BaseRadio },
  props: {
    modelValue: { type: [String, Number, Boolean], default: '' },
    options: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    labelKey: { type: String, default: 'label' },
    valueKey: { type: String, default: 'value' },
    error: { type: [String, Array], default: '' },
    required: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  computed: {
    normalized() {
      return this.options.map((o) =>
        typeof o === 'object' ? { label: o[this.labelKey], value: o[this.valueKey] } : { label: o, value: o },
      );
    },
  },
};
</script>
