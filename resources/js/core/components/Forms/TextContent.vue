<template>
  <div class="prose prose-sm max-w-none" v-html="content" />
</template>

<script>
export default {
  name: 'TextContent',
  props: { content: { type: String, default: '' } },
};
</script>
