<template>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <base-input v-model="local.address_line1" :label="$trans('global.address_line1') || 'Address line 1'" class="sm:col-span-2" />
    <base-input v-model="local.address_line2" :label="$trans('global.address_line2') || 'Address line 2'" class="sm:col-span-2" />
    <base-input v-model="local.city" :label="$trans('global.city') || 'City'" />
    <base-input v-model="local.state" :label="$trans('global.state') || 'State'" />
    <base-input v-model="local.zipcode" :label="$trans('global.zipcode') || 'Zip code'" />
    <base-input v-model="local.country" :label="$trans('global.country') || 'Country'" />
  </div>
</template>

<script>
export default {
  name: 'AddressInput',
  props: {
    modelValue: { type: Object, default: () => ({}) },
    errors: { type: Object, default: () => ({}) },
  },
  emits: ['update:modelValue'],
  computed: {
    local: {
      get() {
        return { address_line1: '', address_line2: '', city: '', state: '', zipcode: '', country: '', ...this.modelValue };
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
