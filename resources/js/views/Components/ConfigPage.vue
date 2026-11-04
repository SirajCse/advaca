<template>
  <div class="flex gap-6">
    <config-sidebar v-if="sidebar && $slots.sidebar" />
    <div class="flex-1">
      <page-header :title="title" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfigPage',
  props: {
    title: { type: String, default: '' },
    sidebar: { type: Boolean, default: true },
  },
};
</script>
