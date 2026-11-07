<script setup>
import { ref } from 'vue'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'

const token = ref('')
const loading = ref(false)

async function generate() {
  loading.value = true
  try {
    const { data } = await http.post('/app/support/token')
    token.value = data?.token || data?.support_token || ''
  } catch {}
  loading.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Support" :navs="[{ label: 'General' }, { label: 'Support' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Support token</CardTitle>
        <CardDescription>Generate a temporary token so the support team can diagnose your installation.</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <Button :disabled="loading" @click="generate">{{ loading ? 'Generating…' : 'Generate token' }}</Button>
        <div v-if="token" class="break-all rounded-md border bg-muted/40 p-3 font-mono text-sm">{{ token }}</div>
      </CardContent>
    </Card>
  </div>
</template>
