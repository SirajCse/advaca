<template>
  <div>
    <base-label v-if="label" class="mb-1">{{ label }}</base-label>
    <base-checkbox
      :model-value="allChecked"
      :label="checkAllLabel || $trans('global.select_all') || 'Select all'"
      @update:modelValue="toggleAll"
    />
    <base-multi-checkbox :model-value="modelValue" :options="options" class="mt-2" @update:modelValue="$emit('update:modelValue', $event)" />
  </div>
</template>

<script>
import BaseCheckbox from './BaseCheckbox.vue';
import BaseMultiCheckbox from './BaseMultiCheckbox.vue';

export default {
  name: 'BaseArrayCheckbox',
  components: { BaseCheckbox, BaseMultiCheckbox },
  props: {
    modelValue: { type: Array, default: () => [] },
    options: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    checkAllLabel: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  computed: {
    allChecked() {
      return this.options.length > 0 && this.modelValue.length === this.options.length;
    },
  },
  methods: {
    toggleAll(checked) {
      this.$emit('update:modelValue', checked ? this.options.map((o) => (typeof o === 'object' ? o.value : o)) : []);
    },
  },
};
</script>
