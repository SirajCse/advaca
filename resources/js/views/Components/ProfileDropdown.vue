<template>
  <v-dropdown>
    <button type="button" class="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100">
      <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        {{ initials }}
      </span>
    </button>
    <template #popper>
      <div class="min-w-[180px] rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="border-b border-gray-100 px-4 py-2">
          <p class="text-sm font-semibold text-gray-800">{{ user.name || 'User' }}</p>
          <p class="text-xs text-gray-400">{{ user.email }}</p>
        </div>
        <router-link v-for="item in items" :key="item.label" :to="item.to" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          {{ item.label }}
        </router-link>
        <button type="button" class="block w-full px-4 py-2 text-left text-sm text-danger hover:bg-danger-label" @click="logout">
          {{ $trans('auth.logout') || 'Logout' }}
        </button>
      </div>
    </template>
  </v-dropdown>
</template>

<script>
export default {
  name: 'ProfileDropdown',
  computed: {
    user() {
      return this.$store.state.auth.user || {};
    },
    initials() {
      const name = this.user.name || 'U';
      return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
    },
  },
  data() {
    return {
      items: [
        { label: 'Profile', to: { name: 'UserProfile' } },
        { label: 'Settings', to: { name: 'TeamConfig' } },
      ],
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
