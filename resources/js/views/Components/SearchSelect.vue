<script setup>
// Async search select — mirrors the old app's BaseSelectSearch: debounced query
// against a list/summary endpoint, with formatted option display
// (e.g. "{name} - {codeNumber} ({contactNumber})") and init-search backfill.
import { computed, ref, watch } from 'vue'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronDown, Loader2, Search, X } from 'lucide-vue-next'
import http from '@/lib/http'

const props = defineProps({
  modelValue: { type: [String, Number, Object, null], default: '' },
  label: { type: String, default: '' },
  name: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Type to search...' },
  endpoint: { type: String, required: true },   // e.g. /app/students/summary
  params: { type: Object, default: () => ({}) },
  labelProp: { type: String, default: 'name' },
  valueProp: { type: String, default: 'uuid' },
  displayFormat: { type: String, default: '' }, // "{name} - {codeNumber} ({contactNumber})"
  initSearch: { type: String, default: '' },    // edit-mode backfill text
  error: { type: [String, Array], default: '' },
})

const emit = defineEmits(['update:modelValue', 'selected'])

const open = ref(false)
const query = ref('')
const rows = ref([])
const loading = ref(false)
const loadError = ref('')
const selectedRow = ref(null)
let seq = 0

function fmt(row) {
  if (!row) return ''
  if (props.displayFormat) {
    return props.displayFormat.replace(/\{(\w+)\}/g, (_, k) => {
      const v = row[k]
      const inner = v && typeof v === 'object' ? (v.value ?? v.formatted ?? v.name ?? '') : v
      return inner === undefined || inner === null ? '' : String(inner)
    }).trim()
  }
  return String(row[props.labelProp] ?? row.name ?? row[props.valueProp] ?? '')
}

async function search(q) {
  const id = ++seq
  loading.value = true
  loadError.value = ''
  try {
    const { data } = await http.get(props.endpoint, {
      params: { query: q || '', ...props.params },
    })
    if (id !== seq) return
    const list = Array.isArray(data) ? data : (data?.data || [])
    rows.value = list.slice(0, 30)
    if (!list.length) loadError.value = 'No matches found'
  } catch (e) {
    if (id !== seq) return
    rows.value = []
    loadError.value = e?.response?.data?.message || (e?.response ? `search failed (HTTP ${e.response.status})` : 'search failed')
  } finally {
    if (id === seq) loading.value = false
  }
}

let timer = null
watch(query, (q) => {
  clearTimeout(timer)
  timer = setTimeout(() => search(q), 320)
})
watch(open, (v) => { if (v && !rows.value.length) search('') })

// edit-mode backfill: resolve current uuid to a row so the label shows
search(props.initSearch).then(() => {
  if (props.initSearch && props.modelValue && !selectedRow.value) {
    selectedRow.value = rows.value.find((r) => String(r[props.valueProp]) === String(props.modelValue)) || null
    if (!selectedRow.value && rows.value.length === 1) selectedRow.value = rows.value[0]
  }
})

function pick(row) {
  selectedRow.value = row
  emit('update:modelValue', row[props.valueProp])
  emit('selected', row)
  open.value = false
}

function clear() {
  selectedRow.value = null
  emit('update:modelValue', '')
}

const errText = computed(() => (Array.isArray(props.error) ? props.error[0] : props.error))
const display = computed(() => (selectedRow.value ? fmt(selectedRow.value) : ''))
</script>

<template>
  <div class="space-y-1.5">
    <Label v-if="label" :for="name">
      {{ label }}
      <span v-if="required" class="text-destructive">*</span>
    </Label>

    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          role="combobox"
          :disabled="disabled"
          class="h-9 w-full justify-between bg-white px-3 font-normal"
          :class="errText ? 'border-destructive' : ''"
        >
          <span class="truncate" :class="display ? '' : 'text-muted-foreground'">
            {{ display || placeholder }}
          </span>
          <span class="flex items-center gap-1">
            <X v-if="selectedRow" class="h-3.5 w-3.5 opacity-60 hover:opacity-100" @click.stop.prevent="clear" />
            <ChevronDown class="h-4 w-4 shrink-0 opacity-50" />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <div class="flex items-center gap-2 border-b px-3 py-2">
          <Search class="h-4 w-4 shrink-0 opacity-50" />
          <Input v-model="query" class="h-8 border-0 shadow-none focus-visible:ring-0" placeholder="Search..." />
          <Loader2 v-if="loading" class="h-4 w-4 shrink-0 animate-spin opacity-50" />
        </div>
        <div class="max-h-64 overflow-auto p-1">
          <div v-if="loadError && !rows.length" class="px-2 py-3 text-sm text-muted-foreground">{{ loadError }}</div>
          <button
            v-for="row in rows"
            :key="row[props.valueProp]"
            type="button"
            class="block w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent"
            @click="pick(row)"
          >
            {{ fmt(row) }}
          </button>
        </div>
      </PopoverContent>
    </Popover>
    <p v-if="errText" class="text-xs text-destructive">{{ errText }}</p>
  </div>
</template>
