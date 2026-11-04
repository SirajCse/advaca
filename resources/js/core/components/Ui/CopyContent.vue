<template>
  <button type="button" class="inline-flex items-center gap-1 text-gray-400 hover:text-primary" @click="copy">
    <slot />
    <svg v-if="copied" class="h-4 w-4 text-success" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>
    <svg v-else class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5H13v2.5A1.5 1.5 0 0111.5 18h-6A1.5 1.5 0 014 16.5v-6A1.5 1.5 0 015.5 9H7V3.5z" /></svg>
  </button>
</template>

<script>
export default {
  name: 'CopyContent',
  props: { content: { type: String, default: '' } },
  data() {
    return { copied: false };
  },
  methods: {
    copy() {
      navigator.clipboard && navigator.clipboard.writeText(this.content);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1500);
    },
  },
};
</script>
