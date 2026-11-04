<template>
  <div>
    <page-header :title="title" />
    <key-search v-if="meta.keySearch" v-model="search" class="mb-4" />
    <data-table
      :columns="columns"
      :rows="list"
      :meta="metaData"
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
    <base-button class="mt-4" :to="{ name: createName }">{{ $trans('global.add') || 'Add' }}</base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { key: 'name', label: this.$trans('global.name') || 'Name' },
        { key: 'description', label: this.$trans('global.description') || 'Description' },
      ],
      search: '',
    };
  },
  computed: {
    list: (vm) => vm.moduleState.list,
    metaData: (vm) => vm.moduleState.listMeta,
    loading: (vm) => vm.moduleState.loading,
    meta() {
      return this.$route.meta || {};
    },
    namespace() {
      return this.meta.queryType || null;
    },
    moduleState() {
      return this.namespace ? this.$store.state[this.namespace] : { list: [], listMeta: {}, loading: false };
    },
    createName() {
      return (this.meta.prefix || '') + 'Create';
    },
    title() {
      return this.$trans(this.meta.trans || this.meta.label || 'global.list');
    },
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch(page = 1) {
      if (!this.namespace) return;
      this.$store.dispatch(this.namespace + '/list', { params: { page, keyword: this.search } });
    },
    edit(row) {
      this.$router.push({ name: (this.meta.prefix || '') + 'Edit', params: { uuid: row.uuid } });
    },
    async remove(row) {
      const confirmed = await this.$swal('Delete this record?');
      if (!confirmed.isConfirmed) return;
      this.$store.dispatch(this.namespace + '/destroy', row.uuid).then(() => this.fetch());
    },
  },
};
</script>
