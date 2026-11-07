<template>
  <Transition name="fade-slide" appear>
    <div v-show="visibility !== false">
      <slot />
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  visibility: { type: Boolean, default: true },
})
</script>
