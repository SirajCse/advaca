<template>
  <div>
    <base-label v-if="label" class="mb-1">{{ label }} <span class="text-gray-500">({{ modelValue }})</span></base-label>
    <input
      type="range"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      class="w-full accent-primary"
      @input="$emit('update:modelValue', Number($event.target.value))"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseRangeInput',
  props: {
    modelValue: { type: Number, default: 0 },
    label: { type: String, default: '' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
  },
  emits: ['update:modelValue'],
};
</script>
