<script setup>
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps({
  modelValue: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['update:modelValue'])
const form = computed(() => props.modelValue || {})
function set(k, v) {
  emit('update:modelValue', { ...form.value, [k]: v })
}
</script>

<template>
  <div class="space-y-2">
    <Label>Reminder</Label>
    <div class="flex gap-2">
      <Input type="date" :model-value="form.start_date" @update:model-value="set('start_date', $event)" />
      <Input type="time" :model-value="form.time" @update:model-value="set('time', $event)" />
    </div>
  </div>
</template>
