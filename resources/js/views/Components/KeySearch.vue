<template>
  <div class="relative">
    <svg class="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
    </svg>
    <input
      :value="modelValue"
      type="search"
      :placeholder="placeholder || ($trans('global.search') || 'Search')"
      class="block w-full rounded-md border-gray-300 py-2 pl-9 pr-3 text-sm shadow-sm focus:border-primary focus:ring-primary"
      @input="$emit('update:modelValue', $event.target.value); $emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'KeySearch',
  props: {
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
  },
  emits: ['update:modelValue', 'input'],
};
</script>
