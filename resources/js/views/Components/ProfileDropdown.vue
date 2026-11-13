<script setup>
// Full profile dropdown — 1:1 with the old app's ProfileDropdown:
// greeting header (Welcome {name}! / email / team), then menu items with the
// same route targets and separators: Config, Choose Dark/Light Mode,
// Organization, Role & Permission, Report, Device, Attendance QR Code,
// Profile, User Preference, Change Password, — Failed Login Attempt,
// Clear Cache (new tab), Download Format, Support, Logout.
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import { trans } from '@/spec/lang'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { KeyRound, LogOut, Moon, Sun, UserCircle } from 'lucide-vue-next'
import http from '@/lib/http'

const auth = useAuthStore()
const theme = useThemeStore()
const router = useRouter()

async function doLogout() {
  await auth.logout()
  router.push('/login')
}

// old app: theme toggle persists via POST user/preference { display } and the
// response user refreshes the preference store — local toggle + best-effort
// persist so the choice survives re-login on the same account.
async function toggleTheme() {
  theme.toggle()
  try {
    await http.post('/app/user/preference', { display: theme.dark ? 'dark' : 'light' })
  } catch { /* stay local-only when offline */ }
}

// old ProfileDropdown shows Config ONLY on small screens (screenSize.small)
const isSmallScreen = () => (typeof window !== 'undefined' ? window.innerWidth <= 768 : false)

const name = computed(() => auth.user?.profile?.name || auth.user?.username || 'Admin')
const email = computed(() => auth.user?.email || '')
const teamName = computed(() => auth.user?.team?.name || auth.currentPeriod?.team_name || '')
const initials = computed(() => name.value.slice(0, 2).toUpperCase())

// Old app: menu items show when the user holds the permission (or is admin —
// the backend grants admin the wildcard). An empty/absent permission list on
// the user object means "no restriction" (admin@example.com default), so the
// items stay visible.
const can = (perm) => !perm || !auth.user?.permissions?.length
  || auth.user.permissions.includes('*') || auth.user.permissions.includes(perm)
const isAdmin = computed(() => {
  const roles = auth.user?.roles || []
  return roles.includes('admin') || auth.user?.is_admin === true
})

function go(routeName, params) {
  if (router.hasRoute(routeName)) router.push({ name: routeName, params })
  else router.push('/')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar class="h-8 w-8">
          <AvatarImage v-if="auth.user?.avatar" :src="auth.user.avatar" :alt="name" />
          <AvatarFallback>{{ initials }}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-64">
      <DropdownMenuLabel class="space-y-0.5">
        <div class="text-sm font-semibold">{{ trans('general.greeting_message').replace(':name', name) }}</div>
        <div class="text-xs font-normal text-muted-foreground">{{ email }}</div>
        <div v-if="teamName" class="text-xs font-normal text-muted-foreground">{{ teamName }}</div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuItem v-if="can('config:store') && isSmallScreen()" :disabled="$route.name === 'ConfigGeneral'" @click="go('Config')">
        {{ trans('config.config') }}
      </DropdownMenuItem>

      <DropdownMenuItem @click="toggleTheme">
        <template v-if="theme.dark">
          {{ trans('global.choose').replace(':attribute', trans('general.light_mode')) }}
          <Sun class="ml-auto h-4 w-4" />
        </template>
        <template v-else>
          {{ trans('global.choose').replace(':attribute', trans('general.dark_mode')) }}
          <Moon class="ml-auto h-4 w-4" />
        </template>
      </DropdownMenuItem>

      <DropdownMenuItem v-if="can('organization:manage')" :disabled="$route.name === 'OrganizationList'" @click="go('Organization')">
        {{ trans('organization.organization') }}
      </DropdownMenuItem>

      <DropdownMenuItem v-if="can('team:manage')" :disabled="$route.name === 'TeamConfigRole'" @click="go('TeamConfigRole', { uuid: auth.user?.team?.uuid || auth.user?.team_id || '' })">
        {{ trans('config.role_and_permission') }}
      </DropdownMenuItem>

      <DropdownMenuItem v-if="can('access:reports')" as-child>
        <a href="/reports">{{ trans('general.report') }}</a>
      </DropdownMenuItem>

      <DropdownMenuItem v-if="isAdmin" :disabled="$route.name === 'DeviceList'" @click="go('DeviceList')">
        {{ trans('device.device') }}
      </DropdownMenuItem>

      <DropdownMenuItem :disabled="$route.name === 'AttendanceQrCode'" @click="go('AttendanceQrCode')">
        {{ trans('attendance.qr_code') }}
      </DropdownMenuItem>

      <DropdownMenuItem :disabled="$route.name === 'UserProfile'" @click="go('UserProfile')">
        <UserCircle class="mr-2 h-4 w-4" />{{ trans('user.profile.profile') }}
      </DropdownMenuItem>

      <DropdownMenuItem :disabled="$route.name === 'UserPreference'" @click="go('UserPreference')">
        {{ trans('user.preference.preference') }}
      </DropdownMenuItem>

      <DropdownMenuItem :disabled="$route.name === 'UserPassword'" @click="go('UserPassword')">
        <KeyRound class="mr-2 h-4 w-4" />{{ trans('auth.password.change_password') }}
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem v-if="isAdmin" :disabled="$route.name === 'FailedLoginAttempt'" @click="go('FailedLoginAttempt')">
        {{ trans('auth.failed_login_attempt') }}
      </DropdownMenuItem>

      <DropdownMenuItem v-if="isAdmin" as-child>
        <a href="/cmd/clear-cache" target="_blank" rel="noopener">Clear Cache</a>
      </DropdownMenuItem>

      <DropdownMenuItem v-if="isAdmin" as-child>
        <a href="/download/formats">{{ trans('general.download_format') }}</a>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem variant="destructive" @click="doLogout">
        <LogOut class="mr-2 h-4 w-4" />{{ trans('auth.logout') !== 'auth.logout' ? trans('auth.logout') : 'Logout' }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
