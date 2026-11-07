<script setup>
import { Card, CardContent } from '@/components/ui/card'

defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  meta: { type: Object, default: () => ({}) },
})
</script>

<template>
  <Card class="mb-3">
    <CardContent class="flex flex-wrap items-center justify-between gap-3 p-4">
      <div>
        <div class="font-medium">{{ title }}</div>
        <div v-if="subtitle" class="text-sm text-muted-foreground">{{ subtitle }}</div>
      </div>
      <div class="flex items-center gap-2">
        <slot name="meta" />
        <slot name="actions" />
      </div>
    </CardContent>
  </Card>
</template>
