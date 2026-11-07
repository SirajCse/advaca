<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { menuTree } from '@/config/menu'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'

const route = useRoute()

const tree = computed(() => menuTree)

function isActive(item) {
  if (!item.to) return false
  return route.path === item.to || route.path.startsWith(item.to + '/')
}

function sectionActive(section) {
  return (section.children || []).some((c) => isActive(c))
}
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r bg-card lg:flex">
    <div class="flex h-14 items-center gap-2 border-b px-4">
      <div class="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">A</div>
      <span class="font-semibold">AdvAca</span>
    </div>
    <nav class="flex-1 space-y-1 overflow-y-auto p-3">
      <template v-for="(section, i) in tree" :key="i">
        <template v-if="section.children && section.children.length">
          <div class="px-2 pb-1 pt-3 text-xs font-semibold text-muted-foreground">{{ section.label }}</div>
          <template v-for="(child, j) in section.children" :key="j">
            <RouterLink
              v-if="child.to"
              :to="child.to"
              class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
              :class="isActive(child) ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground'"
            >
              <component :is="child.icon" v-if="child.icon" class="h-4 w-4" />
              {{ child.label }}
            </RouterLink>
            <div v-else class="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
              {{ child.label }}
              <template v-if="child.children">
                <RouterLink
                  v-for="(sub, k) in child.children"
                  :key="k"
                  :to="sub.to"
                  class="mt-0.5 flex items-center gap-1.5 rounded-md px-2 py-1 text-[13px] normal-case tracking-normal transition-colors hover:bg-accent"
                  :class="isActive(sub) ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground'"
                >
                  <ChevronRight class="h-3 w-3" />
                  {{ sub.label }}
                </RouterLink>
              </template>
            </div>
          </template>
        </template>
      </template>
    </nav>
  </aside>
</template>
