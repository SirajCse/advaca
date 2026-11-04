<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <router-link to="/" class="text-lg font-bold text-primary">{{ siteName }}</router-link>
      <nav class="flex items-center gap-4 text-sm">
        <slot />
        <router-link to="/login" class="rounded-md bg-primary px-3 py-1.5 font-semibold text-white">
          {{ $trans('auth.login') || 'Sign in' }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GuestHeader',
  props: { label: { type: String, default: '' } },
  computed: {
    siteName() {
      const system = this.$store.state.config.system || {};
      return system.name || this.label || 'Advaca';
    },
  },
};
</script>
