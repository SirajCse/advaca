<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-2xl font-bold">{{ $trans('student.guest_payment.anonymous') || 'Anonymous payment' }}</h1>
      <p class="mb-4 text-sm text-gray-500">Payment reference: {{ $route.params.uuid }}</p>
      <base-button :loading="loading" class="w-full" @click="pay">{{ $trans('finance.payment.pay_now') || 'Pay now' }}</base-button>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { loading: false };
  },
  methods: {
    async pay() {
      this.loading = true;
      try {
        const res = await http.post('/app/anonymous-payments/' + this.$route.params.uuid + '/pay');
        if (res.data && res.data.redirect_url) window.location.href = res.data.redirect_url;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
