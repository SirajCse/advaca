<template>
  <div :class="cn('text-sm text-muted-foreground [&_p]:leading-relaxed', $props.class)"><slot /></div>
</template>
<script setup lang="ts">
import { cn } from '@/lib/utils'
const props = defineProps<{ class?: string }>()
</script>
