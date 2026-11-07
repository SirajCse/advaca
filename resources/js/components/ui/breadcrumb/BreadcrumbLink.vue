<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'], href?: string }>()
</script>
<template>
  <a :href="props.href" :class="cn('transition-colors hover:text-foreground', props.class)"><slot /></a>
</template>
