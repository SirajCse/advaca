<template>
  <div class="flex items-center justify-between" v-if="meta && meta.last_page > 1">
    <p class="text-sm text-gray-500">
      {{ $trans('global.showing') || 'Showing' }} {{ meta.from || 0 }} - {{ meta.to || 0 }} {{ $trans('global.of') || 'of' }} {{ meta.total || 0 }}
    </p>
    <nav class="flex items-center gap-1">
      <button
        v-for="page in pages"
        :key="page"
        class="min-w-[2rem] rounded px-2 py-1 text-sm"
        :class="page === meta.current_page ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100 disabled:opacity-40'"
        :disabled="page === '...' || page < 1 || page > meta.last_page"
        @click="page !== '...' && $emit('page-change', page)"
      >{{ page }}</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: { meta: { type: Object, default: () => ({}) } },
  emits: ['page-change'],
  computed: {
    pages() {
      const current = this.meta.current_page || 1;
      const last = this.meta.last_page || 1;
      const out = [];
      const start = Math.max(1, current - 2);
      const end = Math.min(last, current + 2);
      if (start > 1) out.push(1);
      if (start > 2) out.push('...');
      for (let i = start; i <= end; i++) out.push(i);
      if (end < last - 1) out.push('...');
      if (end < last) out.push(last);
      return out;
    },
  },
};
</script>
