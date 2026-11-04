<template>
  <div class="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center">
    <p class="text-sm text-gray-400"><slot>{{ text || $trans('global.no_record_found') || 'Nothing here yet' }}</slot></p>
  </div>
</template>

<script>
export default {
  name: 'EmptyCard',
  props: { text: { type: String, default: '' } },
};
</script>
