<script setup>
/**
 * PeriodSelection — the global academic-period picker.
 *
 * The untouched backend (App\Http\Middleware\UserConfig) answers 422
 * "choose_period_info" for every app API call outside its whitelist while the
 * logged-in user has no current academic period. This picker therefore:
 *
 * - opens FORCED when the user has no current period and has not dismissed it,
 * - can be opened any time from the header period button,
 * - lists GET /app/academic/periods (whitelisted by the middleware) with the
 *   default period pre-selected,
 * - saves with POST /app/academic/periods/{uuid}/select (permission
 *   period:change — the backend returns permissions ['*'] for admins, which
 *   auth.can() honours) and re-fetches the user with refresh_period=true,
 * - NEVER dead-ends: "Skip for now" (session) and "Do not ask again on this
 *   device" are always available, plus a Retry button when loading fails.
 */
import { computed, onMounted, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { usePeriodStore } from '@/stores/period'
import http from '@/lib/http'
import { Button } from '@/components/ui/button'
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CalendarClock, Loader2 } from 'lucide-vue-next'

const auth = useAuthStore()
const periodStore = usePeriodStore()
const periods = ref([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const selected = ref('')
const dontAskChecked = ref(false)

// dismissed when the visitor skipped for the session OR asked the device to
// stop asking; the header button can always re-open the picker on demand.
const dismissed = computed(() => periodStore.dontAsk || periodStore.skipped)
const forced = computed(() => auth.needsPeriod && !dismissed.value)
const open = computed(() => forced.value || periodStore.pickerOpen)

// The backend itself gates POST periods/{uuid}/select with permission
// period:change — but the LIST is whitelisted for every signed-in user, so
// everyone sees the periods and can try to select (a non-manager gets the
// backend's own clear 403 message instead of a silent dead-end).
const canClose = computed(() => !forced.value)

async function load() {
  if (!open.value) return
  loading.value = true
  error.value = ''
  try {
    const { data } = await http.get('/app/academic/periods', { params: { per_page: 100 } })
    const rows = Array.isArray(data) ? data : (data?.data || data?.records || [])
    periods.value = rows
    const current = rows.find((p) => p.uuid === auth.currentPeriodId)
      || rows.find((p) => p.id === auth.currentPeriodId)
    if (current) periodStore.setCurrentName(current.name || current.code_number || '')
    // preselect: the user's current period, else the team default, else the
    // first row — "Continue" is ALWAYS usable in a single click.
    const def = current || rows.find((p) => p.is_default) || rows[0]
    selected.value = def ? (def.uuid || def.id) : ''
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
    // remember the display name for the header label before the reload wipes
    // the in-memory store
    const row = periods.value.find((p) => (p.uuid || p.id) === selected.value)
    if (row) periodStore.setCurrentName(row.name || row.code_number || '')
    await auth.selectPeriod(selected.value)
    // full reload so every bootstrapped piece (config, page data) re-runs
    // against the newly selected period — same as the original UI.
    window.location.reload()
  } catch (e) {
    const status = e?.response?.status
    if (status === 401) {
      error.value = 'Your session has expired. Please sign in again.'
    } else if (status === 403) {
      error.value = 'You do not have permission to change the period. Please contact your administrator.'
    } else {
      error.value = e?.response?.data?.message || 'Failed to select the period'
    }
    saving.value = false
  }
}

function skip() {
  if (dontAskChecked.value) periodStore.skipDevice()
  else periodStore.skipSession()
}

// while the picker is forced (no period + not dismissed) the dialog cannot be
// closed by outside clicks / escape; when opened from the header it can.
function onInteractOutside(e) {
  if (!canClose.value) e.preventDefault()
}
function onEscapeKeyDown(e) {
  if (!canClose.value) e.preventDefault()
}

// (re)load whenever the dialog opens
watch(open, (v) => { if (v) load() })

onMounted(() => {
  load()
  dontAskChecked.value = periodStore.dontAsk
})
</script>

<template>
  <Dialog
    :open="open"
    @update:open="(v) => { if (!v && canClose) periodStore.closePicker() }"
  >
    <DialogContent
      class="sm:max-w-md"
      :hide-close="!canClose"
      @interact-outside="onInteractOutside"
      @escape-key-down="onEscapeKeyDown"
    >
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

        <div class="max-h-72 space-y-1.5 overflow-y-auto pr-1">
          <button
            v-for="p in periods"
            :key="p.uuid || p.id"
            type="button"
            class="flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
            :class="selected === (p.uuid || p.id) ? 'border-primary bg-primary/5' : ''"
            @click="selected = p.uuid || p.id"
          >
            <span class="font-medium">{{ p.name || p.code_number || p.uuid }}</span>
            <span class="text-xs text-muted-foreground">
              {{ [p.code, p.alias, p.session?.name].filter(Boolean).join(' · ') }}
            </span>
          </button>
          <p v-if="!periods.length && !error" class="py-6 text-center text-sm text-muted-foreground">
            No periods found. Ask your administrator to create one under Academic &rarr; Period.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <Button class="w-full" :disabled="!selected || saving" @click="submit">
            <Loader2 v-if="saving" class="mr-2 h-4 w-4 animate-spin" />
            Continue
          </Button>

          <div class="flex items-center gap-2">
            <Button variant="ghost" class="flex-1" :disabled="saving" @click="skip">
              Skip for now
            </Button>
            <Button v-if="error" variant="outline" class="flex-1" :disabled="loading" @click="load">
              Retry
            </Button>
          </div>

          <label class="flex items-center gap-2 text-xs text-muted-foreground">
            <input v-model="dontAskChecked" type="checkbox" class="accent-primary" />
            Do not ask again on this device (you can still pick a period from the header)
          </label>
        </div>
      </template>
    </DialogContent>
  </Dialog>
</template>
