<script setup>
// Generic detail-record show tab — /students/:uuid/{basic,contact,login} and the
// employee / guardian / contact equivalents (old Basic.vue / Contact.vue /
// Login.vue show chunks). Read-only definition list + Edit button.
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import http from '@/lib/http'

const route = useRoute()
const router = useRouter()

const cfg = computed(() => route.meta.showTab || {})
const kind = computed(() => cfg.value.kind || 'basic')
const base = computed(() => cfg.value.base || 'students')
const uuid = computed(() => route.params.uuid)
const record = ref(null)
const user = ref(null)
const initialized = ref(false)
const error = ref('')

function unwrap(v) {
  if (v === null || v === undefined) return ''
  if (typeof v !== 'object') return v
  const out = v.value ?? v.uuid ?? v.label ?? v.name ?? ''
  return typeof out === 'object' ? '' : out
}

const rows = computed(() => {
  const rec = record.value
  if (!rec) return []
  const c = rec.contact || rec
  if (kind.value === 'basic') {
    const n = c?.name || {}
    const full = [n.first_name, n.middle_name, n.third_name, n.last_name].filter(Boolean).join(' ')
    return [
      ['Name', full || c?.full_name || '-'],
      ['Father name', c?.father_name || '-'],
      ['Mother name', c?.mother_name || '-'],
      ['Gender', unwrap(c?.gender) || '-'],
      ['Date of birth', String(unwrap(c?.birth_date) || '').slice(0, 10) || '-'],
      ['Anniversary date', String(unwrap(c?.anniversary_date) || '').slice(0, 10) || '-'],
      ...[1, 2, 3, 4, 5].map((i) => [`Unique ID number ${i}`, c?.[`unique_id_number${i}`] || '-']),
      ['Birth place', c?.birth_place || '-'],
      ['Nationality', c?.nationality || '-'],
      ['Mother tongue', c?.mother_tongue || '-'],
      ['Blood group', unwrap(c?.blood_group) || '-'],
      ['Marital status', unwrap(c?.marital_status) || '-'],
      ['Religion', c?.religion?.name || '-'],
      ['Category', c?.category?.name || '-'],
      ['Caste', c?.caste?.name || '-'],
      ['Locality', unwrap(c?.locality) || '-'],
      ['Occupation', c?.occupation || '-'],
      ['Organization', c?.organization_name || '-'],
      ['Designation', c?.designation || '-'],
    ]
  }
  if (kind.value === 'contact') {
    return [
      ['Contact number', c?.contact_number || '-'],
      ['Email', c?.email || '-'],
      ['Alternate contact number', c?.alternate_records?.contact_number || '-'],
      ['Alternate email', c?.alternate_records?.email || '-'],
      ['Emergency contact', [c?.emergency_contact_records?.name, c?.emergency_contact_records?.contact_number].filter(Boolean).join(' · ') || '-'],
      ['Present address', addr(c?.present_address)],
      ['Permanent address', addr(c?.permanent_address)],
    ]
  }
  // login
  return [
    ['Email', user.value?.email || c?.email || '-'],
    ['Username', user.value?.username || '-'],
    ['Roles', (user.value?.roles || []).map((r) => r.name).join(', ') || '-'],
    ['Status', user.value?.status?.label || (user.value ? 'Active' : 'No user account')],
  ]
})

function addr(a) {
  if (!a) return '-'
  return [a.address_line1, a.address_line2, a.city, a.state, a.zipcode, a.country].filter(Boolean).join(', ') || '-'
}

const editRoute = computed(() => cfg.value.editRoute || null)

onMounted(async () => {
  try {
    const { data } = await http.get(`/app/${base.value}/${uuid.value}`)
    record.value = data?.item || data?.record || data
    if (kind.value === 'login') {
      try {
        const { data: u } = await http.get(`/app/${base.value}/${uuid.value}/user`)
        user.value = u?.user || u || null
      } catch { /* no user */ }
    }
  } catch (e) {
    error.value = e?.response?.data?.message || 'record could not be loaded'
  }
  initialized.value = true
})
</script>

<template>
  <div class="space-y-4">
    <PageHeader :title="route.meta.pageTitle || 'Detail'" :navs="route.meta.navs || []">
      <template #default>
        <Button
          v-if="editRoute && router.hasRoute(editRoute)"
          variant="outline" size="sm"
          @click="router.push({ name: editRoute, params: { uuid } })"
        >
          Edit
        </Button>
      </template>
    </PageHeader>

    <ParentTransition :visibility="initialized">
      <Card>
        <CardHeader><CardTitle>{{ route.meta.pageTitle || 'Detail' }}</CardTitle></CardHeader>
        <CardContent>
          <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
          <dl class="grid gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="[k, v] in rows" :key="k">
              <dt class="text-xs uppercase tracking-wide text-muted-foreground">{{ k }}</dt>
              <dd class="mt-0.5 text-sm font-medium">{{ v || '-' }}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
