<template>
  <base-modal :model-value="open" :title="$trans('auth.relogin') || 'Session expired'" size="sm" @close="open = false">
    <p class="mb-4 text-sm text-gray-600">{{ $trans('auth.session_expired') || 'Your session has expired. Please sign in again.' }}</p>
    <form @submit.prevent="submit">
      <base-input v-model="form.password" type="password" :label="$trans('auth.password') || 'Password'" class="mb-3" />
      <base-button type="submit" :loading="loading" class="w-full">{{ $trans('auth.login') || 'Sign in' }}</base-button>
    </form>
  </base-modal>
</template>

<script>
export default {
  name: 'ReLogin',
  data() {
    return { open: false, loading: false, form: { password: '' } };
  },
  mounted() {
    this.$options.emitter = this.emitter || (this.emitter = undefined);
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await this.$store.dispatch('auth/login', this.form);
        this.open = false;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
