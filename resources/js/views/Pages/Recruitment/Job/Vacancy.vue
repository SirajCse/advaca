<template>
  <div class="mx-auto max-w-4xl">
    <page-header :title="$trans('recruitment.job.vacancy') || 'Job vacancies'" />
    <card-list>
      <card-view v-for="vacancy in vacancies" :key="vacancy.uuid">
        <h3 class="text-lg font-semibold text-gray-800">{{ vacancy.title }}</h3>
        <p class="mt-1 text-xs text-gray-400">{{ $cal.format(vacancy.published_at) }}</p>
        <p class="mt-2 text-sm text-gray-500">{{ vacancy.summary }}</p>
        <router-link :to="{ name: 'JobVacancyDetail', params: { slug: vacancy.slug } }" class="mt-3 inline-block text-sm text-primary hover:underline">
          {{ $trans('global.detail') || 'View details' }}
        </router-link>
      </card-view>
    </card-list>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { vacancies: [] };
  },
  async created() {
    const res = await http.get('/app/job/vacancies').catch(() => null);
    this.vacancies = (res && res.data && res.data.data) || [];
  },
};
</script>
