<template>
  <component :is="to ? 'router-link' : 'button'" :to="to" :type="to ? null : 'button'" class="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold shadow-sm" :class="classes">
    <slot>{{ label }}</slot>
  </component>
</template>

<script>
export default {
  name: 'PageHeaderAction',
  props: {
    label: { type: String, default: '' },
    to: { type: [String, Object], default: null },
    variant: { type: String, default: 'primary' },
    permission: { type: String, default: '' },
  },
  computed: {
    classes() {
      return {
        primary: 'bg-primary text-white hover:opacity-90',
        secondary: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
      }[this.variant];
    },
  },
};
</script>
