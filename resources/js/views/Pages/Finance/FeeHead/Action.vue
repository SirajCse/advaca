<template>
  <div>
    <page-header :title="$trans('global.add')" />
    <base-card>
      <form @submit.prevent="submit">
        <base-input v-model="form.name" :label="$trans('global.name') || 'Name'" class="mb-4" :error="formErrors.name" required />
        <base-textarea v-model="form.description" :label="$trans('global.description') || 'Description'" class="mb-4" :error="formErrors.description" />
        <form-action :loading="loading" @cancel="back" />
      </form>
    </base-card>
  </div>
</template>

<script>
/**
 * Reconstructed page — original path: resources/js/views/Pages/Finance/FeeHead/Action.vue
 * Route: /finance/fee-heads/create
 * Vuex module: (general)
 */
export default {
  data() {
    return { localForm: {} };
  },
  computed: {
    moduleState: (vm) => vm.$store.state.null || { form: {}, formErrors: {}, loading: false },
    form: {
      get() {
        return { name: '', description: '', ...this.moduleState.form, ...this.localForm };
      },
      set(value) {
        this.localForm = value;
      },
    },
    formErrors: (vm) => vm.moduleState.formErrors || {},
    loading: (vm) => vm.moduleState.loading,
    isEdit() {
      return this.$route.meta.type === 'edit' || Boolean(this.$route.params.uuid);
    },
  },
  async created() {
    if (!null) return;
    await this.$store.dispatch('None/preRequisite').catch(() => {});
    if (this.isEdit && this.$route.params.uuid) {
      this.$store.dispatch('None/show', this.$route.params.uuid).catch(() => {});
    }
  },
  methods: {
    async submit() {
      try {
        if (this.isEdit) {
          await this.$store.dispatch('None/update', { uuid: this.$route.params.uuid, form: this.form });
        } else {
          await this.$store.dispatch('None/store', this.form);
        }
        const base = this.$route.name || '';
        const listName = base.endsWith('Create') || base.endsWith('Edit')
          ? base.replace(/(Create|Edit)$/, 'List')
          : base + 'List';
        this.$router.push({ name: listName });
      } catch (error) {
        // validation errors are committed to the module store
      }
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
