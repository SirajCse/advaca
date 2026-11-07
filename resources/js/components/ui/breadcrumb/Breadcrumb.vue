<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
  <nav aria-label="breadcrumb" :class="cn('flex text-sm', props.class)"><slot /></nav>
</template>
