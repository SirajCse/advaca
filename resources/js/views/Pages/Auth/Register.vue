<template>
  <div class="flex min-h-full items-center justify-center bg-gray-50 px-4 py-12">
    <div class="w-full max-w-md rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-center text-2xl font-bold">{{ $trans('auth.register.page_title') || 'Register' }}</h1>
      <form @submit.prevent="submit">
        <base-input v-model="form.name" :label="$trans('global.name') || 'Name'" class="mb-4" required />
        <base-input v-model="form.email" type="email" :label="$trans('auth.email') || 'Email'" class="mb-4" required />
        <base-input v-model="form.password" type="password" :label="$trans('auth.password') || 'Password'" class="mb-4" required />
        <base-input v-model="form.password_confirmation" type="password" :label="$trans('auth.confirm_password') || 'Confirm password'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('auth.register') || 'Register' }}</base-button>
      </form>
      <router-link to="/login" class="mt-4 block text-center text-sm text-primary hover:underline">
        {{ $trans('auth.back_to_login') || 'Back to sign in' }}
      </router-link>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: { name: '', email: '', password: '', password_confirmation: '' }, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await http.post('/auth/register', this.form);
        this.$router.push('/login');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
