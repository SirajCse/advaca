<template>
  <div>
    <base-label v-if="label" class="mb-1">{{ label }}</base-label>
    <div class="rounded-md border border-gray-300">
      <div class="flex flex-wrap gap-1 border-b border-gray-200 bg-gray-50 p-1">
        <button v-for="tool in tools" :key="tool.cmd" type="button" class="rounded px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200" @click="exec(tool.cmd)">
          {{ tool.label }}
        </button>
      </div>
      <div
        ref="editor"
        contenteditable="true"
        class="min-h-[160px] max-w-none p-3 text-sm focus:outline-none"
        @input="$emit('update:modelValue', $event.target.innerHTML)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MintEditor',
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      tools: [
        { cmd: 'bold', label: 'B' },
        { cmd: 'italic', label: 'I' },
        { cmd: 'underline', label: 'U' },
        { cmd: 'insertUnorderedList', label: '• List' },
        { cmd: 'insertOrderedList', label: '1. List' },
      ],
    };
  },
  methods: {
    exec(cmd) {
      document.execCommand(cmd, false, null);
    },
  },
};
</script>
