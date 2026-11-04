<template>
  <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium" :class="classes">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: { variant: { type: String, default: 'secondary' } },
  computed: {
    classes() {
      return {
        primary: 'bg-primary-label text-primary',
        success: 'bg-success-label text-success-dark',
        info: 'bg-info-label text-info-dark',
        warning: 'bg-warning-label text-warning-dark',
        danger: 'bg-danger-label text-danger-dark',
        secondary: 'bg-gray-100 text-gray-600',
      }[this.variant] || 'bg-gray-100 text-gray-600';
    },
  },
};
</script>
