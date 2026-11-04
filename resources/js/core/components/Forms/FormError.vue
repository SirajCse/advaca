<template>
  <p v-if="message" class="mt-1 text-xs text-danger">{{ Array.isArray(message) ? message[0] : message }}</p>
</template>

<script>
export default {
  name: 'FormError',
  props: { message: { type: [String, Array], default: '' } },
};
</script>
