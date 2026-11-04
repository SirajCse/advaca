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
 * Reconstructed page — original path: resources/js/views/Pages/Employee/Qualification/Show.vue
 * Route: /employees/:uuid/qualifications/:muuid
 * Vuex module: (general)
 */
export default {
  computed: {
    form: (vm) => (vm.$store.state.null && vm.$store.state.null.form) || {},
    loading: (vm) => (vm.$store.state.null && vm.$store.state.null.loading) || false,
    items() {
      return [
        { label: 'Name', value: this.form.name },
        { label: 'Description', value: this.form.description },
        { label: 'Created at', value: this.$cal.format(this.form.created_at) },
      ];
    },
  },
  async created() {
    if (!null || !this.$route.params.uuid) return;
    this.$store.dispatch('None/show', this.$route.params.uuid).catch(() => {});
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
