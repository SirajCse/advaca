<template>
  <component :is="level" class="font-semibold text-gray-800" :class="sizeClass">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    level: { type: String, default: 'h2' },
    size: { type: String, default: 'md' },
  },
  computed: {
    sizeClass() {
      return { sm: 'text-base', md: 'text-lg', lg: 'text-2xl', xl: 'text-3xl' }[this.size];
    },
  },
};
</script>
