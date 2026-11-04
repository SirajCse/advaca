<template>
  <div>
    <page-header :title="$trans('global.edit')" />
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
 * Reconstructed page — original path: resources/js/views/Pages/Config/WhatsAppTemplate/Action.vue
 * Route: /config/whatsapp-template/:uuid/edit
 * Vuex module: config
 */
export default {
  data() {
    return { localForm: {} };
  },
  computed: {
    moduleState: (vm) => vm.$store.state.config || { form: {}, formErrors: {}, loading: false },
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
    if (!"config") return;
    await this.$store.dispatch('config/preRequisite').catch(() => {});
    if (this.isEdit && this.$route.params.uuid) {
      this.$store.dispatch('config/show', this.$route.params.uuid).catch(() => {});
    }
  },
  methods: {
    async submit() {
      try {
        if (this.isEdit) {
          await this.$store.dispatch('config/update', { uuid: this.$route.params.uuid, form: this.form });
        } else {
          await this.$store.dispatch('config/store', this.form);
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
