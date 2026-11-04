<template>
  <div>
    <page-header :title="$trans('auth.failed_login_attempt') || 'Failed login attempts'" />
    <data-table :columns="columns" :rows="list" :meta="meta" :loading="loading" @page-change="fetch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { key: 'created_at', label: 'Time' },
        { key: 'email', label: 'Email' },
        { key: 'ip', label: 'IP address' },
        { key: 'user_agent', label: 'Device' },
      ],
      search: '',
    };
  },
  computed: {
    list: (vm) => vm.$store.state.auth.list,
    meta: (vm) => vm.$store.state.auth.listMeta,
    loading: (vm) => vm.$store.state.auth.loading,
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch(page = 1) {
      this.$store.dispatch('auth/list', { params: { page, keyword: this.search } });
    },
  },
};
</script>
