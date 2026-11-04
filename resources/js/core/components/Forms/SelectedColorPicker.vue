<template>
  <div class="flex items-center gap-2">
    <input type="color" :value="modelValue || '#330f57'" class="h-8 w-8 cursor-pointer rounded border border-gray-300" @input="$emit('update:modelValue', $event.target.value)" />
    <base-input :model-value="modelValue" class="w-28" @update:modelValue="$emit('update:modelValue', $event)" />
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';

export default {
  name: 'SelectedColorPicker',
  components: { BaseInput },
  props: { modelValue: { type: String, default: '' } },
  emits: ['update:modelValue'],
};
</script>
