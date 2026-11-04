<template>
  <p v-if="text" class="mt-1 text-xs text-gray-500">{{ text }}</p>
</template>

<script>
export default {
  name: 'FormInfo',
  props: { text: { type: String, default: '' } },
};
</script>
