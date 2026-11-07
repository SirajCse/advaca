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
  <div class="-mx-4 -mt-4 mb-2 border-b bg-primary/[0.04] px-4 pb-4 pt-4 md:-mx-6 md:px-6">
    <Breadcrumb v-if="navs.length" class="mb-1.5">
      <BreadcrumbList class="text-[13px]">
        <template v-for="(nav, i) in navs" :key="i">
          <BreadcrumbItem>
            <RouterLink v-if="nav.path && i < navs.length - 1" :to="nav.path" class="transition-colors hover:text-primary">
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
        <h1 class="text-xl font-bold tracking-tight md:text-2xl">{{ title }}</h1>
        <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
      </div>
      <div class="flex items-center gap-2">
        <slot />
      </div>
    </div>
  </div>
</template>
