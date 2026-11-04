<template>
  <div class="min-h-screen bg-gray-100" :class="'theme-' + colorScheme">
    <div class="flex min-h-screen">
      <aside
        class="fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto bg-white shadow transition-transform lg:static lg:translate-x-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex h-16 items-center border-b border-gray-100 px-4">
          <router-link to="/" class="text-lg font-bold text-primary">{{ siteName }}</router-link>
        </div>
        <app-navigation />
      </aside>

      <div class="flex min-w-0 flex-1 flex-col">
        <header class="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
          <div class="flex items-center gap-3">
            <button type="button" class="rounded p-1 text-gray-500 hover:bg-gray-100" @click="$store.dispatch('layout/toggleSidebar')">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
            <slot name="topbar-left" />
          </div>
          <div class="flex items-center gap-3">
            <slot name="topbar-right" />
            <profile-dropdown />
          </div>
        </header>

        <main class="flex-1 p-4 lg:p-6">
          <router-view v-slot="{ Component }">
            <parent-transition appear>
              <component :is="Component" />
            </parent-transition>
          </router-view>
        </main>

        <footer-credit />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  computed: {
    sidebarOpen() {
      return this.$store.state.layout.sidebarOpen;
    },
    colorScheme() {
      const system = this.$store.state.config.system || {};
      return system.color_scheme || 'default';
    },
    siteName() {
      const system = this.$store.state.config.system || {};
      return system.name || 'Advaca';
    },
  },
};
</script>
