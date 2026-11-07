<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { KeyRound, LogOut, UserCircle } from 'lucide-vue-next'

const auth = useAuthStore()
const router = useRouter()

async function doLogout() {
  await auth.logout()
  router.push('/login')
}

const initials = (auth.user?.profile?.name || auth.user?.username || 'U').slice(0, 2).toUpperCase()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar class="h-8 w-8">
          <AvatarImage v-if="auth.user?.avatar" :src="auth.user.avatar" :alt="auth.user?.profile?.name" />
          <AvatarFallback>{{ initials }}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-56">
      <DropdownMenuLabel>
        <div class="font-medium">{{ auth.user?.profile?.name || auth.user?.username }}</div>
        <div class="text-xs font-normal text-muted-foreground">{{ auth.user?.email }}</div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="router.push('/profile')">
        <UserCircle class="h-4 w-4" />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem @click="router.push('/profile/password')">
        <KeyRound class="h-4 w-4" />
        Change password
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive" @click="doLogout">
        <LogOut class="h-4 w-4" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
