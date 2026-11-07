<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import UserLayout from './User.vue'
import GuestLayout from './Guest.vue'
import BlankLayout from './Blank.vue'
import EmptyLayout from './Empty.vue'
import ErrorLayout from './Error.vue'
import SetupLayout from './Setup.vue'

const layouts = {
  app: UserLayout,
  guest: GuestLayout,
  blank: BlankLayout,
  empty: EmptyLayout,
  error: ErrorLayout,
  setup: SetupLayout,
}

const route = useRoute()
const theme = useThemeStore()
theme.apply()

const layout = computed(() => layouts[route.meta.layout] || UserLayout)
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
