<script setup>
import { useThemeStore } from '@/stores/theme'
import AppNavigation from './AppNavigation.vue'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-vue-next'

const theme = useThemeStore()
</script>

<template>
  <div v-if="theme.sidebarOpen" class="fixed inset-0 z-40 lg:hidden">
    <div class="absolute inset-0 bg-black/50" @click="theme.toggleSidebar" />
    <div class="absolute inset-y-0 left-0 w-64 bg-card">
      <Button variant="ghost" size="icon" class="absolute right-2 top-2" @click="theme.toggleSidebar">
        <X class="h-4 w-4" />
      </Button>
      <AppNavigation />
    </div>
  </div>
</template>
