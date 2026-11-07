<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
const props = defineProps<{ value?: number, isActive?: boolean }>()
const emit = defineEmits<{ (e: 'click'): void }>()
</script>
<template>
  <Button :variant="props.isActive ? 'default' : 'outline'" size="icon" class="h-8 w-8" @click="emit('click')">
    <slot>{{ props.value }}</slot>
  </Button>
</template>
