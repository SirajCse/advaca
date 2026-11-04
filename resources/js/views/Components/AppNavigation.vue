<template>
  <nav class="flex flex-1 flex-col gap-1 px-2">
    <template v-for="item in navigations" :key="item.name">
      <router-link
        v-if="!item.children || !item.children.length"
        :to="firstPath(item)"
        class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-label hover:text-primary"
        :class="isActive(item) ? 'bg-primary-label text-primary' : ''"
      >
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon" class="w-5 text-center" />
        {{ label(item) }}
      </router-link>
      <div v-else>
        <button type="button" class="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100" @click="toggle(item.name)">
          <span class="flex items-center gap-3">
            <i v-if="item.meta && item.meta.icon" :class="item.meta.icon" class="w-5 text-center" />
            {{ label(item) }}
          </span>
          <svg class="h-4 w-4 transition-transform" :class="{ 'rotate-90': expanded[item.name] }" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </button>
        <div v-show="expanded[item.name]" class="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
          <router-link
            v-for="child in item.children"
            :key="child.name"
            :to="firstPath(child)"
            class="block rounded-md px-3 py-1.5 text-sm text-gray-600 hover:text-primary"
          >{{ label(child) }}</router-link>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  computed: {
    navigations() {
      return this.$store.state.navigation.navigations || [];
    },
    expanded() {
      return this.$store.state.layout.expanded || {};
    },
  },
  methods: {
    label(item) {
      const trans = item.meta && (item.meta.trans || item.meta.label);
      return trans ? this.$trans(trans) : this.$trans('global.' + (item.name || 'menu').toLowerCase());
    },
    firstPath(item) {
      if (!item.children || !item.children.length) return item.path;
      return this.firstPath(item.children[0]);
    },
    isActive(item) {
      return this.$route.matched.some((r) => r.name === item.name);
    },
    toggle(name) {
      this.$store.commit('SET_EXPANDED', name);
    },
  },
};
</script>
