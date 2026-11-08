<script setup>
import { computed } from 'vue'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ChevronDown, X } from 'lucide-vue-next'

const props = defineProps({
  modelValue: { type: [String, Number, Array, null], default: '' },
  field: { type: Object, default: null },
  options: { type: [Array, Object], default: () => [] },
  multiple: { type: Boolean, default: false },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Select...' },
  error: { type: [String, Array], default: '' },
  name: { type: String, default: '' },
  // async option loading state — the parent (CrudAction) reports whether the
  // pre-requisite request is in flight / failed so a select never shows a
  // silent "No options available" while the real cause is a 401/403/422.
  loading: { type: Boolean, default: false },
  loadError: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'retry'])

// Resolve the option list for this field from the whole pre-requisite payload.
const resolved = computed(() => {
  const raw = Array.isArray(props.options) ? props.options : findOptions(props.options || {})
  return normalize(raw)
})

function findOptions(payload) {
  const fname = props.field?.n || props.name
  if (!fname || !payload || typeof payload !== 'object') return []
  // Common shapes: { selects: { fname: [...] } }, { fname: [...] }, { lists: {...} }
  const groups = [payload.selects, payload.lists, payload.options, payload]
  // The backend mixes plural/singular keys against the field name:
  //   field session  -> payload.sessions   (PeriodService preRequisite)
  //   field seeders  -> payload.seeder     (PeriodService preRequisite, singular!)
  //   field department -> payload.departments (ProgramService preRequisite)
  // NON-empty arrays win over empty ones (config/pre-requisite may carry
  // empty arrays that must not shadow real option lists).
  const plural = fname.endsWith('s') ? fname : fname + 's'
  const singular = fname.endsWith('s') ? fname.slice(0, -1) : null
  let fallback = null
  for (const g of groups) {
    if (!g || typeof g !== 'object') continue
    for (const key of [fname, plural, singular]) {
      if (key === null || !Array.isArray(g[key])) continue
      if (g[key].length) return g[key]
      if (!fallback) fallback = g[key]
    }
  }
  // fuzzy: key containing the field name
  for (const g of groups) {
    if (g && typeof g === 'object') {
      for (const [k, v] of Object.entries(g)) {
        if (Array.isArray(v) && (k === fname || k.endsWith(fname) || fname.endsWith(k))) {
          if (v.length) return v
          if (!fallback) fallback = v
        }
      }
    }
  }
  return fallback || []
}

function normalize(list) {
  return (list || []).map((o) => {
    if (o === null || o === undefined) return { value: '', label: '' }
    if (typeof o !== 'object') return { value: o, label: String(o) }
    const value = o.value ?? o.uuid ?? o.id ?? o.code ?? o.name ?? ''
    const label = o.label ?? o.name ?? o.title ?? o.display_name ?? String(value)
    return { value, label: String(label) }
  }).filter((o) => o.value !== '' || o.label !== '')
}

const selected = computed(() => (props.multiple ? (props.modelValue || []) : props.modelValue))

function labelFor(value) {
  const found = resolved.value.find((o) => String(o.value) === String(value))
  return found ? found.label : value
}

function toggle(value) {
  if (!props.multiple) {
    emit('update:modelValue', value)
    return
  }
  const arr = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const i = arr.findIndex((v) => String(v) === String(value))
  if (i >= 0) arr.splice(i, 1)
  else arr.push(value)
  emit('update:modelValue', arr)
}

const errText = computed(() => (Array.isArray(props.error) ? props.error[0] : props.error))
</script>

<template>
  <div class="space-y-1.5">
    <Label v-if="label" :for="name || field?.n">
      {{ label }}
      <span v-if="required" class="text-destructive">*</span>
    </Label>

    <!-- multiple: popover with checkboxes -->
    <template v-if="multiple">
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            role="combobox"
            :disabled="disabled"
            class="h-9 w-full justify-between bg-white font-normal"
            :class="errText ? 'border-destructive' : ''"
          >
            <span class="flex flex-wrap items-center gap-1 truncate">
              <template v-if="Array.isArray(selected) && selected.length">
                <Badge v-for="v in selected.slice(0, 3)" :key="v" variant="secondary" class="font-normal">
                  {{ labelFor(v) }}
                </Badge>
                <span v-if="selected.length > 3" class="text-xs text-muted-foreground">+{{ selected.length - 3 }} more</span>
              </template>
              <span v-else class="text-muted-foreground">{{ placeholder }}</span>
            </span>
            <ChevronDown class="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[var(--radix-popover-trigger-width)] max-h-72 overflow-auto p-1" align="start">
          <div v-if="loading" class="px-2 py-3 text-sm text-muted-foreground">Loading options…</div>
          <div v-else-if="!resolved.length" class="px-2 py-3 text-sm text-muted-foreground">
            No options available
            <button
              v-if="loadError"
              type="button"
              class="ml-1 text-xs font-medium text-primary underline"
              @click="emit('retry')"
            >Retry</button>
          </div>
          <label
            v-for="opt in resolved"
            :key="opt.value"
            class="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
          >
            <Checkbox
              :checked="Array.isArray(selected) && selected.some((v) => String(v) === String(opt.value))"
              @update:checked="toggle(opt.value)"
            />
            {{ opt.label }}
          </label>
        </PopoverContent>
      </Popover>
      <div v-if="Array.isArray(selected) && selected.length" class="flex flex-wrap gap-1 pt-1">
        <Badge v-for="v in selected" :key="v" variant="secondary" class="font-normal">
          {{ labelFor(v) }}
          <button type="button" class="ml-1 rounded-full hover:bg-muted" @click="toggle(v)">
            <X class="h-3 w-3" />
          </button>
        </Badge>
      </div>
    </template>

    <!-- single: native select -->
    <template v-else>
      <select
        :id="name || field?.n"
        :value="selected ?? ''"
        :disabled="disabled || loading || (!resolved.length && !loadError)"
        class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        :class="errText || loadError ? 'border-destructive' : ''"
        @change="emit('update:modelValue', $event.target.value || null)"
      >
        <option value="" disabled>
          {{ loading ? 'Loading options…' : (resolved.length ? placeholder : 'No options available') }}
        </option>
        <option v-for="opt in resolved" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
      </select>
      <div v-if="!loading && loadError" class="flex items-center gap-2">
        <p class="text-xs text-amber-600">{{ loadError }}</p>
        <button
          type="button"
          class="text-xs font-medium text-primary underline"
          @click="emit('retry')"
        >Retry</button>
      </div>
    </template>

    <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
  </div>
</template>
