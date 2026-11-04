<template>
  <div class="relative inline-block">
    <button type="button" class="rounded border border-gray-300 px-2 py-1 text-lg leading-none" @click="open = !open">😀</button>
    <div v-if="open" class="absolute z-30 mt-1 grid w-56 grid-cols-8 gap-1 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5">
      <button v-for="emoji in emojis" :key="emoji" type="button" class="rounded p-1 text-lg hover:bg-gray-100" @click="pick(emoji)">
        {{ emoji }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmojiPicker',
  emits: ['select'],
  data() {
    return {
      open: false,
      emojis: ['😀', '😁', '😂', '🤣', '😊', '😍', '😘', '😎', '🤔', '😴', '😭', '😡', '👍', '👎', '🙏', '👏', '💪', '🔥', '⭐', '❤️', '💔', '🎉', '🎂', '🎁', '✅', '❌', '❓', '❗', '⚡', '🌟', '📌', '📝'],
    };
  },
  methods: {
    pick(emoji) {
      this.$emit('select', emoji);
      this.open = false;
    },
  },
};
</script>
