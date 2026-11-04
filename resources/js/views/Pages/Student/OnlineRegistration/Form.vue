<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-2xl font-bold">{{ $trans('student.online_registration.registration_form') || 'Registration form' }}</h1>
      <form @submit.prevent="submit">
        <name-input v-model="form.name" class="mb-4" />
        <base-input v-model="form.email" type="email" :label="$trans('auth.email') || 'Email'" class="mb-4" />
        <base-input v-model="form.phone" :label="$trans('global.phone') || 'Phone'" class="mb-4" />
        <date-picker v-model="form.date_of_birth" :label="$trans('student.date_of_birth') || 'Date of birth'" class="mb-4" />
        <base-textarea v-model="form.address" :label="$trans('global.address') || 'Address'" class="mb-4" />
        <base-button type="submit" :loading="loading" class="w-full">{{ $trans('global.submit') || 'Submit' }}</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { form: {}, loading: false };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await http.post('/app/online-registrations/' + this.$route.params.number + '/submit', this.form);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
