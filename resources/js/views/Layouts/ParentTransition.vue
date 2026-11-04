<template>
  <Transition appear name="parent-transition">
    <div v-if="visibility" class="parent-transition-wrapper">
      <slot />
    </div>
  </Transition>
</template>
<script setup>
defineProps({
  appear: { type: Boolean, default: false },
  visibility: { type: Boolean, default: true },
})
</script>
<style scoped>
.parent-transition-enter-active, .parent-transition-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.parent-transition-enter-from, .parent-transition-leave-to {
  opacity: 0; transform: translateY(4px);
}
</style>
