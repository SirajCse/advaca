<template>
  <transition
    enter-active-class="transition duration-150 ease-out"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-100 ease-in"
    leave-to-class="opacity-0"
    mode="out-in"
  >
    <slot />
  </transition>
</template>

<script>
export default { name: 'ChildTransition' };
</script>
