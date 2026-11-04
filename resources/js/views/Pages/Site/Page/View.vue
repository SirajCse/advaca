<template>
  <div>
    <div v-if="page" class="mx-auto max-w-4xl">
      <h1 class="mb-6 text-3xl font-bold text-gray-900">{{ page.title }}</h1>
      <markdown-content :content="page.content" />
    </div>
    <p v-else class="py-20 text-center text-gray-400">Loading…</p>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { page: null };
  },
  async created() {
    const res = await http.get('/app/pages/' + this.$route.params.slug).catch(() => null);
    this.page = (res && res.data) || null;
  },
};
</script>
