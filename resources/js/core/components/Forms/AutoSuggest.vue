<template>
  <div class="relative">
    <input
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
      @input="onInput"
      @focus="open = true"
      @blur="closeSoon"
    />
    <ul v-if="open && suggestions.length" class="absolute z-20 mt-1 max-h-48 w-full overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <li v-for="(item, index) in suggestions" :key="index">
        <button type="button" class="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50" @mousedown.prevent="pick(item)">
          <slot name="item" :item="item">{{ item.label || item }}</slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AutoSuggest',
  props: {
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    suggestions: { type: Array, default: () => [] },
  },
  emits: ['update:modelValue', 'select', 'search'],
  data() {
    return { open: false };
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('search', event.target.value);
      this.open = true;
    },
    pick(item) {
      this.$emit('select', item);
      this.open = false;
    },
    closeSoon() {
      setTimeout(() => {
        this.open = false;
      }, 150);
    },
  },
};
</script>
