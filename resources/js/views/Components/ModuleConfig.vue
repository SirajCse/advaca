<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
    </CardHeader>
    <CardContent class="space-y-5">
      <slot />
    </CardContent>
  </Card>
</template>
