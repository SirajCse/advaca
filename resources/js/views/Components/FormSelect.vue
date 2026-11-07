<script setup>
import { computed } from 'vue'
import { Label } from '@/components/ui/label'

const props = defineProps({
  modelValue: { type: [String, Number, null], default: '' },
  options: { type: Array, default: () => [] },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Select...' },
  error: { type: String, default: '' },
  name: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const id = computed(() => 'sel-' + Math.random().toString(36).slice(2, 8))
</script>

<template>
  <div class="space-y-1.5">
    <Label v-if="label" :for="id">
      {{ label }}
      <span v-if="required" class="text-destructive">*</span>
    </Label>
    <select
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      :class="error ? 'border-destructive' : ''"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
    <p v-if="error" class="text-xs text-destructive">{{ error }}</p>
  </div>
</template>
