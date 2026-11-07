<script setup>
/**
 * PeriodSelection — mirrors the original UI's global period picker.
 *
 * The untouched backend (App\Http\Middleware\UserConfig) answers 422
 * "choose_period_info" for every app API call outside its whitelist while the
 * logged-in user has no current academic period. The original frontend shows a
 * non-dismissable period selector right after login in that case; this modal
 * reproduces that behavior with the shadcn-vue design system.
 *
 * Data source: GET /app/academic/periods (whitelisted by the middleware, so it
 * is callable without a selected period). Selection: POST
 * /app/academic/periods/{uuid}/select, then the user resource is re-fetched
 * with refresh_period=true so current_period_id propagates.
 */
import { computed, onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CalendarClock, Loader2 } from 'lucide-vue-next'

const auth = useAuthStore()
const periods = ref([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const selected = ref('')

const open = computed(() => auth.needsPeriod)

const canManage = computed(() => {
  // period:change permission gates POST periods/{uuid}/select; admins and
  // super admins always can. Roles without it get their period auto-assigned
  // at login (ValidateRole), so the picker rarely appears for them.
  if (!auth.user) return false
  if (auth.isSuperAdmin) return true
  return (auth.user.permissions || []).includes('period:change')
})

async function load() {
  if (!open.value || periods.value.length) return
  loading.value = true
  error.value = ''
  try {
    const { data } = await http.get('/app/academic/periods', { params: { per_page: 100 } })
    const rows = Array.isArray(data) ? data : (data?.data || data?.records || [])
    periods.value = rows
    const def = rows.find((p) => p.is_default)
    if (def) selected.value = def.uuid
  } catch (e) {
    error.value = e?.response?.data?.message || 'Failed to load periods'
  } finally {
    loading.value = false
  }
}

async function submit() {
  if (!selected.value) return
  saving.value = true
  error.value = ''
  try {
    await auth.selectPeriod(selected.value)
    // full reload so every bootstrapped piece (config, page data) re-runs
    // against the newly selected period — same as the original UI.
    window.location.reload()
  } catch (e) {
    const status = e?.response?.status
    error.value = e?.response?.data?.message
      || (status === 403
        ? 'You do not have permission to change the period. Please contact your administrator.'
        : 'Failed to select the period')
    saving.value = false
  }
}

onMounted(load)
</script>

<template>
  <Dialog :open="open">
    <DialogContent class="sm:max-w-md" :hide-close="true" @interact-outside.prevent @escape-key-down.prevent>
      <DialogHeader>
        <DialogTitle class="flex items-center gap-2">
          <CalendarClock class="h-5 w-5 text-primary" />
          Select academic period
        </DialogTitle>
        <DialogDescription>
          Choose the academic period you want to work in. You can change it later from the
          Academic &rarr; Period page.
        </DialogDescription>
      </DialogHeader>

      <div v-if="loading" class="flex items-center justify-center py-8 text-muted-foreground">
        <Loader2 class="h-5 w-5 animate-spin" />
      </div>

      <template v-else>
        <Alert v-if="error" variant="destructive">
          <AlertDescription>{{ error }}</AlertDescription>
        </Alert>

        <div v-if="!canManage" class="rounded-md border bg-muted/40 p-3 text-sm text-muted-foreground">
          Your account works within the period assigned by your administrator.
        </div>

        <div v-else class="max-h-72 space-y-1.5 overflow-y-auto pr-1">
          <button
            v-for="p in periods"
            :key="p.uuid"
            type="button"
            class="flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
            :class="selected === p.uuid ? 'border-primary bg-primary/5' : ''"
            @click="selected = p.uuid"
          >
            <span class="font-medium">{{ p.name || p.code_number || p.uuid }}</span>
            <span class="text-xs text-muted-foreground">
              {{ [p.code, p.alias, p.session?.name].filter(Boolean).join(' · ') }}
            </span>
          </button>
          <p v-if="!periods.length" class="py-6 text-center text-sm text-muted-foreground">
            No periods found. Ask your administrator to create one under Academic &rarr; Period.
          </p>
        </div>

        <Button v-if="canManage" class="w-full" :disabled="!selected || saving" @click="submit">
          <Loader2 v-if="saving" class="mr-2 h-4 w-4 animate-spin" />
          Continue
        </Button>
      </template>
    </DialogContent>
  </Dialog>
</template>
