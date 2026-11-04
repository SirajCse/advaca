<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-2xl font-bold">{{ $trans('recruitment.job.application') || 'Job application' }}</h1>
      <form @submit.prevent="submit">
        <name-input v-model="form.name" class="mb-4" />
        <base-input v-model="form.email" type="email" :label="$trans('auth.email') || 'Email'" class="mb-4" required />
        <base-input v-model="form.contact_number" :label="$trans('global.phone') || 'Phone'" class="mb-4" />
        <base-textarea v-model="form.cover_letter" :label="$trans('recruitment.job.cover_letter') || 'Cover letter'" class="mb-4" />
        <image-upload v-model="form.resume" :label="$trans('recruitment.job.resume') || 'Resume'" accept=".pdf,.doc,.docx" class="mb-4" />
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
        const data = new FormData();
        Object.entries(this.form).forEach(([key, value]) => data.append(key, value));
        await http.post('/app/job/vacancies/' + this.$route.params.slug + '/applications', data);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
