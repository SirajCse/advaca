// Small shared helpers used by the generated pages
export function fmtDate(value) {
  if (!value) return '-'
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

/**
 * Key resolution across the two naming conventions the untouched backend mixes:
 * Laravel resources return snake_case (code_number, batch_name, birth_date as a
 * Cal object) while parts of the reconstructed specs use camelCase
 * (codeNumber) or dot paths (course.name, guardian.contact.contact_number).
 * resolveKey tries the exact key, then the snake_case / camelCase variant, and
 * finally walks dot paths segment by segment with the same fallbacks.
 */
function camelToSnake(s) {
  return String(s).replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase()
}
function snakeToCamel(s) {
  return String(s).replace(/_([a-z])/g, (_, c) => c.toUpperCase())
}

export function resolveKey(row, key) {
  if (row === null || row === undefined || key === null || key === undefined) return undefined
  const k = String(key)
  if (!k.includes('.')) {
    if (Object.prototype.hasOwnProperty.call(row, k)) return row[k]
    const snake = camelToSnake(k)
    if (snake !== k && Object.prototype.hasOwnProperty.call(row, snake)) return row[snake]
    const camel = snakeToCamel(k)
    if (camel !== k && Object.prototype.hasOwnProperty.call(row, camel)) return row[camel]
    return undefined
  }
  return k.split('.').reduce((acc, seg) => (acc === null || acc === undefined ? acc : resolveKey(acc, seg)), row)
}

/**
 * Human display for any backend value:
 * - Cal date objects {type,value,formatted,...} -> formatted ("03 Feb 2001")
 * - enum details {label|name|title|text|value}   -> the label
 * - arrays                                      -> comma-joined labels
 * - booleans                                    -> Yes / No
 * - empty values                                -> the em dash placeholder
 */
export function displayValue(v) {
  if (v === null || v === undefined || v === '') return '—'
  if (typeof v === 'boolean') return v ? 'Yes' : 'No'
  if (typeof v === 'object') {
    if (Array.isArray(v)) return v.length ? v.map((x) => displayValue(x)).join(', ') : '—'
    const lab = v.formatted ?? v.label ?? v.name ?? v.title ?? v.text ?? v.value ?? v.number
    return lab === null || lab === undefined || lab === '' ? '—' : String(lab)
  }
  return v
}

export function fmtDateTime(value) {
  if (!value) return '-'
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

export function fmtBool(value) {
  return value === true || value === 1 || value === '1'
}

export function toOptionList(value) {
  // normalize Laravel preRequisite payloads into [{value,label}]
  if (!value) return []
  if (Array.isArray(value)) {
    return value.map((o) => {
      if (typeof o === 'string' || typeof o === 'number') return { value: String(o), label: String(o) }
      return {
        value: String(o.uuid ?? o.id ?? o.value ?? o.code ?? ''),
        label: String(o.name ?? o.title ?? o.label ?? o.text ?? o.value ?? o.code ?? ''),
      }
    }).filter((o) => o.value)
  }
  if (typeof value === 'object') {
    return Object.entries(value).map(([k, v]) => ({
      value: String(v?.uuid ?? v?.id ?? k),
      label: String(v?.name ?? v?.title ?? v?.label ?? v),
    }))
  }
  return []
}

export function pickPreReq(preReq, field) {
  if (!preReq) return []
  const direct = preReq[field]
  if (direct) return toOptionList(direct)
  const plural = field.endsWith('s') ? field : field + 's'
  if (preReq[plural]) return toOptionList(preReq[plural])
  // camelCase variants, e.g. fee_heads -> feeHeads
  const camelKey = field.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
  if (preReq[camelKey]) return toOptionList(preReq[camelKey])
  const camelPlural = camelKey.endsWith('s') ? camelKey : camelKey + 's'
  if (preReq[camelPlural]) return toOptionList(preReq[camelPlural])
  return []
}
