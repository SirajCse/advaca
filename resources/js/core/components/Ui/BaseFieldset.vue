<template>
  <fieldset class="rounded-lg border border-gray-200 p-4">
    <legend class="px-2 text-sm font-semibold text-gray-700">{{ legend }}</legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'BaseFieldset',
  props: { legend: { type: String, default: '' } },
};
</script>
