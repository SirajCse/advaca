<template>
  <div>
    <page-header v-if="standalone" :title="$trans('global.edit')" />
    <base-card>
      <slot />
      <p class="py-6 text-center text-sm text-gray-400">
        {{ $trans('global.content_placeholder') || 'Content area' }}
      </p>
    </base-card>
  </div>
</template>

<script>
/**
 * Reconstructed page — original path: resources/js/views/Pages/Site/Page/Edit.vue
 * Route: /site/pages/:uuid/edit
 * Vuex module: (general)
 *
 * This component was rendered inside its parent route in the original app;
 * extend the template with the feature-specific UI.
 */
export default {
  name: "Edit",
  props: {
    standalone: { type: Boolean, default: false },
  },
};
</script>
