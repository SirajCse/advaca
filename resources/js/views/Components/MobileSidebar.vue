<template>
  <teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 lg:hidden">
      <div class="absolute inset-0 bg-gray-900/50" @click="$emit('close')" />
      <div class="absolute inset-y-0 left-0 w-64 overflow-y-auto bg-white p-4 shadow-xl">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'MobileSidebar',
  props: { open: { type: Boolean, default: false } },
  emits: ['close'],
};
</script>
