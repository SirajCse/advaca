<script setup>
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import FormSelect from './FormSelect.vue'

const props = defineProps({
  fields: { type: Array, default: () => [] },
  modelValue: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['update:modelValue'])
const form = computed(() => props.modelValue || {})
function set(name, v) {
  emit('update:modelValue', { ...form.value, [name]: v })
}
</script>

<template>
  <div v-if="fields.length" class="space-y-4">
    <div v-for="f in fields" :key="f.uuid || f.name" class="space-y-1.5">
      <label class="text-sm font-medium">{{ f.label || f.name }}</label>
      <FormSelect
        v-if="f.type === 'select' || f.type === 'radio'"
        :options="(f.options || []).map((o) => ({ value: String(o), label: String(o) }))"
        :model-value="String(form[f.name] ?? '')"
        @update:model-value="set(f.name, $event)"
      />
      <Input v-else-if="f.type === 'date'" type="date" :model-value="String(form[f.name] ?? '')" @update:model-value="set(f.name, $event)" />
      <Input v-else :model-value="String(form[f.name] ?? '')" @update:model-value="set(f.name, $event)" />
    </div>
  </div>
</template>
