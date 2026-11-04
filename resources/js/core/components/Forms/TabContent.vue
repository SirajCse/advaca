<template>
  <div v-show="active" class="pt-4">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: { name: { type: String, required: true } },
  computed: {
    active() {
      let parent = this.$parent;
      while (parent && parent.currentTab === undefined) parent = parent.$parent;
      return !parent || parent.currentTab === this.name;
    },
  },
};
</script>
