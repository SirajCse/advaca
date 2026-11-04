<template>
  <div class="mt-4 flex items-center justify-end gap-2">
    <slot name="extra" />
    <base-button variant="secondary" @click="$emit('cancel')">{{ $trans('global.cancel') || 'Cancel' }}</base-button>
    <base-button type="submit" :loading="loading" data-testid="submit">
      <slot>{{ $trans('global.save') || 'Save' }}</slot>
    </base-button>
  </div>
</template>

<script>
export default {
  name: 'FormAction',
  props: {
    loading: { type: Boolean, default: false },
    buttonClass: { type: String, default: '' },
  },
  emits: ['cancel'],
};
</script>
