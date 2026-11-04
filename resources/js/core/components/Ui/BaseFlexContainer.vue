<template>
  <div class="flex" :class="[wrap ? 'flex-wrap' : '', gapClass, alignClass, justifyClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseFlexContainer',
  props: {
    wrap: { type: Boolean, default: false },
    gap: { type: String, default: '4' },
    align: { type: String, default: 'center' },
    justify: { type: String, default: 'start' },
  },
  computed: {
    gapClass() { return `gap-${this.gap}`; },
    alignClass() { return `items-${this.align}`; },
    justifyClass() { return `justify-${this.justify}`; },
  },
};
</script>
