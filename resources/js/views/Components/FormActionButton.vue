<template>
  <base-button :variant="variant" :loading="loading" @click="$emit('click', $event)">
    <slot>{{ label }}</slot>
  </base-button>
</template>

<script>
export default {
  name: 'FormActionButton',
  props: {
    label: { type: String, default: '' },
    variant: { type: String, default: 'primary' },
    loading: { type: Boolean, default: false },
  },
  emits: ['click'],
};
</script>
