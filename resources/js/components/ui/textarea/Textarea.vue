<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes, computed } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'], modelValue?: any, rows?: number | string }>()
const emit = defineEmits<{ (e: 'update:modelValue', v: any): void }>()
const model = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})
</script>

<template>
  <textarea
    v-model="model"
    :rows="rows ?? 4"
    :class="cn('flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>
