<template>
  <div>
    <base-label v-if="label" :required="required" class="mb-1">{{ label }}</base-label>
    <v-dropdown placement="bottom-start" :disabled="disabled" class="w-full">
      <button
        type="button"
        class="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm shadow-sm focus:border-primary focus:ring-primary"
        :class="error ? 'border-danger' : ''"
      >
        {{ selectedLabel || placeholder || $trans('global.select') }}
      </button>
      <template #popper>
        <div class="max-h-60 w-64 overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <input
            v-model="query"
            type="text"
            :placeholder="$trans('global.search') || 'Search'"
            class="w-full border-b border-gray-100 px-3 py-2 text-sm focus:outline-none"
          />
          <button
            v-for="option in filtered"
            :key="option.value"
            type="button"
            class="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
            @click="select(option)"
          >
            {{ option.label }}
          </button>
          <p v-if="!filtered.length" class="px-3 py-2 text-sm text-gray-400">No results</p>
        </div>
      </template>
    </v-dropdown>
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
export default {
  name: 'BaseSelectSearch',
  props: {
    modelValue: { type: [String, Number], default: '' },
    options: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    labelKey: { type: String, default: 'label' },
    valueKey: { type: String, default: 'value' },
    placeholder: { type: String, default: '' },
    error: { type: [String, Array], default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  data() {
    return { query: '' };
  },
  computed: {
    normalized() {
      return this.options.map((o) =>
        typeof o === 'object' ? { label: o[this.labelKey], value: o[this.valueKey] } : { label: o, value: o },
      );
    },
    filtered() {
      if (!this.query) return this.normalized;
      const q = this.query.toLowerCase();
      return this.normalized.filter((o) => String(o.label).toLowerCase().includes(q));
    },
    selectedLabel() {
      const found = this.normalized.find((o) => o.value === this.modelValue);
      return found ? found.label : '';
    },
  },
  methods: {
    select(option) {
      this.$emit('update:modelValue', option.value);
      this.$emit('change', option);
    },
  },
};
</script>
