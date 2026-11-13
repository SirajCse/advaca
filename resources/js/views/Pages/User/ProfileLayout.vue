<script setup>
// /user — Profile layout (old "User" page, User-BIKn1Cz6 chunk):
// cover image + round avatar + name/email header, tab bar
// (Profile | Account | Avatar | Preference | Change Password), then the
// active tab inside a 1/3 detail panel (Name/Email/Username) + 2/3 router-view.
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { trans } from '@/spec/lang'

const route = useRoute()
const auth = useAuthStore()

const avatar = computed(() => auth.user?.avatar || '')
const profileName = computed(() => {
  const p = auth.user?.profile || {}
  return p.name || [p.first_name, p.last_name].filter(Boolean).join(' ') || auth.user?.username || '—'
})
const email = computed(() => auth.user?.email || '')
const username = computed(() => auth.user?.username || '')

const tabs = [
  { label: trans('user.profile.profile') !== 'user.profile.profile' ? trans('user.profile.profile') : 'Profile', route: 'UserProfile' },
  { label: trans('user.profile.account') !== 'user.profile.account' ? trans('user.profile.account') : 'Account', route: 'UserAccount' },
  { label: trans('user.avatar') !== 'user.avatar' ? trans('user.avatar') : 'Avatar', route: 'UserAvatar' },
  { label: trans('user.preference.preference') !== 'user.preference.preference' ? trans('user.preference.preference') : 'Preference', route: 'UserPreference' },
  { label: trans('auth.password.change_password') !== 'auth.password.change_password' ? trans('auth.password.change_password') : 'Change Password', route: 'UserPassword' },
]
</script>

<template>
  <div class="space-y-4">
    <PageHeader :title="String(route.meta.pageTitle || 'Profile')" :navs="[{ label: 'User', path: '/user' }]" />

    <ParentTransition :visibility="true">
      <article>
        <!-- cover -->
        <div class="overflow-hidden rounded-t-lg bg-black">
          <img class="h-32 w-full object-cover lg:h-48" src="/images/user-cover.jpeg" alt="" @error="$event.target.style.display = 'none'">
          <div class="mx-auto max-w-full px-4 pb-4 sm:px-6 lg:px-8">
            <div class="-mt-12 flex flex-wrap items-end gap-4 sm:-mt-16 sm:flex sm:items-end">
              <img
                v-if="avatar"
                :src="avatar"
                alt=""
                class="h-24 w-24 rounded-full object-cover ring-4 ring-white sm:h-32 sm:w-32 dark:ring-black"
              >
              <div
                v-else
                class="flex h-24 w-24 items-center justify-center rounded-full bg-primary/90 text-3xl font-bold text-white ring-4 ring-white sm:h-32 sm:w-32 dark:ring-black"
              >
                {{ profileName.slice(0, 1).toUpperCase() }}
              </div>
              <div class="mb-1 min-w-0">
                <h1 class="truncate text-2xl font-bold">{{ profileName }}</h1>
                <span class="text-md text-muted-foreground">{{ email }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- tab bar -->
        <div class="rounded-t-none border-x border-b bg-white pt-2 dark:bg-dark-header sm:rounded-bl-lg sm:rounded-br-lg">
          <nav class="flex flex-wrap border-b border-gray-200 px-4 sm:px-6 dark:border-gray-700 lg:px-8" aria-label="Tabs">
            <router-link
              v-for="t in tabs"
              :key="t.route"
              :to="{ name: t.route }"
              class="whitespace-nowrap px-4 py-2 text-sm font-medium"
              :class="route.name === t.route
                ? 'rounded-t-lg bg-white text-black dark:bg-dark-header dark:border dark:border-b-0 dark:border-gray-700 dark:text-gray-400'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-secondary dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-500'"
              aria-current="page"
            >
              {{ t.label }}
            </router-link>
          </nav>

          <!-- detail panel + tab content -->
          <div class="flex flex-col md:flex-row">
            <div class="hidden w-full border-gray-200 px-4 py-6 dark:border-gray-700 sm:px-6 md:block md:w-1/3 md:border-r lg:px-8">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">{{ trans('user.profile.props.name') !== 'user.profile.props.name' ? trans('user.profile.props.name') : 'Name' }}</dt>
                  <dd class="mt-1 truncate text-sm text-gray-900 dark:text-gray-400">{{ profileName }}</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">{{ trans('user.profile.props.email') !== 'user.profile.props.email' ? trans('user.profile.props.email') : 'Email' }}</dt>
                  <dd class="mt-1 truncate text-sm text-gray-900 dark:text-gray-400">{{ email }}</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">{{ trans('user.profile.props.username') !== 'user.profile.props.username' ? trans('user.profile.props.username') : 'Username' }}</dt>
                  <dd class="mt-1 truncate text-sm text-gray-900 dark:text-gray-400">{{ username }}</dd>
                </div>
              </dl>
            </div>
            <div class="w-full px-4 py-6 sm:px-6 md:w-2/3 lg:px-8">
              <router-view />
            </div>
          </div>
        </div>
      </article>
    </ParentTransition>
  </div>
</template>
