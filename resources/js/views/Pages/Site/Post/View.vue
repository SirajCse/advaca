<template>
  <div class="mx-auto max-w-4xl">
    <h1 class="mb-4 text-3xl font-bold text-gray-900">{{ post.title }}</h1>
    <p class="mb-6 text-sm text-gray-400">{{ $cal.format(post.created_at) }}</p>
    <markdown-content :content="post.content" />
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { post: {} };
  },
  async created() {
    const res = await http.get('/app/site/posts/' + this.$route.params.uuid).catch(() => null);
    this.post = (res && res.data) || {};
  },
};
</script>
