<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
  <nav :class="cn('flex flex-wrap items-center justify-center gap-1', props.class)" aria-label="Pagination"><slot /></nav>
</template>
