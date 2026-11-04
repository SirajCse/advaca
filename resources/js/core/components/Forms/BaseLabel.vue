<template>
  <label class="block text-sm font-medium text-gray-700">
    <slot />
    <is-required v-if="required" />
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: { required: { type: Boolean, default: false } },
};
</script>
