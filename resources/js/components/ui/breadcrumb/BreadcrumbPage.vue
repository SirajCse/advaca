<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
  <span aria-current="page" :class="cn('font-normal text-foreground', props.class)"><slot /></span>
</template>
