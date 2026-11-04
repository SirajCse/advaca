<template>
  <div>
    <page-header :title="title" />
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
export default {
  data() {
    return { localForm: {} };
  },
  computed: {
    meta() {
      return this.$route.meta || {};
    },
    namespace() {
      return this.meta.queryType || null;
    },
    moduleState() {
      return this.namespace ? this.$store.state[this.namespace] : { form: {}, formErrors: {}, loading: false };
    },
    form: {
      get() {
        return { name: '', description: '', ...this.moduleState.form, ...this.localForm };
      },
      set(value) {
        this.localForm = value;
      },
    },
    formErrors() {
      return this.moduleState.formErrors || {};
    },
    loading() {
      return this.moduleState.loading;
    },
    isEdit() {
      return this.meta.type === 'edit';
    },
    title() {
      return this.$trans(this.meta.trans || 'global.add');
    },
  },
  async created() {
    if (!this.namespace) return;
    await this.$store.dispatch(this.namespace + '/preRequisite').catch(() => {});
    if (this.isEdit && this.$route.params.uuid) {
      this.$store.dispatch(this.namespace + '/show', this.$route.params.uuid).catch(() => {});
    }
  },
  methods: {
    async submit() {
      const ns = this.namespace;
      if (!ns) return;
      try {
        if (this.isEdit) {
          await this.$store.dispatch(ns + '/update', { uuid: this.$route.params.uuid, form: this.form });
        } else {
          await this.$store.dispatch(ns + '/store', this.form);
        }
        this.$router.push({ name: (this.meta.prefix || '') + 'List' });
      } catch (error) {
        // validation errors are committed to the module store
      }
    },
    back() {
      this.$router.push({ name: (this.meta.prefix || '') + 'List' });
    },
  },
};
</script>
