<template>
  <div class="min-h-screen">
    <router-view v-slot="{ Component }">
      <parent-transition>
        <component :is="Component" />
      </parent-transition>
    </router-view>
  </div>
</template>

<script>
export default { name: 'EmptyLayout' };
</script>
