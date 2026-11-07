<script setup>
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { RouterLink } from 'vue-router'

defineProps({
  title: { type: String, default: '' },
  navs: { type: Array, default: () => [] },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="flex flex-col gap-3 pb-1">
    <Breadcrumb v-if="navs.length">
      <BreadcrumbList>
        <template v-for="(nav, i) in navs" :key="i">
          <BreadcrumbItem>
            <RouterLink v-if="nav.path && i < navs.length - 1" :to="nav.path" class="transition-colors hover:text-foreground">
              {{ nav.label }}
            </RouterLink>
            <BreadcrumbPage v-else>{{ nav.label }}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator v-if="i < navs.length - 1" />
        </template>
      </BreadcrumbList>
    </Breadcrumb>
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 class="text-xl font-semibold tracking-tight md:text-2xl">{{ title }}</h1>
        <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
      </div>
      <div class="flex items-center gap-2">
        <slot />
      </div>
    </div>
  </div>
</template>
