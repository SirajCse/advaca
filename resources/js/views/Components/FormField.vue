<template>
  <div class="w-full">
    <Label :for="field.n" class="mb-1.5 block text-sm font-medium text-foreground">
      {{ field.l || field.n }}
      <span v-if="field.req" class="text-destructive">*</span>
    </Label>

    <!-- text / email / number / password -->
    <template v-if="['text','email','number','password'].includes(type)">
      <Input
        :id="field.n"
        :type="inputType"
        :model-value="modelValue"
        :placeholder="placeholder"
        :maxlength="field.max ? Number(field.max) : undefined"
        :disabled="disabled"
        :class="inputClass"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </template>

    <!-- textarea -->
    <Textarea
      v-else-if="type === 'textarea'"
      :id="field.n"
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      rows="3"
      :class="inputClass"
      @update:model-value="$emit('update:modelValue', $event)"
    />

    <!-- checkbox -->
    <div v-else-if="type === 'checkbox'" class="flex items-center gap-2 py-1">
      <Checkbox
        :id="field.n"
        :checked="!!modelValue"
        :disabled="disabled"
        @update:checked="$emit('update:modelValue', $event)"
      />
      <Label :for="field.n" class="text-sm text-muted-foreground">{{ field.l }}</Label>
    </div>

    <!-- static select with in: options -->
    <Select
      v-else-if="type === 'select' && field.opts && field.opts.length"
      :model-value="modelValue ?? ''"
      :disabled="disabled"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <SelectTrigger :id="field.n" :class="inputClass">
        <SelectValue :placeholder="placeholder || `Select ${field.l}`" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="opt in field.opts" :key="opt" :value="opt">{{ humanize(opt) }}</SelectItem>
      </SelectContent>
    </Select>

    <!-- select backed by pre-requisite data -->
    <template v-else-if="type === 'select' || type === 'multiselect'">
      <FormRelationSelect
        :model-value="modelValue"
        :field="field"
        :options="preReqOptions"
        :multiple="type === 'multiselect'"
        :disabled="disabled"
        :placeholder="placeholder || `Select ${field.l}`"
        :error="error"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </template>

    <!-- date -->
    <Input
      v-else-if="type === 'date'"
      :id="field.n"
      type="date"
      :model-value="modelValue"
      :disabled="disabled"
      :class="inputClass"
      @update:model-value="$emit('update:modelValue', $event)"
    />

    <!-- file -->
    <Input
      v-else-if="type === 'file'"
      :id="field.n"
      type="file"
      :disabled="disabled"
      :class="inputClass"
      @change="$emit('update:modelValue', $event.target.files[0])"
    />

    <!-- fallback -->
    <Input
      v-else
      :id="field.n"
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClass"
      @update:model-value="$emit('update:modelValue', $event)"
    />

    <p v-if="error" class="mt-1 text-xs text-destructive">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-xs text-muted-foreground">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import FormRelationSelect from './FormRelationSelect.vue'

const props = defineProps({
  field: { type: Object, required: true },
  modelValue: { type: [String, Number, Boolean, Array], default: '' },
  error: { type: [String, Array], default: '' },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  hint: { type: String, default: '' },
  preReqOptions: { type: Object, default: () => ({}) },
})
defineEmits(['update:modelValue'])

const type = computed(() => props.field.t || 'text')
const inputType = computed(() => (type.value === 'number' ? 'number' : type.value))
const inputClass = computed(() => [
  'bg-white',
  props.error ? 'border-destructive focus-visible:ring-destructive' : '',
])

function humanize(v) {
  return String(v).replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}
</script>
