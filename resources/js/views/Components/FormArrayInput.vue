<script setup>
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { X, Plus } from 'lucide-vue-next'

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Add item' },
  error: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const joined = computed(() => (Array.isArray(props.modelValue) ? props.modelValue.join(', ') : ''))

function onInput(e) {
  const parts = e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
  emit('update:modelValue', parts)
}

function addChip() {
  emit('update:modelValue', [...(props.modelValue || []), ''])
}
function removeChip(i) {
  const next = [...(props.modelValue || [])]
  next.splice(i, 1)
  emit('update:modelValue', next)
}
function setChip(i, v) {
  const next = [...(props.modelValue || [])]
  next[i] = v
  emit('update:modelValue', next)
}
</script>

<template>
  <div class="space-y-1.5">
    <Label v-if="label">
      {{ label }}
      <span v-if="required" class="text-destructive">*</span>
    </Label>
    <div v-if="modelValue && modelValue.length" class="space-y-2">
      <div v-for="(chip, i) in modelValue" :key="i" class="flex items-center gap-2">
        <Input :model-value="chip" :placeholder="placeholder" @update:model-value="setChip(i, $event)" />
        <Button type="button" variant="ghost" size="icon" @click="removeChip(i)">
          <X class="h-4 w-4" />
        </Button>
      </div>
    </div>
    <Button type="button" variant="outline" size="sm" @click="addChip">
      <Plus class="h-4 w-4" />
      Add
    </Button>
    <Input v-if="!modelValue || !modelValue.length" :model-value="joined" placeholder="Comma separated values" @update:model-value="onInput" />
    <p v-if="error" class="text-xs text-destructive">{{ error }}</p>
  </div>
</template>
