<script setup>
// Profile edit request pages (student & employee) — 1:1 with the old
// Student/Employee EditRequest chunks:
//   List  — GET app/{base}/{uuid}/edit-requests (table + status)
//   New   — request form: selects which fields to request for edit
//   Show  — request detail
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import http from '@/lib/http'

const route = useRoute()
const router = useRouter()
const mode = computed(() => route.meta.editRequestMode || 'list') // list | new | show
const base = computed(() => route.meta.editRequestBase || 'students')
const uuid = computed(() => route.params.uuid)
const muuid = computed(() => route.params.muuid)

const rows = ref([])
const record = ref(null)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')

const REQUESTABLE = [
  { key: 'contact_number', label: 'Contact number' },
  { key: 'alternate_contact_number', label: 'Alternate contact number' },
  { key: 'email', label: 'Email' },
  { key: 'unique_id_number1', label: 'Unique ID number 1' },
  { key: 'unique_id_number2', label: 'Unique ID number 2' },
  { key: 'unique_id_number3', label: 'Unique ID number 3' },
  { key: 'unique_id_number4', label: 'Unique ID number 4' },
  { key: 'unique_id_number5', label: 'Unique ID number 5' },
  { key: 'birth_place', label: 'Birth place' },
  { key: 'nationality', label: 'Nationality' },
  { key: 'mother_tongue', label: 'Mother tongue' },
  { key: 'blood_group', label: 'Blood group' },
  { key: 'religion', label: 'Religion' },
  { key: 'category', label: 'Category' },
  { key: 'caste', label: 'Caste' },
  { key: 'marital_status', label: 'Marital status' },
]
const form = reactive({ fields: [], reason: '' })

async function load() {
  if (mode.value === 'list') {
    const { data } = await http.get(`/app/${base.value}/${uuid.value}/edit-requests`)
    rows.value = Array.isArray(data) ? data : (data?.data || [])
  } else if (mode.value === 'show') {
    const { data } = await http.get(`/app/${base.value}/${uuid.value}/edit-requests/${muuid.value}`)
    record.value = data?.item || data?.record || data
  }
  initialized.value = true
}

async function submit() {
  processing.value = true
  submitError.value = ''
  try {
    await http.post(`/app/${base.value}/${uuid.value}/edit-requests`, {
      fields: form.fields,
      reason: form.reason,
    })
    Swal.fire({ icon: 'success', title: 'Success', text: 'Edit request submitted.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.back()
  } catch (e) {
    submitError.value = e?.response?.data?.message || 'could not submit request'
  } finally {
    processing.value = false
  }
}

const navs = computed(() => route.meta.navs || [])

onMounted(load)
</script>

<template>
  <div class="space-y-4">
    <PageHeader :title="route.meta.pageTitle || 'Edit Requests'" :navs="navs">
      <template #default>
        <Button
          v-if="mode === 'list'"
          variant="outline" size="sm"
          @click="router.push({ name: route.meta.newRoute || 'StudentProfileEditRequestNew', params: { uuid } })"
        >
          New request
        </Button>
      </template>
    </PageHeader>

    <ParentTransition :visibility="initialized">
      <!-- LIST -->
      <Card v-if="mode === 'list'">
        <CardHeader><CardTitle>Edit requests</CardTitle></CardHeader>
        <CardContent>
          <div class="overflow-x-auto rounded-lg border">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b bg-muted/50 text-left">
                  <th class="px-3 py-2 font-medium">Request date</th>
                  <th class="px-3 py-2 font-medium">Fields</th>
                  <th class="px-3 py-2 font-medium">Status</th>
                  <th class="px-3 py-2 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!rows.length">
                  <td colspan="4" class="px-3 py-6 text-center text-muted-foreground">No edit requests yet</td>
                </tr>
                <tr v-for="r in rows" :key="r.uuid" class="border-b last:border-b-0">
                  <td class="px-3 py-2">{{ (r.requested_at?.value || r.created_at || '').slice(0, 10) }}</td>
                  <td class="px-3 py-2">
                    <Badge v-for="f in (r.fields || []).slice(0, 3)" :key="f" variant="secondary" class="mr-1">{{ f }}</Badge>
                    <span v-if="(r.fields || []).length > 3">+{{ r.fields.length - 3 }}</span>
                  </td>
                  <td class="px-3 py-2">
                    <Badge :variant="(r.status?.value || r.status) === 'approved' ? 'success' : 'secondary'">
                      {{ r.status?.label || r.status || '-' }}
                    </Badge>
                  </td>
                  <td class="px-3 py-2 text-right">
                    <Button variant="ghost" size="sm" @click="router.push({ name: route.meta.showRoute || 'StudentProfileEditRequestShow', params: { uuid, muuid: r.uuid } })">
                      View
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <!-- NEW -->
      <Card v-else-if="mode === 'new'">
        <CardHeader><CardTitle>New edit request</CardTitle></CardHeader>
        <CardContent class="space-y-5">
          <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <label v-for="f in REQUESTABLE" :key="f.key" class="flex items-center gap-2 text-sm">
              <Checkbox :checked="form.fields.includes(f.key)" @update:checked="(v) => {
                if (v) form.fields.push(f.key)
                else form.fields = form.fields.filter((x) => x !== f.key)
              }" />
              {{ f.label }}
            </label>
          </div>
          <div class="space-y-1.5">
            <Label for="reason">Reason</Label>
            <Input id="reason" v-model="form.reason" />
          </div>
          <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
          <div class="flex justify-end gap-3">
            <Button variant="outline" @click="router.back()">Cancel</Button>
            <Button :disabled="processing || !form.fields.length" @click="submit">{{ processing ? 'Submitting…' : 'Submit request' }}</Button>
          </div>
        </CardContent>
      </Card>

      <!-- SHOW -->
      <Card v-else>
        <CardHeader><CardTitle>Edit request</CardTitle></CardHeader>
        <CardContent v-if="record" class="space-y-3">
          <div class="grid gap-4 md:grid-cols-2">
            <div><span class="text-xs text-muted-foreground">Request date</span><p>{{ (record.requested_at?.value || record.created_at || '').slice(0, 10) }}</p></div>
            <div><span class="text-xs text-muted-foreground">Status</span><p>{{ record.status?.label || record.status || '-' }}</p></div>
            <div><span class="text-xs text-muted-foreground">Reason</span><p>{{ record.reason || '-' }}</p></div>
            <div><span class="text-xs text-muted-foreground">Fields</span><p>{{ (record.fields || []).join(', ') || '-' }}</p></div>
          </div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
