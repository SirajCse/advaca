<script setup>
import { onMounted, ref } from 'vue'
import { getNotifications } from '@/api/auth'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Bell } from 'lucide-vue-next'

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await getNotifications({ per_page: 10 })
    items.value = data?.data || []
  } catch {
    items.value = []
  }
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" class="relative">
        <Bell class="h-5 w-5" />
        <span v-if="items.length" class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-72">
      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <template v-if="items.length">
        <DropdownMenuItem v-for="n in items" :key="n.uuid || n.id" class="flex-col items-start gap-0.5">
          <span class="text-sm font-medium">{{ n.title || 'Notification' }}</span>
          <span class="text-xs text-muted-foreground">{{ n.description || n.message || '' }}</span>
        </DropdownMenuItem>
      </template>
      <div v-else class="px-2 py-6 text-center text-sm text-muted-foreground">No notifications</div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
