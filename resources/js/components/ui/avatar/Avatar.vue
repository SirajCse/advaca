<script setup lang="ts">
import { AvatarRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'
const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
<template>
  <AvatarRoot :class="cn('relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full', props.class)"><slot /></AvatarRoot>
</template>
