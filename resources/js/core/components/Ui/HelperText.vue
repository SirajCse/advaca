<template>
  <p v-if="text" class="mt-1 text-xs text-gray-400">{{ text }}</p>
</template>

<script>
export default {
  name: 'HelperText',
  props: { text: { type: String, default: '' } },
};
</script>
