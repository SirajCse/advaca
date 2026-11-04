<template>
  <button
    type="button"
    class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
    :class="variant === 'danger' ? 'text-danger hover:bg-danger-label' : ''"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: { variant: { type: String, default: 'default' } },
  emits: ['click'],
};
</script>
