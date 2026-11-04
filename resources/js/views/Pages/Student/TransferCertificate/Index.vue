<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-2xl font-bold">{{ $trans('student.transfer_certificate.certificate') || 'Transfer certificate' }}</h1>
      <form @submit.prevent="submit">
        <base-input v-model="form.number" :label="$trans('student.online_registration.registration_number') || 'Registration number'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('global.download') || 'Download' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: { number: '' }, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        const res = await http.post('/app/transfer-certificates/verify', this.form);
        if (res.data && res.data.download_url) window.open(res.data.download_url, '_blank');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
