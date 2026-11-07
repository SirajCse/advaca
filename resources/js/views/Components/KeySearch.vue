<script setup>
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'

defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Search...' },
})
const emit = defineEmits(['update:modelValue'])

let timer = null
function onInput(e) {
  clearTimeout(timer)
  timer = setTimeout(() => emit('update:modelValue', e.target.value), 350)
}
</script>

<template>
  <div class="relative w-full max-w-sm">
    <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input :model-value="modelValue" :placeholder="placeholder" class="pl-8" @input="onInput" />
  </div>
</template>
