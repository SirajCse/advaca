<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-2 text-2xl font-bold">{{ $trans('reception.enquiry.enquiry') || 'Online enquiry' }}</h1>
      <p class="mb-6 text-sm text-gray-500">{{ $trans('reception.enquiry.description') || 'Submit your enquiry and we will get back to you.' }}</p>
      <form @submit.prevent="submit">
        <base-input v-model="form.name" :label="$trans('global.name') || 'Name'" class="mb-4" required />
        <base-input v-model="form.email" type="email" :label="$trans('auth.email') || 'Email'" class="mb-4" />
        <base-input v-model="form.contact_number" :label="$trans('global.phone') || 'Phone'" class="mb-4" />
        <base-textarea v-model="form.message" :label="$trans('global.message') || 'Message'" class="mb-4" required />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('global.submit') || 'Submit' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: { name: '', email: '', contact_number: '', message: '' }, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await http.post('/app/online-enquiries', this.form);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
