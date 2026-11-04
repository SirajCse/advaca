<template>
  <div class="flex min-h-full items-center justify-center bg-gray-50 px-4 py-12">
    <div class="w-full max-w-md rounded-xl bg-white p-8 text-center shadow">
      <h1 class="mb-4 text-2xl font-bold">{{ $trans('auth.email.verification') || 'Email verification' }}</h1>
      <p class="text-sm text-gray-500">{{ status }}</p>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { status: 'Verifying…' };
  },
  async mounted() {
    try {
      await http.post('/auth/email/verify', { token: this.$route.params.token });
      this.status = 'Your email has been verified. You can sign in now.';
    } catch (error) {
      this.status = 'Verification failed or link expired.';
    }
  },
};
</script>
