<script setup>
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps({
  modelValue: { type: [Object, String], default: () => ({}) },
  label: { type: String, default: 'Name' },
})
const emit = defineEmits(['update:modelValue'])
const value = computed(() => (typeof props.modelValue === 'object' && props.modelValue !== null ? props.modelValue : { first_name: props.modelValue }))

function set(part, v) {
  emit('update:modelValue', { ...value.value, [part]: v })
}
</script>

<template>
  <div class="space-y-1.5">
    <Label>{{ label }}</Label>
    <div class="grid grid-cols-2 gap-2">
      <Input :model-value="value.first_name" placeholder="First name" @update:model-value="set('first_name', $event)" />
      <Input :model-value="value.last_name" placeholder="Last name" @update:model-value="set('last_name', $event)" />
    </div>
  </div>
</template>
