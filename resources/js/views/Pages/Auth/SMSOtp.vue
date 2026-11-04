<template>
  <div class="flex min-h-full items-center justify-center bg-gray-50 px-4 py-12">
    <div class="w-full max-w-md rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-center text-2xl font-bold">{{ $trans('auth.email_otp_login') || 'SMS OTP login' }}</h1>
      <form @submit.prevent="submit">
        <base-input v-model="form.phone" type="email" :label="$trans('auth.email') || 'Phone'" class="mb-4" required />
        <base-input v-if="otpSent" v-model="form.otp" :label="$trans('auth.otp') || 'OTP'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">
          {{ otpSent ? ($trans('auth.verify') || 'Verify') : ($trans('auth.send_otp') || 'Send OTP') }}
        </base-button>
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
    return { form: { email: '', otp: '' }, otpSent: false, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        if (!this.otpSent) {
          await http.post('/auth/sms-otp', { email: this.form.phone });
          this.otpSent = true;
        } else {
          await this.$store.dispatch('auth/login', this.form);
          this.$router.push('/home');
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
