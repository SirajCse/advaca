<template>
  <div class="min-h-screen bg-gray-50 theme-default">
    <guest-header />
    <main class="mx-auto max-w-7xl px-4 py-8">
      <router-view v-slot="{ Component }">
        <parent-transition appear>
          <component :is="Component" />
        </parent-transition>
      </router-view>
    </main>
    <footer-credit />
  </div>
</template>

<script>
export default { name: 'GuestLayout' };
</script>
