<template>
  <router-link :to="to" class="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
    <slot>{{ $trans('global.detail') || 'Detail' }}</slot>
  </router-link>
</template>

<script>
export default {
  name: 'ShowButton',
  props: { to: { type: [String, Object], required: true } },
};
</script>
