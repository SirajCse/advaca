<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

defineProps({
  title: { type: String, default: 'AdvAca' },
})
</script>

<template>
  <header class="border-b bg-card">
    <div class="mx-auto flex h-14 max-w-5xl items-center px-4">
      <RouterLink to="/" class="flex items-center gap-2 font-semibold">
        <div class="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">A</div>
        {{ title }}
      </RouterLink>
      <div class="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm" as-child>
          <RouterLink to="/login">Login</RouterLink>
        </Button>
        <Button size="sm" as-child>
          <RouterLink to="/register">Register</RouterLink>
        </Button>
      </div>
    </div>
  </header>
</template>
