<template>
  <div>
    <page-header :title="$trans('global.detail')" />
    <base-loader v-if="loading" />
    <base-card v-else>
      <show-item :items="items" />
      <div class="mt-4 flex justify-end">
        <base-button variant="secondary" @click="back">{{ $trans('global.back') || 'Back' }}</base-button>
      </div>
    </base-card>
  </div>
</template>

<script>
/**
 * Reconstructed page — original path: resources/js/views/Pages/Config/MailTemplate/Show.vue
 * Route: /config/mail-template/:uuid
 * Vuex module: config
 */
export default {
  computed: {
    form: (vm) => (vm.$store.state.config && vm.$store.state.config.form) || {},
    loading: (vm) => (vm.$store.state.config && vm.$store.state.config.loading) || false,
    items() {
      return [
        { label: 'Name', value: this.form.name },
        { label: 'Description', value: this.form.description },
        { label: 'Created at', value: this.$cal.format(this.form.created_at) },
      ];
    },
  },
  async created() {
    if (!"config" || !this.$route.params.uuid) return;
    this.$store.dispatch('config/show', this.$route.params.uuid).catch(() => {});
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
