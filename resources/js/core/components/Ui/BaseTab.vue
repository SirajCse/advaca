<template>
  <div>
    <div class="mb-4 border-b border-gray-200">
      <nav class="-mb-px flex gap-4">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="border-b-2 px-1 py-2 text-sm font-medium"
          :class="currentTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'"
          @click="currentTab = tab"
        >{{ tab }}</button>
      </nav>
    </div>
    <slot :current-tab="currentTab" />
  </div>
</template>

<script>
export default {
  name: 'BaseTab',
  data() {
    return { currentTab: '' };
  },
  computed: {
    tabs() {
      const tabs = [];
      const collect = (vn) => {
        (vn || []).forEach((child) => {
          if (child.type && child.props && child.props.name) tabs.push(child.props.name);
          if (Array.isArray(child.children)) collect(child.children);
        });
      };
      collect(this.$slots.default && this.$slots.default());
      return tabs;
    },
  },
  mounted() {
    if (!this.currentTab && this.tabs.length) this.currentTab = this.tabs[0];
  },
};
</script>
