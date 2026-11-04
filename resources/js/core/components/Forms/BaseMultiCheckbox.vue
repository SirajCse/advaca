<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <div class="flex flex-wrap gap-3">
      <base-checkbox
        v-for="option in normalized"
        :key="option.value"
        :model-value="modelValue.includes(option.value)"
        :label="option.label"
        @update:modelValue="toggle(option.value, $event)"
      />
    </div>
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
import BaseCheckbox from './BaseCheckbox.vue';

export default {
  name: 'BaseMultiCheckbox',
  components: { BaseCheckbox },
  props: {
    modelValue: { type: Array, default: () => [] },
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
  methods: {
    toggle(value, checked) {
      const next = checked ? [...this.modelValue, value] : this.modelValue.filter((v) => v !== value);
      this.$emit('update:modelValue', next);
    },
  },
};
</script>
