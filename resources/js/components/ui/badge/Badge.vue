<script setup lang="ts">
import { badgeVariants, type BadgeVariants } from '.'
import { cn } from '@/lib/utils'
const props = defineProps<{ variant?: BadgeVariants['variant']; class?: string }>()
</script>
<template>
  <div :class="cn(badgeVariants({{ variant }}), props.class)"><slot /></div>
</template>
