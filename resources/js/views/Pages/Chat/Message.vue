<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'

const route = useRoute()
const messages = ref([])
const chatUuid = ref(route.query.chat || '')
const userUuid = ref(route.query.user || '')
const text = ref('')
const loading = ref(true)

async function ensureChat() {
  if (chatUuid.value) return
  try {
    const { data } = await http.post('/app/chat', { user_uuid: userUuid.value })
    chatUuid.value = data?.chat?.uuid || data?.uuid || ''
  } catch {}
}

async function load() {
  loading.value = true
  await ensureChat()
  if (chatUuid.value) {
    try {
      const { data } = await http.get(`/app/chat/${chatUuid.value}/messages`)
      messages.value = data?.data ?? data ?? []
      await http.post(`/app/chat/${chatUuid.value}/read`, {})
    } catch {}
  }
  loading.value = false
  await nextTick()
}

async function send() {
  if (!text.value.trim() || !chatUuid.value) return
  try {
    await http.post(`/app/chat/${chatUuid.value}/messages`, { message: text.value })
    text.value = ''
    await load()
  } catch {}
}

onMounted(load)
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Messages" :navs="[{ label: 'Communication', path: '/chat' }, { label: 'Messages' }]" />
    <Card class="flex h-[65vh] flex-col">
      <CardHeader class="border-b"><CardTitle class="text-base">Conversation</CardTitle></CardHeader>
      <CardContent class="flex-1 space-y-3 overflow-y-auto p-4">
        <div v-if="loading" class="text-center text-sm text-muted-foreground">Loading messages…</div>
        <div v-for="(m, i) in messages" :key="m.uuid || i" class="max-w-[70%] rounded-lg px-3 py-2 text-sm" :class="m.is_mine || m.self ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted'">
          {{ m.message || m.text || m.body }}
        </div>
        <div v-if="!loading && !messages.length" class="text-center text-sm text-muted-foreground">No messages yet. Say hello!</div>
      </CardContent>
      <div class="flex gap-2 border-t p-3">
        <Input v-model="text" placeholder="Type a message…" @keyup.enter="send" />
        <Button :disabled="!text.trim()" @click="send">Send</Button>
      </div>
    </Card>
  </div>
</template>
