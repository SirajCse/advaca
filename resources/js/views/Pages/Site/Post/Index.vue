<template>
  <div class="mx-auto max-w-4xl">
    <page-header :title="$trans('site.post.post') || 'Posts'" />
    <card-list>
      <card-view v-for="post in posts" :key="post.uuid">
        <h3 class="text-lg font-semibold text-gray-800">{{ post.title }}</h3>
        <p class="mt-2 text-sm text-gray-500">{{ post.excerpt }}</p>
        <router-link :to="{ name: 'SitePostView', params: { uuid: post.uuid } }" class="mt-3 inline-block text-sm text-primary hover:underline">
          {{ $trans('global.read_more') || 'Read more' }}
        </router-link>
      </card-view>
    </card-list>
  </div>
</template>

<script>
import http from '@/core/http';

export default {
  data() {
    return { posts: [] };
  },
  async created() {
    const res = await http.get('/app/site/posts').catch(() => null);
    this.posts = (res && res.data && res.data.data) || [];
  },
};
</script>
