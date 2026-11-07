<script setup>
import { onMounted, ref } from 'vue'
import { getNotifications, readAllNotifications, readNotification } from '@/api/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { fmtDateTime } from '@/lib/helpers'

const items = ref([])
const loading = ref(true)

async function load() {
  loading.value = true
  try {
    const { data } = await getNotifications({ per_page: 50 })
    items.value = data?.data ?? []
  } catch {
    items.value = []
  }
  loading.value = false
}

async function markRead(n) {
  try {
    await readNotification(n.uuid || n.id)
    await load()
  } catch {}
}

async function markAll() {
  try {
    await readAllNotifications()
    await load()
  } catch {}
}

onMounted(load)
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Notifications" :navs="[{ label: 'User' }, { label: 'Notifications' }]">
      <Button variant="outline" size="sm" @click="markAll">Mark all read</Button>
    </PageHeader>
    <ParentTransition appear :visibility="!loading">
      <Card>
        <CardContent class="divide-y p-0">
          <div v-for="n in items" :key="n.uuid || n.id" class="flex items-start justify-between gap-4 p-4">
            <div>
              <div class="font-medium" :class="{ 'opacity-60': n.read_at }">{{ n.title || 'Notification' }}</div>
              <div class="text-sm text-muted-foreground">{{ n.description || n.message || '' }}</div>
              <div class="mt-1 text-xs text-muted-foreground">{{ fmtDateTime(n.created_at) }}</div>
            </div>
            <Button v-if="!n.read_at" variant="outline" size="xs" @click="markRead(n)">Mark read</Button>
          </div>
          <div v-if="!items.length" class="p-10 text-center text-muted-foreground">No notifications yet.</div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
