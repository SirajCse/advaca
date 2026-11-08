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

    <!-- rich text editor (Quill, same as the original frontend) -->
    <RichEditor
      v-else-if="type === 'editor'"
      :id="field.n"
      :model-value="modelValue"
      :placeholder="placeholder || `Write ${field.l || field.n}`"
      :disabled="disabled"
      @update:model-value="$emit('update:modelValue', $event)"
    />

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
        :loading="preReqLoading"
        :load-error="preReqError"
        @update:model-value="$emit('update:modelValue', $event)"
        @retry="$emit('retry-options')"
      />
    </template>

    <!-- time -->
    <Input
      v-else-if="type === 'time'"
      :id="field.n"
      type="time"
      step="1"
      :model-value="modelValue"
      :disabled="disabled"
      :class="inputClass"
      @update:model-value="$emit('update:modelValue', $event)"
    />

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

    <!-- repeat (array of row objects — e.g. Class Timing sessions,
         backend: sessions.*.name / sessions.*.code / sessions.*.is_break /
         sessions.*.start_time / sessions.*.end_time) -->
    <div v-else-if="type === 'repeat'" class="space-y-3">
      <div
        v-for="(row, idx) in rows"
        :key="idx"
        class="rounded-md border bg-muted/20 p-3"
      >
        <div class="mb-2 flex items-center justify-between">
          <span class="text-xs font-medium text-muted-foreground">#{{ idx + 1 }}</span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            class="h-7 px-2 text-destructive"
            :disabled="disabled"
            @click="removeRow(idx)"
          >
            <Trash2 class="h-3.5 w-3.5" />
          </Button>
        </div>
        <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <FormField
            v-for="rf in rowFields"
            :key="rf.n"
            :field="rf"
            :model-value="row[rf.n]"
            :disabled="disabled"
            @update:model-value="setCell(idx, rf.n, $event)"
          />
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        :disabled="disabled"
        @click="addRow"
      >
        <Plus class="mr-1.5 h-4 w-4" /> Add Row
      </Button>
    </div>

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
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-vue-next'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import FormRelationSelect from './FormRelationSelect.vue'
import RichEditor from './RichEditor.vue'

const props = defineProps({
  field: { type: Object, required: true },
  modelValue: { type: [String, Number, Boolean, Array], default: '' },
  error: { type: [String, Array], default: '' },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  hint: { type: String, default: '' },
  preReqOptions: { type: Object, default: () => ({}) },
  preReqLoading: { type: Boolean, default: false },
  preReqError: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'retry-options'])

const type = computed(() => props.field.t || 'text')
const inputType = computed(() => (type.value === 'number' ? 'number' : type.value))

// --- repeat rows ---
const rows = computed(() => (Array.isArray(props.modelValue) ? props.modelValue : []))
const rowFields = computed(() => props.field.rowFields || [])

function blankRow() {
  const r = {}
  for (const rf of rowFields.value) r[rf.n] = rf.t === 'checkbox' ? false : ''
  return r
}

function addRow() {
  emit('update:modelValue', [...rows.value, blankRow()])
}

function removeRow(idx) {
  emit('update:modelValue', rows.value.filter((_, i) => i !== idx))
}

function setCell(idx, key, value) {
  emit(
    'update:modelValue',
    rows.value.map((r, i) => (i === idx ? { ...r, [key]: value } : r)),
  )
}
const inputClass = computed(() => [
  'bg-white',
  props.error ? 'border-destructive focus-visible:ring-destructive' : '',
])

function humanize(v) {
  return String(v).replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}
</script>
