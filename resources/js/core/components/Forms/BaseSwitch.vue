<template>
  <button
    type="button"
    role="switch"
    :aria-checked="String(modelValue)"
    :disabled="disabled"
    class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition"
    :class="modelValue ? 'bg-primary' : 'bg-gray-200'"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition" :class="modelValue ? 'translate-x-6' : 'translate-x-1'" />
  </button>
</template>

<script>
export default {
  name: 'BaseSwitch',
  props: {
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
};
</script>
