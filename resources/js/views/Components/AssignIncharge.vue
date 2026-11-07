<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  options: { type: Array, default: () => [] },
  label: { type: String, default: 'Assign incharge' },
})
const emit = defineEmits(['update:modelValue'])
const selected = computed(() => (Array.isArray(props.modelValue) ? props.modelValue : []))
</script>

<template>
  <div class="space-y-1.5">
    <label class="text-sm font-medium">{{ label }}</label>
    <select
      multiple
      :value="selected"
      class="min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm"
      @change="(e) => emit('update:modelValue', Array.from(e.target.selectedOptions).map((o) => o.value))"
    >
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
  </div>
</template>
