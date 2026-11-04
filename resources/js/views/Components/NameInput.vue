<template>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
    <base-input v-model="local.first_name" :label="$trans('global.first_name') || 'First name'" :error="errors.first_name" />
    <base-input v-model="local.middle_name" :label="$trans('global.middle_name') || 'Middle name'" :error="errors.middle_name" />
    <base-input v-model="local.last_name" :label="$trans('global.last_name') || 'Last name'" :error="errors.last_name" />
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  props: {
    modelValue: { type: Object, default: () => ({}) },
    errors: { type: Object, default: () => ({}) },
  },
  emits: ['update:modelValue'],
  computed: {
    local: {
      get() {
        return { first_name: '', middle_name: '', last_name: '', ...this.modelValue };
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
