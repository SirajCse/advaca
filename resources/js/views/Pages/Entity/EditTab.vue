<script setup>
// Generic detail-record edit tab — powers /students/:uuid/{basic,contact,login,photo,fee}/edit
// and the employee / guardian / contact equivalents, 1:1 with the old app's
// EditBasic / EditContact / EditLogin / EditPhoto / Student Fee Edit chunks.
// Driven by route.meta.editTab:
//   { kind: 'basic'|'contact'|'login'|'photo'|'fee', base: 'students',
//     label: 'Student', listRoute: 'StudentList', showBasicRoute: 'StudentShowBasic' }
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import NameInput from '@/views/Components/NameInput.vue'
import AddressInput from '@/views/Components/AddressInput.vue'
import CustomField from '@/views/Components/CustomField.vue'
import flatPickr from '@/views/Components/flat-pickr.vue'
import http from '@/lib/http'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const cfg = computed(() => route.meta.editTab || {})
const uuid = computed(() => route.params.uuid)
const kind = computed(() => cfg.value.kind || 'basic')
const base = computed(() => cfg.value.base || 'students') // students|employees|guardians|contacts
const initialized = ref(false)
const processing = ref(false)
const fieldErrors = ref({})
const submitError = ref('')
const record = ref(null)

const preReq = ref({})
const PREQ_PATHS = {
  genders: '/app/config/options?category=gender&all=true',
  bloodGroups: '/app/config/options?category=blood_group&all=true',
  religions: '/app/config/options?category=religion&all=true',
  categories: '/app/config/options?category=category&all=true',
  castes: '/app/config/options?category=caste&all=true',
  localities: '/app/config/options?category=locality&all=true',
  maritalStatuses: '/app/config/options?category=marital_status&all=true',
  relations: '/app/config/options?category=relation&all=true',
  customFields: '/app/custom-fields/pre-requisite',
  roles: '', // filled at mount from the user's current team
  feeConcessions: '/app/finance/fee-concessions?all=true',
}
const FALLBACK_OPTION_VALUES = {
  genders: ['male', 'female', 'other'],
  bloodGroups: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  localities: ['urban', 'rural', 'semi_urban'],
}

async function loadPreRequisites() {
  const paths = { ...PREQ_PATHS }
  if (auth.user?.current_team_id) paths.roles = `/app/teams/${auth.user.current_team_id}/roles?all=true`
  const jobs = Object.entries(paths).map(async ([key, path]) => {
    try {
      const { data } = await http.get(path)
      const rows = Array.isArray(data) ? data : (data?.data || [])
      if (rows.length) preReq.value[key] = rows
    } catch { /* optional */ }
  })
  await Promise.all(jobs)
}

function opt(key) {
  const rows = preReq.value[key] || []
  if (rows.length) {
    return rows.map((r) => typeof r === 'object'
      ? { value: r.value ?? r.uuid ?? r.id ?? r.name, label: r.name ?? r.label ?? String(r.value ?? r.uuid ?? '') }
      : { value: r, label: String(r) })
  }
  return (FALLBACK_OPTION_VALUES[key] || []).map((v) => ({ value: v, label: String(v) }))
}

// ---------------- forms ----------------
const form = reactive({})
const BASIC_SHAPE = {
  first_name: '', middle_name: '', third_name: '', last_name: '',
  father_name: '', mother_name: '', gender: '', birth_date: '', anniversary_date: '',
  unique_id_number1: '', unique_id_number2: '', unique_id_number3: '', unique_id_number4: '', unique_id_number5: '',
  birth_place: '', nationality: '', mother_tongue: '',
  blood_group: '', marital_status: '', religion: '', category: '', caste: '', locality: '',
  occupation: '', annual_income: '', organization_name: '', designation: '',
  custom_fields: {},
}
const CONTACT_SHAPE = {
  contact_number: '', email: '',
  alternate_records: { contact_number: '', email: '' },
  emergency_contact_records: { name: '', contact_number: '', relation: '' },
  present_address: { address_line1: '', address_line2: '', city: '', state: '', zipcode: '', country: '' },
  permanent_address: { address_line1: '', address_line2: '', city: '', state: '', zipcode: '', country: '' },
  same_as_present_address: false,
}
const LOGIN_SHAPE = {
  email: '', username: '', roles: [], force_change_password: false, password: '', password_confirmation: '', existing: false,
}
const FEE_SHAPE = { fee_concession_type: '', fee_groups: [] }

function setDefaults() {
  Object.assign(form, kind.value === 'contact' ? CONTACT_SHAPE : kind.value === 'login' ? LOGIN_SHAPE : kind.value === 'fee' ? FEE_SHAPE : BASIC_SHAPE)
}

// initialize IMMEDIATELY at setup — the template renders before onMounted and
// v-model paths like form.alternate_records.contact_number must exist
setDefaults()

const BasicFields = [
  { name: 'father_name', label: 'father name' },
  { name: 'mother_name', label: 'mother name' },
  { name: 'birth_date', label: 'date of birth', type: 'date' },
  { name: 'anniversary_date', label: 'anniversary date', type: 'date' },
  { name: 'unique_id_number1', label: 'unique id number 1' },
  { name: 'unique_id_number2', label: 'unique id number 2' },
  { name: 'unique_id_number3', label: 'unique id number 3' },
  { name: 'unique_id_number4', label: 'unique id number 4' },
  { name: 'unique_id_number5', label: 'unique id number 5' },
  { name: 'birth_place', label: 'birth place' },
  { name: 'nationality', label: 'nationality' },
  { name: 'mother_tongue', label: 'mother tongue' },
  { name: 'occupation', label: 'occupation' },
  { name: 'annual_income', label: 'annual income' },
  { name: 'organization_name', label: 'organization name' },
  { name: 'designation', label: 'designation' },
]
const SelectFields = [
  { name: 'blood_group', label: 'blood group', key: 'bloodGroups' },
  { name: 'marital_status', label: 'marital status', key: 'maritalStatuses' },
  { name: 'religion', label: 'religion', key: 'religions' },
  { name: 'category', label: 'category', key: 'categories' },
  { name: 'caste', label: 'caste', key: 'castes' },
  { name: 'locality', label: 'locality', key: 'localities' },
]
const RELATION_FALLBACK = ['Father', 'Mother', 'Spouse', 'Guardian', 'Sibling', 'Other']

// record loading — fetch then map into the right form shape
function unwrap(v) {
  if (v === null || v === undefined) return ''
  if (typeof v !== 'object') return v
  const out = v.value ?? v.uuid ?? v.id ?? v
  return typeof out === 'object' ? '' : out
}

async function loadRecord() {
  const { data } = await http.get(`/app/${base.value}/${uuid.value}`)
  const rec = data?.item || data?.record || data
  record.value = rec
  if (kind.value === 'basic' || kind.value === 'contact') {
    const c = rec?.contact || rec
    if (kind.value === 'basic') {
      const n = c?.name || c || {}
      Object.assign(form, {
        first_name: n.first_name ?? n.firstName ?? '',
        middle_name: n.middle_name ?? '',
        third_name: n.third_name ?? '',
        last_name: n.last_name ?? n.lastName ?? '',
        father_name: c?.father_name ?? '',
        mother_name: c?.mother_name ?? '',
        gender: unwrap(c?.gender),
        birth_date: String(unwrap(c?.birth_date) || '').slice(0, 10),
        anniversary_date: String(unwrap(c?.anniversary_date) || '').slice(0, 10),
        unique_id_number1: c?.unique_id_number1 ?? '',
        unique_id_number2: c?.unique_id_number2 ?? '',
        unique_id_number3: c?.unique_id_number3 ?? '',
        unique_id_number4: c?.unique_id_number4 ?? '',
        unique_id_number5: c?.unique_id_number5 ?? '',
        birth_place: c?.birth_place ?? '',
        nationality: c?.nationality ?? '',
        mother_tongue: c?.mother_tongue ?? '',
        blood_group: unwrap(c?.blood_group),
        marital_status: unwrap(c?.marital_status),
        religion: unwrap(c?.religion),
        category: unwrap(c?.category),
        caste: unwrap(c?.caste),
        locality: unwrap(c?.locality),
        occupation: c?.occupation ?? '',
        annual_income: c?.annual_income ?? '',
        organization_name: c?.organization_name ?? '',
        designation: c?.designation ?? '',
        custom_fields: c?.custom_fields || {},
      })
    } else {
      Object.assign(form, {
        contact_number: c?.contact_number ?? '',
        email: c?.email ?? '',
        alternate_records: {
          contact_number: c?.alternate_records?.contact_number ?? '',
          email: c?.alternate_records?.email ?? '',
        },
        emergency_contact_records: {
          name: c?.emergency_contact_records?.name ?? '',
          contact_number: c?.emergency_contact_records?.contact_number ?? '',
          relation: unwrap(c?.emergency_contact_records?.relation),
        },
        present_address: { ...{ address_line1: '', address_line2: '', city: '', state: '', zipcode: '', country: '' }, ...(c?.present_address || {}) },
        permanent_address: { ...{ address_line1: '', address_line2: '', city: '', state: '', zipcode: '', country: '' }, ...(c?.permanent_address || {}) },
        same_as_present_address: Boolean(c?.permanent_address?.same_as_present_address ?? c?.same_as_present_address),
      })
    }
  } else if (kind.value === 'login') {
    try {
      const { data: u } = await http.get(`/app/${base.value}/${uuid.value}/user`)
      const user = u?.user || u || null
      Object.assign(form, {
        existing: Boolean(user?.username || (user?.roles || []).length),
        email: user?.email ?? record.value?.contact?.email ?? '',
        username: user?.username ?? '',
        roles: (user?.roles || []).map((r) => r.uuid ?? r.id),
      })
    } catch { /* no user yet */ }
  } else if (kind.value === 'fee') {
    const { data: fee } = await http.get(`/app/${base.value}/${uuid.value}/fee`)
    const f = fee?.item || fee || {}
    form.fee_concession_type = f.fee_concession_type?.uuid ?? ''
    form.fee_groups = (f.fee_groups || fee?.feeGroups || []).map((g) => ({
      uuid: g.uuid,
      name: g.name,
      fees: (g.fees || []).map((s) => ({
        uuid: s.uuid,
        name: s.name,
        is_editable: (s.status?.value === 'unpaid' || s.status?.value === 'not_applicable'),
        due_date: s.due_date?.value ?? '',
        custom_amount: s.amount?.value ?? '',
        is_applicable: s.is_applicable ?? true,
      })),
    }))
  }
}

async function save() {
  processing.value = true
  fieldErrors.value = {}
  submitError.value = ''
  try {
    if (kind.value === 'login') {
      const payload = {
        username: form.username,
        roles: form.roles,
        force_change_password: form.force_change_password,
      }
      if (!form.existing) {
        payload.email = form.email
        payload.password = form.password
        payload.password_confirmation = form.password_confirmation
      }
      await (form.existing
        ? http.patch(`/app/${base.value}/${uuid.value}/user`, payload)
        : http.post(`/app/${base.value}/${uuid.value}/user`, payload))
    } else if (kind.value === 'fee') {
      const payload = {
        fee_concession_type: form.fee_concession_type || null,
        fee_groups: (form.fee_groups || []).map((g) => ({
          uuid: g.uuid,
          fees: (g.fees || [])
            .filter((s) => s.is_editable)
            .map((s) => ({
              uuid: s.uuid,
              due_date: s.due_date || null,
              amount: s.custom_amount === '' ? null : s.custom_amount,
            })),
        })),
      }
      await http.patch(`/app/${base.value}/${uuid.value}/fee`, payload)
    } else {
      // basic & contact share the contact update endpoint
      if (kind.value === 'contact' && form.same_as_present_address) {
        form.permanent_address = { ...form.present_address }
      }
      await http.put(`/app/${base.value}/${uuid.value}`, { ...form })
    }
    Swal.fire({
      icon: 'success', title: 'Success',
      text: `${cfg.value.label || 'Record'} updated.`,
      toast: true, position: 'top-end', timer: 3000, showConfirmButton: false,
    })
    if (cfg.value.showBasicRoute && router.hasRoute(cfg.value.showBasicRoute)) {
      router.push({ name: cfg.value.showBasicRoute, params: { uuid: uuid.value } })
    } else {
      router.back()
    }
  } catch (e) {
    const fe = e?.response?.data?.errors || {}
    fieldErrors.value = fe
    const first = Object.values(fe)[0]
    submitError.value = first ? (Array.isArray(first) ? first[0] : String(first)) : (e?.response?.data?.message || 'could not save')
  } finally {
    processing.value = false
  }
}

// photo tab
const photoUploading = ref(false)
const photoPreview = computed(() => record.value?.photo || record.value?.contact?.photo || '')
const photoInitial = computed(() => {
  const n = record.value?.contact?.name
  const s = typeof n === 'string' ? n : (n?.first_name || record.value?.contact?.first_name || '?')
  return String(s).slice(0, 1).toUpperCase()
})
async function onPhotoChange(ev) {
  const file = ev.target.files?.[0]
  if (!file) return
  photoUploading.value = true
  try {
    const fd = new FormData()
    fd.append('photo', file)
    await http.post(`/app/${base.value}/${uuid.value}/photo`, fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    Swal.fire({ icon: 'success', title: 'Success', text: 'Photo uploaded.', toast: true, position: 'top-end', timer: 2500, showConfirmButton: false })
    await loadRecord()
  } catch (e) {
    submitError.value = e?.response?.data?.message || 'upload failed'
  } finally {
    photoUploading.value = false
  }
}
async function removePhoto() {
  photoUploading.value = true
  try {
    await http.delete(`/app/${base.value}/${uuid.value}/photo`)
    Swal.fire({ icon: 'success', title: 'Success', text: 'Photo removed.', toast: true, position: 'top-end', timer: 2500, showConfirmButton: false })
    await loadRecord()
  } catch (e) {
    submitError.value = e?.response?.data?.message || 'could not remove'
  } finally {
    photoUploading.value = false
  }
}

function err(name) {
  const v = fieldErrors.value[name]
  return v ? (Array.isArray(v) ? v[0] : String(v)) : ''
}

const navs = computed(() => route.meta.navs || [])

onMounted(async () => {
  setDefaults()
  await loadPreRequisites()
  try {
    await loadRecord()
  } catch (e) {
    submitError.value = e?.response?.data?.message || 'record could not be loaded'
  }
  initialized.value = true
})
</script>

<template>
  <div class="space-y-4">
    <PageHeader :title="route.meta.pageTitle || 'Edit'" :navs="navs" />

    <ParentTransition :visibility="initialized">
      <Card>
        <CardHeader>
          <CardTitle>{{ route.meta.pageTitle || 'Edit' }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-5">
          <!-- ============ BASIC ============ -->
          <template v-if="kind === 'basic'">
            <div class="space-y-1.5">
              <Label>Name</Label>
              <NameInput :model-value="form" @update:model-value="(v) => Object.assign(form, v)" />
            </div>
            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <div v-for="f in BasicFields" :key="f.name" class="space-y-1.5">
                <Label :for="f.name">{{ f.label }}</Label>
                <flat-pickr
                  v-if="f.type === 'date'"
                  v-model="form[f.name]"
                  :config="{ dateFormat: 'Y-m-d' }"
                />
                <Input v-else :id="f.name" v-model="form[f.name]" />
                <p v-if="err(f.name)" class="text-xs text-destructive">{{ err(f.name) }}</p>
              </div>
              <div class="space-y-1.5">
                <Label>Gender</Label>
                <div class="flex flex-wrap items-center gap-4">
                  <label v-for="g in opt('genders')" :key="g.value" class="flex cursor-pointer items-center gap-2 text-sm">
                    <input v-model="form.gender" type="radio" :value="g.value" class="h-4 w-4" />
                    {{ g.label }}
                  </label>
                </div>
              </div>
              <div v-for="f in SelectFields" :key="f.name" class="space-y-1.5">
                <Label :for="f.name">{{ f.label }}</Label>
                <select
                  :id="f.name"
                  v-model="form[f.name]"
                  class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm"
                >
                  <option value="">Select</option>
                  <option v-for="o in opt(f.key)" :key="o.value" :value="o.value">{{ o.label }}</option>
                </select>
              </div>
            </div>
            <div v-if="(preReq.customFields || []).length" class="space-y-1.5">
              <Label>Custom fields</Label>
              <CustomField
                :fields="preReq.customFields || []"
                :model-value="form.custom_fields || {}"
                @update:model-value="(v) => (form.custom_fields = v)"
              />
            </div>
          </template>

          <!-- ============ CONTACT ============ -->
          <template v-else-if="kind === 'contact'">
            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1.5">
                <Label for="contact_number">Contact number</Label>
                <Input id="contact_number" v-model="form.contact_number" />
                <p v-if="err('contact_number')" class="text-xs text-destructive">{{ err('contact_number') }}</p>
              </div>
              <div class="space-y-1.5">
                <Label for="cemail">Email</Label>
                <Input id="cemail" v-model="form.email" type="email" />
              </div>
              <div class="space-y-1.5">
                <Label>Alternate contact number</Label>
                <Input v-model="form.alternate_records.contact_number" />
              </div>
              <div class="space-y-1.5">
                <Label>Alternate email</Label>
                <Input v-model="form.alternate_records.email" type="email" />
              </div>
              <div class="space-y-1.5">
                <Label>Emergency contact name</Label>
                <Input v-model="form.emergency_contact_records.name" />
              </div>
              <div class="space-y-1.5">
                <Label>Emergency contact number</Label>
                <Input v-model="form.emergency_contact_records.contact_number" />
              </div>
              <div class="space-y-1.5">
                <Label>Emergency relation</Label>
                <select v-model="form.emergency_contact_records.relation" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm">
                  <option value="">Select</option>
                  <option v-for="r in (preReq.relations?.length ? opt('relations') : RELATION_FALLBACK.map((v) => ({ value: v, label: v })))" :key="r.value" :value="r.value">{{ r.label }}</option>
                </select>
              </div>
            </div>
            <div class="grid gap-5 lg:grid-cols-2">
              <div class="space-y-1.5">
                <Label>Present address</Label>
                <AddressInput label="" :model-value="form.present_address" @update:model-value="(v) => (form.present_address = v)" />
              </div>
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <Label>Permanent address</Label>
                  <label class="flex items-center gap-2 text-xs text-muted-foreground">
                    <Checkbox :checked="form.same_as_present_address" @update:checked="(v) => (form.same_as_present_address = v)" />
                    Same as present
                  </label>
                </div>
                <AddressInput
                  v-if="!form.same_as_present_address"
                  label=""
                  :model-value="form.permanent_address"
                  @update:model-value="(v) => (form.permanent_address = v)"
                />
                <p v-else class="text-sm text-muted-foreground">Copies present address on save.</p>
              </div>
            </div>
          </template>

          <!-- ============ LOGIN ============ -->
          <template v-else-if="kind === 'login'">
            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1.5">
                <Label for="lemail">Email</Label>
                <Input id="lemail" v-model="form.email" disabled />
              </div>
              <div class="space-y-1.5">
                <Label for="lusername">Username</Label>
                <Input id="lusername" v-model="form.username" :disabled="Boolean(form.existing)" />
              </div>
              <div v-if="!form.existing" class="space-y-1.5">
                <Label for="lpass">Password</Label>
                <Input id="lpass" v-model="form.password" type="password" />
              </div>
              <div v-if="!form.existing" class="space-y-1.5">
                <Label for="lpassc">Confirm password</Label>
                <Input id="lpassc" v-model="form.password_confirmation" type="password" />
              </div>
              <div class="space-y-1.5">
                <Label>Roles</Label>
                <select v-model="form.roles" multiple class="flex h-24 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm">
                  <option v-for="r in (preReq.roles || [])" :key="r.uuid ?? r.id" :value="r.uuid ?? r.id">{{ r.name ?? r.label }}</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <Switch :checked="form.force_change_password" @update:checked="(v) => (form.force_change_password = v)" />
                <Label>Force change password</Label>
              </div>
            </div>
          </template>

          <!-- ============ PHOTO ============ -->
          <template v-else-if="kind === 'photo'">
            <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <img
                v-if="photoPreview"
                :src="photoPreview"
                alt="photo"
                class="h-32 w-32 rounded-full object-cover ring-4 ring-white"
              >
              <div v-else class="flex h-32 w-32 items-center justify-center rounded-full bg-muted text-3xl font-semibold text-muted-foreground">
                {{ photoInitial }}
              </div>
              <div class="space-y-2">
                <Label for="photo">Photo</Label>
                <Input id="photo" type="file" accept="image/*" :disabled="photoUploading" @change="onPhotoChange" />
                <Button type="button" variant="destructive" size="sm" :disabled="photoUploading || !photoPreview" @click="removePhoto">
                  Remove photo
                </Button>
              </div>
            </div>
          </template>

          <!-- ============ FEE ============ -->
          <template v-else-if="kind === 'fee'">
            <div class="space-y-1.5">
              <Label for="fct">Fee concession type</Label>
              <select id="fct" v-model="form.fee_concession_type" class="flex h-9 w-full max-w-sm rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm">
                <option value="">Select</option>
                <option v-for="c in (preReq.feeConcessions || [])" :key="c.uuid" :value="c.uuid">{{ c.name }}</option>
              </select>
            </div>
            <div v-for="g in form.fee_groups" :key="g.uuid" class="rounded-lg border p-4">
              <h3 class="mb-3 font-semibold">{{ g.name }}</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b bg-muted/50 text-left">
                      <th class="px-3 py-2 font-medium">Fee</th>
                      <th class="px-3 py-2 font-medium">Due date</th>
                      <th class="px-3 py-2 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="s in g.fees" :key="s.uuid" class="border-b last:border-b-0">
                      <td class="px-3 py-2">{{ s.name }}</td>
                      <td class="px-3 py-2">
                        <flat-pickr v-if="s.is_editable" v-model="s.due_date" :config="{ dateFormat: 'Y-m-d' }" />
                        <span v-else>{{ s.due_date }}</span>
                      </td>
                      <td class="px-3 py-2">
                        <Input v-if="s.is_editable" v-model="s.custom_amount" type="number" class="h-8 w-32" />
                        <span v-else>{{ s.custom_amount }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </template>

          <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>

          <div v-if="kind !== 'photo'" class="flex justify-end gap-3">
            <Button type="button" variant="outline" @click="router.back()">Cancel</Button>
            <Button type="button" :disabled="processing" @click="save">
              {{ processing ? 'Saving…' : 'Save' }}
            </Button>
          </div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
