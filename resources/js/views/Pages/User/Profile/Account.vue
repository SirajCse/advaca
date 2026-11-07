<script setup>
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const rows = computed(() => {
  const u = auth.user || {}
  return [
    ['Username', u.username],
    ['Email', u.email],
    ['Status', u.status],
    ['Roles', (u.roles || []).join(', ')],
    ['Team', u.current_team_id],
    ['Scope', u.scope],
  ]
})
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Account" :navs="[{ label: 'User' }, { label: 'Account' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Account overview</CardTitle>
        <CardDescription>Read-only account information</CardDescription>
      </CardHeader>
      <CardContent>
        <dl class="grid gap-4 md:grid-cols-2">
          <div v-for="[k, v] in rows" :key="k" class="space-y-1">
            <dt class="text-xs uppercase tracking-wide text-muted-foreground">{{ k }}</dt>
            <dd class="text-sm font-medium">{{ v || '-' }}</dd>
          </div>
        </dl>
        <div v-if="auth.user?.permissions?.length" class="mt-6 flex flex-wrap gap-2">
          <Badge v-for="p in auth.user.permissions.slice(0, 20)" :key="p" variant="secondary">{{ p }}</Badge>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
