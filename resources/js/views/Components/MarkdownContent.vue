<template>
  <div class="prose prose-sm max-w-none" v-html="rendered" />
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'MarkdownContent',
  props: { content: { type: String, default: '' } },
  computed: {
    rendered() {
      const md = new MarkdownIt({ html: false, linkify: true, breaks: true });
      return this.content ? md.render(this.content) : '';
    },
  },
};
</script>
