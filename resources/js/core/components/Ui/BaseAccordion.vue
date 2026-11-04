<template>
  <div class="rounded-lg border border-gray-200 bg-white">
    <button type="button" class="flex w-full items-center justify-between px-4 py-3 text-left" @click="toggle">
      <span class="text-sm font-medium text-gray-800"><slot name="title">{{ title }}</slot></span>
      <svg class="h-4 w-4 transition-transform" :class="{ 'rotate-180': open }" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
    <div v-show="open" class="border-t border-gray-100 px-4 py-3">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAccordion',
  props: {
    title: { type: String, default: '' },
    modelValue: { type: Boolean, default: undefined },
  },
  emits: ['update:modelValue'],
  data() {
    return { internal: false };
  },
  computed: {
    open() {
      return this.modelValue !== undefined ? this.modelValue : this.internal;
    },
  },
  methods: {
    toggle() {
      const next = !this.open;
      if (this.modelValue !== undefined) this.$emit('update:modelValue', next);
      else this.internal = next;
    },
  },
};
</script>
