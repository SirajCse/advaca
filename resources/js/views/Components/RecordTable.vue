<script setup>
// Record-table for the old app's repeating row groups (fields sharing a
// `rowKey`, e.g. Exam/Assessment records, Inventory items, Finance fee-head
// components, Student/Registration guardians). The live form renders these as
// either a TABLE with column headers (scalar rows) or stacked BLOCKS (rows
// containing radios/selects/searches, e.g. guardians). Both shapes submit the
// same payload: form[rowKey] = [ {field: value, ...}, ... ].
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, X } from 'lucide-vue-next'
import LayoutField from '@/views/Components/LayoutField.vue'

const props = defineProps({
  rowKey: { type: String, required: true },   // payload key, e.g. "records"
  fields: { type: Array, required: true },    // field defs sharing rowKey
  rows: { type: Array, required: true },      // current value array
  errors: { type: Object, default: () => ({}) },
  disabled: { type: Boolean, default: false },
  preReq: { type: Object, default: () => ({}) },
  trans: { type: Function, required: true },
  addLabel: { type: String, default: '' },
})

const emit = defineEmits(['update:rows', 'selected'])

// block style when any field is an option widget (radio/select/search) —
// the old app renders guardian-style groups as stacked blocks, scalar groups
// (name/code/max_mark...) as a column table.
const isBlock = computed(() =>
  props.fields.some((f) => ['radio-group', 'select', 'search-select', 'name-input', 'address-input', 'custom-field'].includes(f.type)),
)

const scalarFields = computed(() => props.fields.filter((f) => f.type !== 'info' && f.type !== 'button' && f.type !== 'address-input' && f.type !== 'custom-field'))

function blankRow() {
  const row = {}
  for (const f of props.fields) {
    if (!f.name) continue
    if (f.type === 'switch' || f.type === 'checkbox') row[f.name] = false
    else if (f.type === 'name-input') row[f.name] = {}
    else row[f.name] = ''
  }
  return row
}

function addRow() {
  emit('update:rows', [...(props.rows || []), blankRow()])
}

function removeRow(i) {
  const next = [...(props.rows || [])]
  next.splice(i, 1)
  emit('update:rows', next)
}

function setRow(i, row) {
  const next = [...(props.rows || [])]
  next[i] = row
  emit('update:rows', next)
}

function fieldVisible(f, row) {
  const conds = f.whenAny || (f.when ? [f.when] : [])
  if (!conds.length) return true
  return conds.some((w) => {
    const m = String(w).match(/^([A-Za-z0-9_]+)==(.*)$/)
    if (!m) return true
    return String(row[m[1]] ?? '') === String(m[2])
  })
}

function colLabel(f) {
  if (!f.label) return f.name
  const t = props.trans(f.label)
  const attr = f.labelAttr ? props.trans(f.labelAttr) : t
  return t.replace(/:attribute/g, attr === t && t.includes(':attribute') ? (f.name || '').replace(/_/g, ' ') : attr).replace(/\s+/g, ' ').trim()
}
</script>

<template>
  <div class="space-y-3">
    <!-- scalar rows: compact column table -->
    <div v-if="!isBlock" class="overflow-x-auto rounded-lg border">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b bg-muted/50">
            <th v-for="f in scalarFields" :key="f.name" class="px-3 py-2 text-left font-medium">
              {{ colLabel(f) }}
            </th>
            <th class="w-10 px-2 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, ri) in rows" :key="ri" class="border-b last:border-b-0">
            <td v-for="f in scalarFields" :key="f.name" class="px-3 py-2 align-top">
              <LayoutField
                :field="f"
                :model-value="row[f.name]"
                :error="errors[`${rowKey}.${ri}.${f.name}`]"
                :disabled="disabled"
                :pre-req="preReq"
                :trans="trans"
                @update:model-value="(v) => setRow(ri, { ...row, [f.name]: v })"
                @selected="(r) => emit('selected', { index: ri, field: f.name, row: r })"
              />
            </td>
            <td class="px-2 py-2 text-right align-top">
              <Button type="button" variant="ghost" size="icon" class="text-destructive" :disabled="disabled" @click="removeRow(ri)">
                <X class="h-4 w-4" />
              </Button>
            </td>
          </tr>
          <tr v-if="!rows || !rows.length">
            <td :colspan="scalarFields.length + 1" class="px-3 py-3 text-center text-muted-foreground">
              —
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- option-widget rows: stacked blocks (guardians-style) -->
    <template v-else>
      <div v-for="(row, ri) in rows" :key="ri" class="relative rounded-lg border p-4">
        <Button
          v-if="rows.length > 1"
          type="button"
          variant="ghost"
          size="icon"
          class="absolute right-2 top-2 h-7 w-7 text-destructive"
          :disabled="disabled"
          @click="removeRow(ri)"
        >
          <X class="h-4 w-4" />
        </Button>
        <div class="grid gap-4 pr-8 sm:grid-cols-2 xl:grid-cols-3">
          <template v-for="f in fields" :key="(f.name || 'anon') + ri">
            <div v-if="f.type !== 'info' && f.type !== 'button' && fieldVisible(f, row)">
              <LayoutField
                :field="{ ...f, when: null, whenAny: null }"
                :model-value="f.name ? row[f.name] : undefined"
                :error="errors[`${rowKey}.${ri}.${f.name}`]"
                :disabled="disabled"
                :pre-req="preReq"
                :trans="trans"
                @update:model-value="f.name ? setRow(ri, { ...row, [f.name]: v }) : null"
                @selected="(r) => emit('selected', { index: ri, field: f.name, row: r })"
              />
            </div>
          </template>
        </div>
      </div>
    </template>

    <div class="flex justify-end">
      <Button type="button" variant="secondary" size="sm" :disabled="disabled" @click="addRow">
        <Plus class="mr-1.5 h-4 w-4" />
        {{ addLabel || 'Add Row' }}
      </Button>
    </div>
  </div>
</template>
