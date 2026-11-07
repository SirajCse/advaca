// Small shared helpers used by the generated pages
export function fmtDate(value) {
  if (!value) return '-'
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
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

export function displayValue(value) {
  if (value === null || value === undefined || value === '') return '-'
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (Array.isArray(value)) return value.length ? value.map((v) => displayValue(v)).join(', ') : '-'
  if (typeof value === 'object') {
    return value.name || value.title || value.label || value.value || value.text || value.number || '-'
  }
  return String(value)
}
