<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-2xl font-bold">{{ $trans('student.online_registration.verify') || 'Verify registration' }}</h1>
      <form @submit.prevent="submit">
        <base-input v-model="form.number" :label="$trans('student.online_registration.registration_number') || 'Registration number'" class="mb-4" required />
        <base-input v-model="form.otp" :label="$trans('auth.otp') || 'OTP'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('global.verify') || 'Verify' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: { number: '', otp: '' }, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await http.post('/app/online-registrations/verify-otp', this.form);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
