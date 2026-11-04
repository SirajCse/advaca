<template>
  <div class="rounded-lg border border-gray-200 bg-white shadow-sm" :class="$attrs.class">
    <div v-if="title || $slots.header" class="border-b border-gray-100 px-4 py-3">
      <slot name="header">
        <h3 class="text-sm font-semibold text-gray-800">{{ title }}</h3>
      </slot>
    </div>
    <div class="p-4" :class="{ 'p-0': noPadding }">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-gray-100 px-4 py-3">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: { type: String, default: '' },
    noPadding: { type: Boolean, default: false },
  },
};
</script>
