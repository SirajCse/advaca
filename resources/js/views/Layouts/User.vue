<template>
  <div class="min-h-screen bg-gray-100">
    <app-navigation />
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default { name: 'UserLayout' };
</script>
