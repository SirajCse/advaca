<template>
  <button :type="type" :disabled="disabled || loading" :class="classes" @click="$emit('click', $event)">
    <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['click'],
  computed: {
    classes() {
      const base = 'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
      const sizes = { sm: 'px-2.5 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-base' };
      const variants = {
        primary: 'bg-primary text-white hover:opacity-90 focus:ring-primary',
        secondary: 'bg-secondary text-gray-700 hover:bg-secondary-darken focus:ring-secondary',
        success: 'bg-success text-white hover:bg-success-dark focus:ring-success',
        danger: 'bg-danger text-white hover:bg-danger-dark focus:ring-danger',
        warning: 'bg-warning text-white hover:bg-warning-dark focus:ring-warning',
        info: 'bg-info text-white hover:bg-info-dark focus:ring-info',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
        link: 'text-primary hover:underline',
      };
      return [base, sizes[this.size], variants[this.variant] || variants.primary];
    },
  },
};
</script>
