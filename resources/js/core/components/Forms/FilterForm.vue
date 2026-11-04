<template>
  <form class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm" @submit.prevent="$emit('submit')">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <slot />
    </div>
    <div class="mt-3 flex justify-end gap-2">
      <base-button variant="secondary" size="sm" @click="$emit('reset')">{{ $trans('global.reset') || 'Reset' }}</base-button>
      <base-button type="submit" size="sm">{{ $trans('global.filter') || 'Filter' }}</base-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FilterForm',
  emits: ['submit', 'reset'],
};
</script>
