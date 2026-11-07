<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  sections: { type: Array, default: () => [] },
})

const route = useRoute()

function isActive(to) {
  return route.path === to
}
</script>

<template>
  <nav class="flex flex-col gap-1 rounded-lg border bg-card p-2">
    <RouterLink
      v-for="s in sections"
      :key="s.to"
      :to="s.to"
      class="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
      :class="isActive(s.to) ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground'"
    >
      {{ s.label }}
    </RouterLink>
  </nav>
</template>
