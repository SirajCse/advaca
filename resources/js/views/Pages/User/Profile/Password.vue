<template>
  <div>
    <page-header v-if="standalone" :title="$trans('auth.password.change_password')" />
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
 * Reconstructed page — original path: resources/js/views/Pages/User/Profile/Password.vue
 * Route: /user/password
 * Vuex module: (general)
 *
 * This component was rendered inside its parent route in the original app;
 * extend the template with the feature-specific UI.
 */
export default {
  name: "Password",
  props: {
    standalone: { type: Boolean, default: false },
  },
};
</script>
