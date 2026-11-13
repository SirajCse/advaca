<script setup>
// Layout-driven form field — renders a field definition extracted from the OLD
// APP LIVE DOM (spec/form-layouts.js, regenerated from advacaold.bdi.bd).
// Supported types: input (text/number/email/date/time/password/url/tel/currency),
// textarea, select, radio-group, date, time, switch, checkbox, name-input,
// search-select (select-search), media, custom-field, address-input, autosuggest.
import { computed } from 'vue'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import flatPickr from '@/views/Components/flat-pickr.vue'
import NameInput from '@/views/Components/NameInput.vue'
import CustomField from '@/views/Components/CustomField.vue'
import SearchSelect from '@/views/Components/SearchSelect.vue'
import AddressInput from '@/views/Components/AddressInput.vue'
import RichEditor from '@/views/Components/RichEditor.vue'

const props = defineProps({
  field: { type: Object, required: true },     // layout field def
  modelValue: { type: [String, Number, Boolean, Object, Array, null], default: '' },
  error: { type: [String, Array], default: '' },
  disabled: { type: Boolean, default: false },
  preReq: { type: Object, default: () => ({}) },   // pre-requisite payload
  trans: { type: Function, required: true },       // i18n resolver
  initSearch: { type: String, default: '' },       // edit-mode backfill label
})

const emit = defineEmits(['update:modelValue', 'selected'])

// <datalist> id for autosuggest fields (unique per field name)
const autoId = computed(() => `autosuggest-${(props.field.name || 'x').replace(/[^a-z0-9_]/gi, '')}`)
const autoSuggestions = computed(() => {
  const s = props.field.suggestions || props.preReq?.[props.field.optionsKey || ''] || []
  return (Array.isArray(s) ? s : []).slice(0, 30)
})

const label = computed(() => {
  const f = props.field
  if (!f.label) return ''
  const t = props.trans(f.label)
  // "Select :attribute" — the attribute comes from the inner $trans key
  // (old label: global.select with attribute academic.period.period)
  const attr = f.labelAttr ? props.trans(f.labelAttr) : t
  return t.replace(/:attribute/g, attr === t && t.includes(':attribute') ? (f.name ? f.name.replace(/_/g, ' ') : '') : attr).replace(/\s+/g, ' ').trim()
})

const errText = computed(() => (Array.isArray(props.error) ? props.error[0] : props.error))

// custom-field definitions live on the pre-requisite payload (old useCustomFields)
const customFields = computed(() => props.preReq?.customFields || props.preReq?.custom_fields || [])

// ---- option resolution (select / radio-group) ----
const options = computed(() => {
  const f = props.field
  const key = f.optionsKey
  if (!key) return []
  // non-empty arrays win over empty ones (same rule as FormRelationSelect)
  const groups = [props.preReq, props.preReq?.selects, props.preReq?.lists]
  let fallback = null
  for (const g of groups) {
    if (!g || typeof g !== 'object') continue
    const v = g[key]
    if (Array.isArray(v)) {
      if (v.length) return normalize(v, f)
      if (!fallback) fallback = v
    }
  }
  return normalize(fallback || [], f)
})

function normalize(list, f) {
  const lp = f.labelProp || 'label'
  const vp = f.valueProp || 'value'
  return (list || []).map((o) => {
    if (o === null || o === undefined) return { value: '', label: '' }
    if (typeof o !== 'object') return { value: o, label: String(o) }
    const value = o[vp] ?? o.uuid ?? o.id ?? o.value ?? o.name ?? ''
    let lab = o[lp] ?? o.name ?? o.title ?? o.label ?? String(value)
    // period-style rows carry their session for display: "2025-26 (2025-26)"
    if (o.session && o.session.name && lp === 'name') lab = `${o.name} (${o.session.name})`
    return { value, label: String(lab) }
  }).filter((o) => o.value !== '' || o.label !== '')
}

const isNumeric = computed(() => ['number'].includes(props.field.inputType))
const inputValue = computed({
  get: () => (props.modelValue === null || props.modelValue === undefined ? '' : props.modelValue),
  set: (v) => emit('update:modelValue', v),
})

// name-input binds an object of name parts
const nameParts = computed(() => {
  const v = props.modelValue
  if (v && typeof v === 'object') return v
  return {}
})
function setNamePart(part, val) {
  emit('update:modelValue', { ...nameParts.value, [part]: val })
}

function onCheck(checked) {
  emit('update:modelValue', checked === true)
}
</script>

<template>
  <div class="space-y-1.5">
    <!-- name-input: compound first/middle/third/last -->
    <template v-if="field.type === 'name-input'">
      <Label>{{ label || trans('student.props.name') }}</Label>
      <NameInput
        :model-value="nameParts"
        :label="label || trans('student.props.name')"
        @update:model-value="(v) => emit('update:modelValue', v)"
      />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- search select (old select-search) -->
    <template v-else-if="field.type === 'search-select'">
      <SearchSelect
        :model-value="modelValue"
        :label="label"
        :name="field.name"
        :required="field.required"
        :disabled="disabled"
        :endpoint="field.endpoint || ''"
        :params="field.searchParams || {}"
        :label-prop="field.labelProp || 'name'"
        :value-prop="field.valueProp || 'uuid'"
        :display-format="field.displayFormat || ''"
        :init-search="initSearch || field.initSearch || ''"
        :placeholder="field.placeholder ? trans(field.placeholder).replace(':attribute', label) : 'Type to search...'"
        :error="error"
        @update:model-value="(v) => emit('update:modelValue', v)"
        @selected="(row) => emit('selected', row)"
      />
    </template>

    <!-- select -->
    <template v-else-if="field.type === 'select'">
      <Label :for="field.name">
        {{ label }}
        <span v-if="field.required" class="text-destructive">*</span>
      </Label>
      <select
        :id="field.name"
        :value="modelValue"
        :disabled="disabled"
        class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        :class="errText ? 'border-destructive' : ''"
        @change="emit('update:modelValue', $event.target.value)"
      >
        <option value="" :disabled="field.required">{{ options.length ? label : 'No options available' }}</option>
        <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <p v-if="!options.length" class="text-xs text-muted-foreground">
        No options available
      </p>
      <p v-else-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- radio group (horizontal) -->
    <template v-else-if="field.type === 'radio-group'">
      <Label>{{ label }}</Label>
      <RadioGroup
        :model-value="String(modelValue ?? '')"
        class="flex flex-wrap items-center gap-4"
        :disabled="disabled"
        @update:model-value="(v) => emit('update:modelValue', v)"
      >
        <div v-for="o in options" :key="o.value" class="flex items-center gap-2">
          <RadioGroupItem :id="`${field.name}-${o.value}`" :value="o.value" />
          <Label :for="`${field.name}-${o.value}`" class="cursor-pointer font-normal">{{ o.label }}</Label>
        </div>
      </RadioGroup>
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- date -->
    <template v-else-if="field.type === 'date'">
      <Label :for="field.name">
        {{ label }}
        <span v-if="field.required" class="text-destructive">*</span>
      </Label>
      <flat-pickr
        :model-value="modelValue || ''"
        :config="{ dateFormat: 'Y-m-d' }"
        :placeholder="label"
        @update:model-value="(v) => emit('update:modelValue', v)"
      />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- time -->
    <template v-else-if="field.type === 'time'">
      <Label :for="field.name">
        {{ label }}
        <span v-if="field.required" class="text-destructive">*</span>
      </Label>
      <Input :id="field.name" type="time" :model-value="modelValue || ''" :disabled="disabled" @update:model-value="(v) => emit('update:modelValue', v)" />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- switch -->
    <template v-else-if="field.type === 'switch'">
      <div class="flex items-center gap-2">
        <Switch :checked="!!modelValue" :disabled="disabled" @update:checked="(v) => emit('update:modelValue', v)" />
        <Label>{{ label }}</Label>
      </div>
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- checkbox -->
    <template v-else-if="field.type === 'checkbox'">
      <div class="flex items-center gap-2">
        <Checkbox :id="field.name" :checked="!!modelValue" :disabled="disabled" @update:checked="onCheck" />
        <Label :for="field.name">{{ label }}</Label>
      </div>
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- media / file -->
    <template v-else-if="field.type === 'media'">
      <Label :for="field.name">{{ label }}</Label>
      <Input :id="field.name" type="file" :disabled="disabled" @change="emit('update:modelValue', $event.target.files?.[0] || '')" />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- custom fields -->
    <template v-else-if="field.type === 'custom-field'">
      <CustomField
        :fields="customFields"
        :model-value="modelValue && typeof modelValue === 'object' ? modelValue : {}"
        @update:model-value="(v) => emit('update:modelValue', v)"
      />
    </template>

    <!-- textarea -->
    <template v-else-if="field.type === 'textarea'">
      <Label :for="field.name">
        {{ label }}
        <span v-if="field.required" class="text-destructive">*</span>
      </Label>
      <Textarea :id="field.name" :model-value="modelValue || ''" :disabled="disabled" rows="3" @update:model-value="(v) => emit('update:modelValue', v)" />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- address-input: compound address (line1/line2/city/state/zip/country) -->
    <template v-else-if="field.type === 'address-input'">
      <AddressInput
        :model-value="modelValue && typeof modelValue === 'object' ? modelValue : {}"
        :disabled="disabled"
        @update:model-value="(v) => emit('update:modelValue', v)"
      />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- rich text editor (old app QuillEditor — Blog/News/Communication content) -->
    <template v-else-if="field.type === 'editor'">
      <Label v-if="label">{{ label }}</Label>
      <RichEditor
        :model-value="modelValue || ''"
        :disabled="disabled"
        @update:model-value="(v) => emit('update:modelValue', v)"
      />
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- autosuggest: free text with suggestions (old BaseAutosuggest) -->
    <template v-else-if="field.type === 'autosuggest'">
      <Label :for="field.name">
        {{ label }}
        <span v-if="field.required" class="text-destructive">*</span>
      </Label>
      <Input
        :id="field.name"
        :list="autoId"
        :model-value="inputValue"
        :disabled="disabled"
        :placeholder="field.placeholder ? trans(field.placeholder) : ''"
        class="h-9"
        :class="errText ? 'border-destructive' : ''"
        @update:model-value="(v) => emit('update:modelValue', v)"
      />
      <datalist :id="autoId">
        <option v-for="s in autoSuggestions" :key="typeof s === 'string' ? s : s.value" :value="typeof s === 'string' ? s : s.value" />
      </datalist>
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>

    <!-- default: text/number/email/date/time/password input (inputType passthrough) -->
    <template v-else>
      <Label :for="field.name">
        {{ label }}
        <span v-if="field.required" class="text-destructive">*</span>
      </Label>
      <div class="relative">
        <span v-if="field.currency" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
        <Input
          :id="field.name"
          :type="['number', 'email', 'password', 'date', 'time', 'url', 'tel'].includes(field.inputType) ? field.inputType : 'text'"
          :model-value="inputValue"
          :disabled="disabled"
          :placeholder="field.placeholder ? trans(field.placeholder) : ''"
          class="h-9"
          :class="[field.currency ? 'pl-7' : '', errText ? 'border-destructive' : '']"
          @update:model-value="(v) => emit('update:modelValue', isNumeric ? (v === '' ? '' : Number(v)) : v)"
        />
      </div>
      <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
    </template>
  </div>
</template>
