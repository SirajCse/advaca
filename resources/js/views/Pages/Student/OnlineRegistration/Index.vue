<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-2 text-2xl font-bold text-gray-900">{{ $trans('student.online_registration.registration') || 'Online registration' }}</h1>
      <p class="mb-6 text-sm text-gray-500">{{ $trans('student.online_registration.enter_number') || 'Enter your registration number to continue.' }}</p>
      <form @submit.prevent="verify">
        <base-input v-model="number" :label="$trans('student.online_registration.registration_number') || 'Registration number'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('global.continue') || 'Continue' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { number: '', loading: false };
  },
  methods: {
    async verify() {
      this.loading = true;
      try {
        const res = await http.post('/app/online-registrations/verify', { number: this.number });
        this.$router.push({ name: 'OnlineRegistrationForm', params: { number: this.number } });
      } catch (error) {
        // handled by toast
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
