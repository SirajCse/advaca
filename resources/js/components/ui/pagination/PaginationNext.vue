<script setup lang="ts">
import { Button } from '@/components/ui/button'
const props = defineProps<{ disabled?: boolean }>()
const emit = defineEmits<{ (e: 'click'): void }>()
</script>
<template>
  <Button variant="outline" size="sm" :disabled="props.disabled" class="h-8 gap-1" @click="emit('click')">
    <slot>Next</slot>
  </Button>
</template>
