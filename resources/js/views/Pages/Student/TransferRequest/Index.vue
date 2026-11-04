<template>
  <div>
    <page-header :title="$trans('global.list')" />
    <key-search v-if="false" v-model="search" class="mb-4" />
    <data-table
      :columns="columns"
      :rows="list"
      :meta="listMeta"
      :loading="loading"
      @page-change="fetch"
    >
      <template #actions="{ row }">
        <row-action>
          <dropdown-item @click="edit(row)">{{ $trans('global.edit') || 'Edit' }}</dropdown-item>
          <dropdown-item variant="danger" @click="remove(row)">{{ $trans('global.delete') || 'Delete' }}</dropdown-item>
        </row-action>
      </template>
    </data-table>
    <base-button class="mt-4" :to="{ name: createActionName }">{{ $trans('global.add') || 'Add' }}</base-button>
  </div>
</template>

<script>
/**
 * Reconstructed page — original path: resources/js/views/Pages/Student/TransferRequest/Index.vue
 * Route: /student/transfer-requests/
 * Vuex module: (general)
 */
export default {
  data() {
    return {
      columns: [
        { key: 'index', label: '#' },
        { key: 'name', label: 'Name' },
        { key: 'created_at', label: 'Created at' },
      ],
      search: '',
    };
  },
  computed: {
    list: (vm) => vm.$store.state.null ? vm.$store.state.null.list : [],
    listMeta: (vm) => vm.$store.state.null ? vm.$store.state.null.listMeta : {},
    loading: (vm) => vm.$store.state.null ? vm.$store.state.null.loading : false,
    createActionName() {
      const base = this.$route.name || '';
      return base.endsWith('List') ? base.slice(0, -4) + 'Create' : base + 'Create';
    },
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch(page = 1) {
      if (!null) return;
      this.$store.dispatch('None/list', { params: { page, keyword: this.search } });
    },
    edit(row) {
      const base = this.$route.name || '';
      const editName = base.endsWith('List') ? base.slice(0, -4) + 'Edit' : base + 'Edit';
      this.$router.push({ name: editName, params: { uuid: row.uuid } });
    },
    async remove(row) {
      const confirmed = await this.$swal('Delete this record?');
      if (!confirmed.isConfirmed) return;
      if (!null) return;
      this.$store.dispatch('None/destroy', row.uuid).then(() => this.fetch());
    },
  },
};
</script>
