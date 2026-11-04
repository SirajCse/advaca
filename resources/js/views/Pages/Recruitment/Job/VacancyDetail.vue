<template>
  <div class="mx-auto max-w-3xl">
    <h1 class="text-3xl font-bold text-gray-900">{{ vacancy.title }}</h1>
    <p class="mt-1 text-sm text-gray-400">{{ $cal.format(vacancy.published_at) }}</p>
    <markdown-content :content="vacancy.description" class="mt-6" />
    <router-link :to="{ name: 'JobVacancyApplication', params: { slug: $route.params.slug } }" class="mt-8 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
      {{ $trans('recruitment.job.apply') || 'Apply now' }}
    </router-link>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { vacancy: {} };
  },
  async created() {
    const res = await http.get('/app/job/vacancies/' + this.$route.params.slug).catch(() => null);
    this.vacancy = (res && res.data) || {};
  },
};
</script>
