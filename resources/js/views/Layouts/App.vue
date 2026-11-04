<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

const router = useRouter()
const isDark = ref(false)

function applyTheme() {
  const stored = localStorage.getItem('advaca-theme')
  const dark = stored === 'dark' ||
    (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
}
onMounted(applyTheme)

function toggleTheme() {
  const next = !isDark.value
  isDark.value = next
  localStorage.setItem('advaca-theme', next ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', next)
}

const currentPath = computed(() => router.currentRoute.value.path)
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b bg-card">
      <div class="flex h-14 items-center px-4 gap-4">
        <RouterLink to="/" class="font-semibold text-lg">Advaca</RouterLink>
        <nav class="ml-4 hidden md:flex gap-4 text-sm">
          <RouterLink to="/dashboard" class="hover:text-primary">Dashboard</RouterLink>
          <RouterLink to="/employee" class="hover:text-primary">Employees</RouterLink>
          <RouterLink to="/student" class="hover:text-primary">Students</RouterLink>
          <RouterLink to="/academic" class="hover:text-primary">Academic</RouterLink>
          <RouterLink to="/finance" class="hover:text-primary">Finance</RouterLink>
        </nav>
        <div class="ml-auto flex items-center gap-2">
          <button type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm"
            @click="toggleTheme">
            {{ isDark ? 'sun' : 'moon' }}
          </button>
        </div>
      </div>
    </header>

    <main class="flex-1 p-6">
      <RouterView />
    </main>
  </div>
</template>
