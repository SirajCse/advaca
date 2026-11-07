<script setup>
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormSelect from '@/views/Components/FormSelect.vue'

const types = ref([])
const type = ref('')
const file = ref(null)
const processing = ref(false)

onMounted(async () => {
  try {
    const { data } = await http.get('/app/bulk-upload/action/pre-requisite')
    types.value = Object.entries(data || {}).map(([k, v]) => ({ value: k, label: humanize(k) }))
  } catch {}
})

function humanize(s) {
  return s.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

async function submit() {
  if (!type.value || !file.value) return
  processing.value = true
  try {
    const fd = new FormData()
    fd.append('type', type.value)
    fd.append('file', file.value)
    const { data } = await http.post('/app/bulk-upload/action', fd)
    Swal.fire({ icon: 'success', title: 'Imported', text: data?.message || 'Records imported.' })
  } catch {}
  processing.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Bulk Upload" :navs="[{ label: 'General' }, { label: 'Bulk Upload' }]" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>Bulk upload</CardTitle>
          <CardDescription>Import records from an Excel/CSV file</CardDescription>
        </CardHeader>
        <CardContent class="max-w-xl space-y-4">
          <FormSelect v-model="type" :options="types" label="Upload type" required />
          <div class="space-y-1.5">
            <Label for="file">File</Label>
            <Input id="file" type="file" accept=".xlsx,.xls,.csv" @change="(e) => (file = e.target.files?.[0] ?? null)" />
          </div>
          <Button :disabled="processing || !type || !file" @click="submit">{{ processing ? 'Importing…' : 'Import' }}</Button>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
