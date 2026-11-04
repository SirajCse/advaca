<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-2xl font-bold">{{ $trans('student.guest_payment.payment') || 'Make a payment' }}</h1>
      <form @submit.prevent="submit">
        <base-input v-model="form.number" :label="$trans('student.online_registration.registration_number') || 'Registration number'" class="mb-4" required />
        <base-input v-model="form.amount" type="number" :label="$trans('finance.payment.amount') || 'Amount'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('finance.payment.pay_now') || 'Pay now' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: { number: '', amount: '' }, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        const res = await http.post('/app/guest-payments', this.form);
        if (res.data && res.data.redirect_url) window.location.href = res.data.redirect_url;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
