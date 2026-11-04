<template>
  <div>
    <page-header :title="$trans('home.home') || 'Dashboard'" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <base-card v-for="stat in stats" :key="stat.label">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{{ stat.label }}</p>
        <p class="mt-2 text-3xl font-bold text-gray-800">{{ stat.value }}</p>
      </base-card>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <base-card title="Recent activity">
        <p class="py-6 text-center text-sm text-gray-400">Activity summary will appear here.</p>
      </base-card>
      <base-card title="Todo">
        <p class="py-6 text-center text-sm text-gray-400">Your todo list will appear here.</p>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { label: 'Students', value: '—' },
        { label: 'Employees', value: '—' },
        { label: 'Courses', value: '—' },
        { label: 'Fee collected', value: '—' },
      ],
    };
  },
};
</script>
