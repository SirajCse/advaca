<template>
  <transition
    appear
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="opacity-0"
    mode="out-in"
  >
    <slot />
  </transition>
</template>

<script>
export default { name: 'MenuParentTransition' };
</script>
