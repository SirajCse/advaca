<template>
  <slot v-if="allowed" />
</template>

<script>
export default {
  name: 'UserScope',
  props: {
    permissions: { type: Array, default: () => [] },
    roles: { type: Array, default: () => [] },
  },
  computed: {
    allowed() {
      const hasPerm = this.$store.getters['auth/user/hasAnyPermission'];
      const hasRole = this.$store.getters['auth/user/hasAnyRole'];
      return hasPerm(this.permissions) && hasRole(this.roles);
    },
  },
};
</script>
