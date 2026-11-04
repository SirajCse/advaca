<template>
  <label class="inline-flex cursor-pointer items-center gap-2">
    <span
      class="flex h-5 w-5 items-center justify-center rounded border transition"
      :class="modelValue ? 'border-primary bg-primary text-white' : 'border-gray-300 bg-white'"
    >
      <svg v-if="modelValue" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>
    </span>
    <input type="checkbox" class="hidden" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
    <span v-if="label" class="text-sm text-gray-700">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  props: {
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
};
</script>
