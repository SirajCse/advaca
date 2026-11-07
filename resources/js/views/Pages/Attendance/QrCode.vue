<script setup>
import { ref } from 'vue'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PageHeader from '@/views/Components/PageHeader.vue'

const batch = ref('')
const qr = ref(null)
const loading = ref(false)

async function generate() {
  loading.value = true
  try {
    const { data } = await http.post('/app/attendance/qr-code', { batch: batch.value })
    qr.value = data?.qr_code || data?.url || data?.link || null
  } catch {}
  loading.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Attendance QR Code" :navs="[{ label: 'Attendance' }, { label: 'QR Code' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Generate QR code</CardTitle>
        <CardDescription>Create a scannable QR code for batch-wise attendance</CardDescription>
      </CardHeader>
      <CardContent class="max-w-md space-y-4">
        <div class="space-y-1.5">
          <Label for="batch">Batch</Label>
          <Input id="batch" v-model="batch" placeholder="Batch uuid or code" />
        </div>
        <Button :disabled="loading" @click="generate">{{ loading ? 'Generating…' : 'Generate' }}</Button>
        <div v-if="qr" class="rounded-lg border p-4 text-center">
          <img v-if="typeof qr === 'string' && qr.startsWith('data:')" :src="qr" alt="QR code" class="mx-auto" />
          <a v-else :href="qr" target="_blank" class="text-primary underline">Open QR code</a>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
