<template>
  <div class="page-header mb-6">
    <h1 class="text-2xl font-semibold text-foreground">{{ title }}</h1>
    <nav v-if="navs && navs.length" class="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
      <template v-for="(nav, i) in navs" :key="i">
        <Link v-if="nav.path" :to="route(nav.path)" class="hover:text-foreground">{{ nav.label }}</Link>
        <span v-else>{{ nav.label }}</span>
        <span v-if="i < navs.length - 1" class="text-border">/</span>
      </template>
    </nav>
    <div v-if="$slots.default" class="mt-3"><slot /></div>
  </div>
</template>
<script setup>
import { Link } from '@inertiajs/vue3'
defineProps({
  title: { type: [String, Object], default: '' },
  navs: { type: Array, default: () => [] },
})
</script>
