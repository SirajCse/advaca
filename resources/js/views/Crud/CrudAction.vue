<template>
  <div class="space-y-4">
    <PageHeader :title="pageTitle" :navs="navs">
      <template #default>
        <Button variant="outline" size="sm" @click="goList">
          <ListIcon class="mr-1.5 h-4 w-4" /> List all {{ listLabel }}
        </Button>
      </template>
    </PageHeader>

    <ParentTransition :visibility="initialized">
      <FormAction
        v-model:keep-adding="keepAdding"
        :processing="processing"
        :is-create="isCreate"
        submit-label="Save"
        @submit="submit"
        @reset="resetForm"
      >
        <Alert v-if="loadNotice" variant="destructive" class="mb-4">
          <AlertDescription>{{ loadNotice }}</AlertDescription>
        </Alert>

        <!-- ================= LAYOUT MODE (live old-app fieldset structure) ================= -->
        <template v-if="layout">
          <Card
            v-for="(fs, fi) in visibleLayout"
            :key="fi"
            class="mb-5"
          >
            <CardHeader v-if="fs.legend && fs.plain.length">
              <CardTitle>{{ trans(fs.legend) }}</CardTitle>
              <CardDescription v-if="fs.repeat && fs.fields.length">
                {{ repeatHint }}
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <!-- plain grid fields of this fieldset -->
              <div v-if="fs.plain.length" class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <template v-for="f in fs.plain" :key="(f.name || 'anon') + fi">
                  <div v-if="renderPlainField(f)">
                    <LayoutField
                      v-model="form[f.name]"
                      :field="f"
                      :error="fieldErrors[f.name]"
                      :disabled="processing"
                      :pre-req="preReq"
                      :trans="trans"
                      :init-search="initSearchFor(f)"
                      @selected="(row) => onOptionSelected(f, row)"
                    />
                    <div
                      v-if="isCourseField(f) && courseInfoText"
                      class="mt-1.5 text-sm"
                      :class="courseInfoOk ? 'text-primary dark:text-gray-400' : 'text-destructive'"
                    >
                      {{ courseInfoText }}
                    </div>
                  </div>
                </template>
              </div>

              <!-- legacy repeat fieldset (rows array keyed by fs.repeat) -->
              <template v-if="fs.repeat">
                <div
                  v-for="(row, ri) in form[fs.repeat]"
                  :key="ri"
                  class="rounded-lg border p-4"
                >
                  <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <template v-for="f in rowVisibleFields(fs, row)" :key="f.name">
                      <div>
                        <div v-if="ri === rowFirstNamedIndex(fs) && fs.fields.length > 1" class="mb-1 flex items-center justify-between">
                          <span class="text-sm font-medium">{{ fs.legend ? trans(fs.legend) : '' }} #{{ ri + 1 }}</span>
                          <button
                            type="button"
                            class="text-destructive hover:opacity-80"
                            :title="trans('global.remove') !== 'global.remove' ? trans('global.remove') : 'Remove'"
                            @click="removeRow(fs, ri)"
                          >
                            <XCircleIcon class="h-4 w-4" />
                          </button>
                        </div>
                        <LayoutField
                          v-model="row[f.name]"
                          :field="f"
                          :error="fieldErrors[`${fs.repeat}.${ri}.${f.name}`]"
                          :disabled="processing"
                          :pre-req="preReq"
                          :trans="trans"
                        />
                      </div>
                    </template>
                  </div>
                </div>
                <div class="flex justify-end">
                  <Button type="button" variant="secondary" size="sm" :disabled="processing" @click="addRow(fs)">
                    <PlusIcon class="mr-1.5 h-4 w-4" />
                    {{ trans('global.add').replace(':attribute', fs.legend ? trans(fs.legend) : '') }}
                  </Button>
                </div>
              </template>

              <!-- record-table row groups (fields sharing rowKey — live old-app pattern) -->
              <template v-for="(group, gk) in fs.rowGroups" :key="gk">
                <div v-if="group.fields.some((f) => rowGroupFieldVisible(f))" class="pt-2">
                  <h3 v-if="groupTitle(group)" class="mb-2 text-sm font-semibold">
                    {{ groupTitle(group) }}
                  </h3>
                  <RecordTable
                    :row-key="group.rowKey"
                    :fields="group.fields"
                    :rows="form[group.rowKey] || []"
                    :errors="fieldErrors"
                    :disabled="processing"
                    :pre-req="preReq"
                    :trans="trans"
                    :add-label="groupAddLabel(group)"
                    @update:rows="(rows) => (form[group.rowKey] = rows)"
                    @selected="(p) => onRowSelected(group, p)"
                  />
                </div>
              </template>
            </CardContent>
          </Card>
        </template>

        <!-- ================= FALLBACK FLAT MODE (entities without extracted layout) ================= -->
        <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FormField
            v-for="f in visibleFields"
            :key="f.n"
            v-model="form[f.n]"
            :field="f"
            :error="fieldErrors[f.n]"
            :disabled="processing"
            :pre-req-options="preReq"
            :pre-req-loading="preReqLoading"
            :pre-req-error="preReqError"
            @retry-options="loadPreRequisite"
          />
        </div>
        <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
      </FormAction>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { List as ListIcon, Plus as PlusIcon } from 'lucide-vue-next'
import { Alert, AlertDescription } from '@/components/ui/alert'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormAction from '@/views/Components/FormAction.vue'
import FormField from '@/views/Components/FormField.vue'
import LayoutField from '@/views/Components/LayoutField.vue'
import RecordTable from '@/views/Components/RecordTable.vue'
import XCircleIcon from '@/views/Components/XCircleIcon.vue'
import { trans } from '@/spec/lang'
import { formLayouts } from '@/spec/form-layouts'
import { createCrudApi } from '@/api/crud'
import { resolveKey } from '@/lib/helpers'
import http from '@/lib/http'

const route = useRoute()
const router = useRouter()

const entity = computed(() => route.meta.entity || {})
// scoped sub-entity (e.g. /students/:uuid/custom-fees/create): endpoints carry
// {uuid} (parent, from route params) and {muuid} (own record id)
const scoped = computed(() => route.meta.scoped || null)
const recordParam = computed(() => scoped.value?.recordParam || 'uuid')
const isCreate = computed(() => !route.params[recordParam.value])
const parentUuid = computed(() => (scoped.value ? route.params[scoped.value.parentParam] : undefined))
const entityKey = computed(() => route.meta.entityKey || '')
const layout = computed(() => formLayouts[entityKey.value] || null)
const pageTitle = computed(() => route.meta.pageTitle || `${isCreate.value ? 'Add' : 'Edit'} ${entity.value.label || ''}`.trim())
const listLabel = computed(() => route.meta.singularLabel || entity.value.label || '')

const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const keepAdding = ref(false)
const fieldErrors = ref({})
const preReq = ref({})
const preReqLoading = ref(false)
const preReqError = ref('')
const recordError = ref('')
const selectedCourseRow = ref(null)
const recordRaw = ref(null)
const loadNotice = computed(() => {
  const parts = []
  if (preReqError.value) parts.push(`form options: ${preReqError.value}`)
  if (recordError.value) parts.push(recordError.value)
  return parts.join(' · ')
})

function fillEndpoint(path) {
  if (!path) return path
  if (scoped.value) return path.replace('{uuid}', encodeURIComponent(parentUuid.value ?? ''))
  return path
}

const api = computed(() => createCrudApi({
  index: fillEndpoint(entity.value.endpoints?.index),
  store: fillEndpoint(entity.value.endpoints?.store),
  show: fillEndpoint(entity.value.endpoints?.show),
  update: fillEndpoint(entity.value.endpoints?.update),
  destroy: fillEndpoint(entity.value.endpoints?.destroy),
  preRequisite: fillEndpoint(entity.value.endpoints?.preRequisite),
}))

// ------------------------------------------------------------------
// Fallback lists — keyed by the layout option keys (camelCase, as the old
// pre-requisites serialize them).
// ------------------------------------------------------------------
const FALLBACK_BY_OPTION_KEY = {
  periods: '/app/academic/periods',
  sessions: '/app/academic/sessions',
  departments: '/app/academic/departments',
  programs: '/app/academic/programs',
  programTypes: '/app/academic/program-types',
  divisions: '/app/academic/divisions',
  courses: '/app/academic/courses',
  batches: '/app/academic/batches',
  subjects: '/app/academic/subjects',
  classTimings: '/app/academic/class-timings',
  feeHeads: '/app/finance/fee-heads',
  ledgers: '/app/finance/ledgers',
  paymentMethods: '/app/finance/payment-methods',
  categories: '/app/config/options?category=dialogue',
}
const FALLBACK_LISTS = {
  department: '/app/academic/departments', departments: '/app/academic/departments',
  session: '/app/academic/sessions', sessions: '/app/academic/sessions',
  period: '/app/academic/periods', periods: '/app/academic/periods',
  program: '/app/academic/programs', programs: '/app/academic/programs',
  program_type: '/app/academic/program-types', program_types: '/app/academic/program-types',
  division: '/app/academic/divisions', divisions: '/app/academic/divisions',
  course: '/app/academic/courses', courses: '/app/academic/courses',
  batch: '/app/academic/batches', batches: '/app/academic/batches',
  subject: '/app/academic/subjects', subjects: '/app/academic/subjects',
  class_timing: '/app/academic/class-timings', class_timings: '/app/academic/class-timings',
  fee_head: '/app/finance/fee-heads', fee_heads: '/app/finance/fee-heads',
  ledger: '/app/finance/ledgers', ledgers: '/app/finance/ledgers',
  payment_method: '/app/finance/payment-methods', payment_methods: '/app/finance/payment-methods',
}

function preReqHasKey(fname) {
  const payload = preReq.value || {}
  const plural = fname.endsWith('s') ? fname : fname + 's'
  const singular = fname.endsWith('s') ? fname.slice(0, -1) : null
  const groups = [payload.selects, payload.lists, payload.options, payload]
  for (const g of groups) {
    if (!g || typeof g !== 'object') continue
    if (Array.isArray(g[fname]) && g[fname].length) return true
    if (Array.isArray(g[plural]) && g[plural].length) return true
    if (singular && Array.isArray(g[singular]) && g[singular].length) return true
  }
  return false
}

// ---- layout helpers ----
function whenMatches(when, scope) {
  // scope 'form' evaluates against the top-level form, 'row' against a row
  if (!when) return true
  const m = String(when).match(/^([A-Za-z0-9_]+)==(.*)$/)
  if (!m) return true
  if (m[1] === 'mode') return (m[2] === 'edit') === !isCreate.value
  const src = scope === 'row' ? {} : form
  return String((scope === 'row' ? undefined : form[m[1]]) ?? '') === String(m[2])
}

function evalWhen(when) {
  return whenMatches(when, 'form')
}

// field-level visibility: whenAny (OR list) or single when, against form
function fieldVisible(f) {
  const conds = f.whenAny || (f.when ? [f.when] : [])
  if (!conds.length) return true
  return conds.some((w) => evalWhen(w))
}

function renderPlainField(f) {
  if (!f.name && !['info', 'button'].includes(f.type)) return true
  if (f.type === 'info' || f.type === 'button') return false
  return fieldVisible(f)
}

// row-group field visibility: `when` conditions that reference OTHER row-group
// fields make no sense for the header; the group header stays visible if any
// of its unconditional fields is present or the group has fields at all.
function rowGroupFieldVisible(f) {
  return true
}

const visibleLayout = computed(() => {
  if (!layout.value) return []
  const groups = []
  for (const fs of layout.value.fieldsets || []) {
    if (!evalWhen(fs.when)) continue
    if (!fs.repeat) {
      const all = (fs.fields || [])
      const plain = all.filter((f) => !f.rowKey)
      // group rowKey fields into ordered groups
      const rowGroups = []
      const byKey = new Map()
      for (const f of all) {
        if (!f.rowKey) continue
        if (!byKey.has(f.rowKey)) {
          const g = { rowKey: f.rowKey, fields: [] }
          byKey.set(f.rowKey, g)
          rowGroups.push(g)
        }
        byKey.get(f.rowKey).fields.push(f)
      }
      if (plain.length || rowGroups.length) groups.push({ ...fs, fields: all, plain, rowGroups })
      continue
    }
    groups.push(fs)
  }
  if (layout.value.looseFields?.length) {
    const fields = layout.value.looseFields
    const plain = fields.filter((f) => !f.rowKey)
    const rowGroups = []
    const byKey = new Map()
    for (const f of fields) {
      if (!f.rowKey) continue
      if (!byKey.has(f.rowKey)) {
        const g = { rowKey: f.rowKey, fields: [] }
        byKey.set(f.rowKey, g)
        rowGroups.push(g)
      }
      byKey.get(f.rowKey).fields.push(f)
    }
    if (plain.length || rowGroups.length) groups.push({ legend: null, repeat: null, fields, plain, rowGroups })
  }
  return groups
})

function groupTitle(group) {
  // use the first field's labelAttr or label as the table title hint
  const f = group.fields.find((x) => x.labelAttr || x.label)
  if (!f) return ''
  const t = f.labelAttr ? trans(f.labelAttr) : trans(f.label)
  return t.includes('.') ? '' : t
}

function groupAddLabel(group) {
  return trans('global.add').replace(':attribute', groupTitle(group) || group.rowKey.replace(/_/g, ' '))
}

function onRowSelected(group, payload) {
  // course-info behaviour for registration rows (kept for parity)
}

function rowVisibleFields(fs, row) {
  return (fs.fields || []).filter((f) => {
    if (f.when) {
      const m = String(f.when).match(/^([A-Za-z0-9_]+)==(.*)$/)
      if (m) return String(row[m[1]] ?? '') === String(m[2])
    }
    return true
  })
}
function rowFirstNamedIndex(fs) {
  const i = (fs.fields || []).findIndex((f) => f.name && f.type !== 'radio-group')
  return i === -1 ? 0 : i
}

function blankRow(fs) {
  const row = {}
  for (const f of fs.fields || []) {
    // old defaults: guardian_type starts as "new" (X() factory)
    row[f.name] = f.type === 'radio-group'
      ? (f.name === 'guardian_type' || f.name === 'student_type' ? 'new' : '')
      : (f.type === 'name-input' ? {} : '')
  }
  return row
}
function addRow(fs) {
  if (!fs.repeat) return
  form[fs.repeat].push(blankRow(fs))
}
const repeatHint = computed(() => '')

async function removeRow(fs, index) {
  const res = await Swal.fire({
    icon: 'warning',
    title: trans('global.remove') !== 'global.remove' ? trans('global.remove') : 'Remove this row?',
    showCancelButton: true,
    confirmButtonText: 'Yes, remove',
    cancelButtonText: 'Cancel',
  })
  if (res.isConfirmed) form[fs.repeat].splice(index, 1)
}

// course info line (old FormInfo under the course select)
const COURSE_INFO_ENTITIES = new Set(['Student.Registration'])
function onOptionSelected(field, row) {
  if (field.name === 'course' && COURSE_INFO_ENTITIES.has(entityKey.value)) selectedCourseRow.value = row
}
function initSearchFor(field) {
  if (!isCreate.value && field.type === 'search-select' && recordRaw.value) {
    const v = resolveKey(recordRaw.value, field.name)
    if (v && typeof v === 'object') return v.name ?? v.title ?? ''
  }
  return ''
}
const isCourseField = (f) => f.name === 'course' && COURSE_INFO_ENTITIES.has(entityKey.value)
const courseInfoOk = computed(() => !!selectedCourseRow.value?.enable_registration)
const courseInfoText = computed(() => {
  if (!selectedCourseRow.value) return ''
  const fee = selectedCourseRow.value.registrationFee
  return courseInfoOk.value
    ? trans('academic.course.registration_fee_info').replace(':attribute', fee?.formatted ?? fee ?? '')
    : trans('academic.course.registration_disabled_info')
})

// period change resets course (old onChange handler in create mode)
// (registered AFTER `form` exists — a watch getter runs immediately)

// ------------------------------------------------------------------
// form state
// ------------------------------------------------------------------
function rowGroupKeys(layoutDef) {
  const keys = []
  const seen = new Set()
  for (const group of [...(layoutDef.fieldsets || []), ...(layoutDef.looseFields?.length ? [{ fields: layoutDef.looseFields }] : [])]) {
    for (const f of group.fields || []) {
      if (f.rowKey && !seen.has(f.rowKey)) {
        seen.add(f.rowKey)
        keys.push(f.rowKey)
      }
    }
  }
  return keys
}

function emptyForm() {
  const f = {}
  if (layout.value) {
    // NOTE: iterate the RAW layout (no `when` evaluation) — visibleLayout
    // calls evalWhen which reads `form`, and `form` is being created here.
    const groups = [...(layout.value.fieldsets || [])]
    if (layout.value.looseFields?.length) groups.push({ fields: layout.value.looseFields })
    for (const group of groups) {
      if (group.repeat) { f[group.repeat] = []; continue }
      for (const field of group.fields || []) {
        if (field.rowKey) {
          if (!(field.rowKey in f)) f[field.rowKey] = []
          continue
        }
        if (!field.name || field.type === 'info' || field.type === 'button') continue
        if (field.type === 'checkbox' || field.type === 'switch') f[field.name] = false
        else if (field.type === 'name-input') f[field.name] = {}
        else if (field.type === 'address-input') f[field.name] = {}
        else if (field.type === 'radio-group') f[field.name] = (field.name === 'student_type' || field.name === 'guardian_type') ? 'new' : ''
        else f[field.name] = field.inputType === 'number' || field.currency ? (field.name === 'registration_fee' ? 0 : '') : ''
      }
    }
    return f
  }
  for (const field of entity.value.fields || []) {
    if (field.t === 'checkbox') f[field.n] = false
    else if (field.t === 'multiselect' || field.t === 'array' || field.t === 'repeat') f[field.n] = []
    else f[field.n] = ''
  }
  return f
}

const form = reactive(emptyForm())
watch(entityKey, () => { Object.assign(form, emptyForm()) })

watch(() => form.period, (nv, ov) => {
  if (entityKey.value !== 'Student.Registration' || !isCreate.value) return
  if (nv !== ov && ov !== undefined) {
    selectedCourseRow.value = null
    form.course = ''
  }
})

const visibleFields = computed(() =>
  (entity.value.fields || []).filter((f) => !['id', 'uuid', 'created_at', 'updated_at'].includes(f.n)),
)

async function fillMissingOptionsFromLists() {
  const needed = new Set()
  const addKey = (key, fname) => {
    if (!key) return
    if (preReqHasKey(key)) return
    const path = FALLBACK_BY_OPTION_KEY[key] || FALLBACK_LISTS[fname] || FALLBACK_LISTS[key]
    if (path) needed.add(key + '|' + path)
  }
  if (layout.value) {
    for (const group of [...(layout.value.fieldsets || []), ...(layout.value.looseFields?.length ? [{ fields: layout.value.looseFields }] : [])]) {
      for (const f of group.fields || []) addKey(f.optionsKey, f.name)
    }
  } else {
    for (const f of visibleFields.value) {
      if (!['select', 'multiselect'].includes(f.t)) continue
      if (f.opts && f.opts.length) continue
      const plural = f.n.endsWith('s') ? f.n : f.n + 's'
      const path = FALLBACK_LISTS[f.n] || FALLBACK_LISTS[plural]
      if (path && !preReqHasKey(f.n)) needed.add(f.n + '|' + path)
    }
  }
  for (const entry of needed) {
    const [key, path] = entry.split('|')
    try {
      const { data } = await http.get(path, { params: { all: true } })
      const rows = Array.isArray(data) ? data : (data?.data || [])
      if (!rows.length) continue
      preReq.value = {
        ...preReq.value,
        [key]: rows.map((r) => ({ value: r.uuid ?? r.id, label: r.name ?? r.title ?? r.label ?? String(r.uuid ?? r.id), ...r })),
      }
    } catch { /* per-field hint only */ }
  }
}

async function loadPreRequisite() {
  preReqLoading.value = true
  preReqError.value = ''
  try {
    const data = await api.value.preRequisite()
    preReq.value = data || {}
  } catch (e) {
    const status = e?.response?.status
    preReqError.value = e?.response?.data?.message
      || (status ? `could not load (HTTP ${status})` : 'could not load')
  }
  // NOTE: the global `config/pre-requisite` endpoint is intentionally NOT
  // called here — on the untouched v5.5.3 backend it throws HTTP 500 without
  // a `type` param and never serves module option lists.
  await fillMissingOptionsFromLists()
  preReqLoading.value = false
}

// registration (and similar) pre-requisites return periods already filtered to
// registration-enabled ones — keep them as-is.
function unwrapVal(v) {
  if (v === null || v === undefined) return ''
  if (typeof v !== 'object') return v
  return v.uuid ?? v.value ?? v.id ?? (v.first_name !== undefined ? v : '')
}

async function loadRecord() {
  if (isCreate.value || !entity.value.endpoints?.show) return
  recordError.value = ''
  try {
    const data = await api.value.show(route.params[recordParam.value])
    const record = data?.item || data?.record || data
    if (layout.value) {
      recordRaw.value = record
      const flat = {}
      // old set-form unwrapping: period/course/enrollmentType → uuid; date/fee → .value
      for (const [k, v] of Object.entries(record || {})) flat[k] = v
      for (const group of visibleLayout.value) {
        if (group.repeat) {
          const rows = resolveKey(record, group.repeat)
          form[group.repeat] = (Array.isArray(rows) ? rows : []).map((r) => {
            const row = {}
            for (const f of group.fields) row[f.name] = unwrapVal(resolveKey(r, f.name))
            return row
          })
          continue
        }
        // row groups (rowKey arrays)
        if (group.rowGroups?.length) {
          for (const g of group.rowGroups) {
            const rows = resolveKey(record, g.rowKey)
            form[g.rowKey] = (Array.isArray(rows) ? rows : []).map((r) => {
              const row = {}
              for (const f of g.fields) {
                if (!f.name) continue
                row[f.name] = unwrapVal(resolveKey(r, f.name))
              }
              return row
            })
          }
        }
        for (const f of group.plain || []) {
          if (!f.name) continue
          if (f.type === 'name-input') {
            const n = resolveKey(record, f.name) || {}
            form[f.name] = {
              first_name: n.first_name ?? n.firstName ?? resolveKey(record, 'first_name') ?? '',
              middle_name: n.middle_name ?? resolveKey(record, 'middle_name') ?? '',
              third_name: n.third_name ?? resolveKey(record, 'third_name') ?? '',
              last_name: n.last_name ?? n.lastName ?? resolveKey(record, 'last_name') ?? '',
            }
            continue
          }
          if (f.type === 'address-input') {
            const a = resolveKey(record, f.name)
            form[f.name] = a && typeof a === 'object' ? a : {}
            continue
          }
          const v = resolveKey(record, f.name)
          if (v !== undefined && v !== null) form[f.name] = typeof v === 'object' ? unwrapVal(v) : v
        }
      }
      // backfill course search label (old init-search)
      if (flat.course && typeof flat.course === 'object') selectedCourseRow.value = flat.course
      return
    }
    for (const f of entity.value.fields || []) {
      let v = resolveKey(record, f.n)
      if (v !== undefined && v !== null) {
        if (f.t === 'checkbox') {
          form[f.n] = Boolean(v)
        } else if (f.t === 'repeat') {
          form[f.n] = (Array.isArray(v) ? v : []).map((row) => {
            const r = {}
            for (const rf of f.rowFields || []) {
              const cell = row?.[rf.n]
              r[rf.n] = rf.t === 'checkbox'
                ? Boolean(cell)
                : (cell && typeof cell === 'object' ? (cell.value ?? '') : (cell ?? ''))
            }
            return r
          })
        } else if (f.t === 'multiselect') {
          form[f.n] = Array.isArray(v) ? v : []
        } else if (typeof v === 'object' && !Array.isArray(v)) {
          form[f.n] = v.uuid ?? v.value ?? v.id ?? v
        } else {
          form[f.n] = v
        }
      }
    }
  } catch (e) {
    const status = e?.response?.status
    recordError.value = e?.response?.data?.message
      || (status ? `record could not be loaded (HTTP ${status})` : 'record could not be loaded')
  }
}

function resetForm() {
  Object.assign(form, emptyForm())
  if (layout.value) {
    for (const group of visibleLayout.value) {
      if (group.repeat && group.repeat === 'guardians' && isCreate.value && !form[group.repeat].length) {
        form[group.repeat].push(blankRow(group))
      }
    }
  }
  fieldErrors.value = {}
  submitError.value = ''
}

function buildPayload() {
  if (!layout.value) return { ...form }
  const payload = {}
  for (const [k, v] of Object.entries(form)) {
    if (v && typeof v === 'object' && !Array.isArray(v)
      && ['first_name', 'middle_name', 'third_name', 'last_name'].some((p) => p in v)) {
      Object.assign(payload, v) // spread name-input parts
      continue
    }
    payload[k] = v
  }
  return payload
}

async function submit() {
  processing.value = true
  fieldErrors.value = {}
  submitError.value = ''
  const payload = buildPayload()
  try {
    let saved
    if (isCreate.value) {
      saved = await api.value.store(payload)
    } else {
      saved = await api.value.update(route.params[recordParam.value], payload)
    }
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `${route.meta.singularLabel || entity.value.label} ${isCreate.value ? 'created' : 'updated'}.`,
      toast: true,
      position: 'top-end',
      timer: 3000,
      showConfirmButton: false,
    })
    const newUuid = saved?.item?.uuid ?? saved?.uuid ?? saved?.record?.uuid ?? null
    if (isCreate.value && keepAdding.value) {
      resetForm()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (entityKey.value === 'Student.Registration' && isCreate.value && newUuid
      && router.hasRoute('StudentRegistrationWizard')) {
      // old app: after create → StudentRegistrationWizard
      router.push({ name: 'StudentRegistrationWizard', params: { uuid: newUuid } })
    } else {
      goList()
    }
  } catch (e) {
    const fe = e?.fieldErrors || e?.response?.data?.errors || {}
    fieldErrors.value = fe
    const first = Object.values(fe)[0]
    submitError.value = first ? (Array.isArray(first) ? first[0] : String(first)) : ''
  } finally {
    processing.value = false
  }
}

function goList() {
  const n = String(route.name || '')
  const base = n.replace(/(Create|Edit|Duplicate)$/, '')
  if (route.meta.listRoute && router.hasRoute(route.meta.listRoute)) {
    router.push({ name: route.meta.listRoute, params: route.params })
    return
  }
  if (router.hasRoute(base + 'List')) {
    router.push({ name: base + 'List', params: { uuid: route.params[scoped.value?.parentParam || 'uuid'] } })
    return
  }
  if (route.meta.listPath) router.push(route.meta.listPath)
  else router.back()
}

const navs = computed(() => route.meta.navs || [])

// ensure at least one repeat row exists in create mode (old onMounted push);
// guardian-style row groups start with one block too (old X() factory).
function ensureDefaultRows() {
  if (!layout.value || !isCreate.value) return
  for (const group of visibleLayout.value) {
    if (group.repeat && !form[group.repeat]?.length) form[group.repeat].push(blankRow(group))
    for (const g of group.rowGroups || []) {
      const hasOptions = g.fields.some((f) => ['radio-group', 'search-select', 'name-input'].includes(f.type))
      if (hasOptions && !(form[g.rowKey]?.length)) form[g.rowKey] = [blankRowFromFields(g.fields)]
    }
  }
}

function blankRowFromFields(fields) {
  const row = {}
  for (const f of fields) {
    if (!f.name) continue
    if (f.type === 'radio-group') row[f.name] = (f.name === 'guardian_type' || f.name === 'student_type') ? 'new' : ''
    else if (f.type === 'switch' || f.type === 'checkbox') row[f.name] = false
    else if (f.type === 'name-input') row[f.name] = {}
    else row[f.name] = ''
  }
  return row
}

onMounted(async () => {
  await Promise.all([loadPreRequisite(), loadRecord()])
  ensureDefaultRows()
  initialized.value = true
})
</script>
