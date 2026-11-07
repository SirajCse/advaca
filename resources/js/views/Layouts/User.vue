<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'
import AppNavigation from '@/views/Components/AppNavigation.vue'
import MobileSidebar from '@/views/Components/MobileSidebar.vue'
import ProfileDropdown from '@/views/Components/ProfileDropdown.vue'
import NotificationList from '@/views/Components/NotificationList.vue'
import { Button } from '@/components/ui/button'
import { Menu, Moon, Sun } from 'lucide-vue-next'

const theme = useThemeStore()
const auth = useAuthStore()
const router = useRouter()

onMounted(() => theme.apply())

const appName = computed(() => document.title.split(' - ')[0] || 'AdvAca')
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="flex min-h-screen">
      <AppNavigation />
      <MobileSidebar />

      <div class="flex min-h-screen flex-1 flex-col lg:pl-64">
        <header class="sticky top-0 z-30 border-b bg-card/95 backdrop-blur">
          <div class="flex h-14 items-center gap-3 px-4">
            <Button variant="ghost" size="icon" class="lg:hidden" @click="theme.toggleSidebar">
              <Menu class="h-5 w-5" />
            </Button>
            <div class="hidden text-sm font-medium text-muted-foreground md:block">
              Welcome back, {{ auth.user?.profile?.name || auth.user?.username || 'User' }}
            </div>
            <div class="ml-auto flex items-center gap-1.5">
              <Button variant="ghost" size="icon" @click="theme.toggle" :title="theme.dark ? 'Light mode' : 'Dark mode'">
                <Sun v-if="theme.dark" class="h-5 w-5" />
                <Moon v-else class="h-5 w-5" />
              </Button>
              <NotificationList />
              <ProfileDropdown />
            </div>
          </div>
        </header>

        <main class="flex-1 p-4 md:p-6">
          <RouterView />
        </main>

        <footer class="border-t px-6 py-3 text-center text-xs text-muted-foreground">
          Powered by AdvAca
        </footer>
      </div>
    </div>
  </div>
</template>
