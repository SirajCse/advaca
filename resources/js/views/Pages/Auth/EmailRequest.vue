<template>
  <div class="flex min-h-full items-center justify-center bg-gray-50 px-4 py-12">
    <div class="w-full max-w-md rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-center text-2xl font-bold">{{ $trans('auth.email.request') || 'Verify your email' }}</h1>
      <form @submit.prevent="submit">
        <base-input v-model="form.email" type="email" :label="$trans('auth.email') || 'Email'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('auth.email.send_link') || 'Send verification link' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: { email: '' }, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await http.post('/auth/email/request', this.form);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
