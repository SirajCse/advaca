<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/lib/http'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'

const router = useRouter()
const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await http.get('/app/chat/users')
    users.value = data?.data ?? data ?? []
  } catch {
    users.value = []
  }
  loading.value = false
})

function open(user) {
  router.push({ path: '/chat/message', query: { user: user.uuid || user.id } })
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Chat" :navs="[{ label: 'Communication' }, { label: 'Chat' }]" />
    <ParentTransition appear :visibility="!loading">
      <Card>
        <CardContent class="grid gap-2 p-4 md:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="u in users"
            :key="u.uuid || u.id"
            class="flex items-center gap-3 rounded-lg border p-3 text-left transition-colors hover:bg-accent"
            @click="open(u)"
          >
            <Avatar class="h-9 w-9">
              <AvatarFallback>{{ (u.name || 'U').slice(0, 2).toUpperCase() }}</AvatarFallback>
            </Avatar>
            <div>
              <div class="text-sm font-medium">{{ u.name || u.username }}</div>
              <div class="text-xs text-muted-foreground">{{ u.email || '' }}</div>
            </div>
          </button>
          <div v-if="!users.length" class="col-span-full p-10 text-center text-muted-foreground">
            Chat users are not available (chat module may be disabled).
          </div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
