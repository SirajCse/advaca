<template>
  <div>
    <page-header v-if="standalone" :title="$trans('user.props.force_change_password')" />
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
 * Reconstructed page — original path: resources/js/views/Pages/User/ForceChangePassword.vue
 * Route: /user/force-change-password
 * Vuex module: (general)
 *
 * This component was rendered inside its parent route in the original app;
 * extend the template with the feature-specific UI.
 */
export default {
  name: "ForceChangePassword",
  props: {
    standalone: { type: Boolean, default: false },
  },
};
</script>
