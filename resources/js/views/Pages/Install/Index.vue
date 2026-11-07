<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()
const steps = [
  { title: 'Institution details', desc: 'App name, contact and branding', to: '/config/general' },
  { title: 'System preferences', desc: 'Locale, timezone, currency & theme', to: '/config/system' },
  { title: 'Mail configuration', desc: 'SMTP driver and sender identity', to: '/config/mail' },
  { title: 'SMS & WhatsApp', desc: 'Gateway credentials for messaging', to: '/config/sms' },
  { title: 'Auth & security', desc: 'Registration, 2FA and OAuth settings', to: '/config/auth' },
  { title: 'Modules', desc: 'Enable or disable feature modules', to: '/config/module' },
]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Setup wizard</CardTitle>
      <CardDescription>Complete the configuration steps below. Each step saves to the backend config service.</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-3 md:grid-cols-2">
      <div v-for="(s, i) in steps" :key="i" class="flex items-center gap-3 rounded-lg border p-4">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{{ i + 1 }}</div>
        <div class="flex-1">
          <div class="font-medium">{{ s.title }}</div>
          <div class="text-xs text-muted-foreground">{{ s.desc }}</div>
        </div>
        <Button variant="outline" size="sm" @click="router.push(s.to)">Configure</Button>
      </div>
    </CardContent>
  </Card>
</template>
