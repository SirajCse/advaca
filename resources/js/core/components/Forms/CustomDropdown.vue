<template>
  <v-dropdown>
    <slot name="trigger">
      <button type="button" class="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
        {{ label || $trans('global.actions') || 'Actions' }}
      </button>
    </slot>
    <template #popper>
      <slot />
    </template>
  </v-dropdown>
</template>

<script>
export default {
  name: 'CustomDropdown',
  props: { label: { type: String, default: '' } },
};
</script>
