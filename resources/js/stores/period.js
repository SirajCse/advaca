import { defineStore } from 'pinia'

/**
 * Shared state for the academic-period picker.
 *
 * The modal is forced while the logged-in user has no current period (the
 * backend's UserConfig middleware answers 422 "choose_period_info" for every
 * non-whitelisted call then). It can also be opened on demand from the header
 * button, and dismissed for the session / for the device:
 *
 * - "Skip for now"        -> session only (cleared on reload)
 * - "Do not ask again"    -> localStorage advaca-period-modal=skip (device)
 *
 * Skipping never breaks the app: whitelisted pages keep working (dashboard,
 * departments, programs, sessions, periods, notifications …) and every other
 * call surfaces the backend's own "choose an academic period" toast, while the
 * header button re-opens this picker at any time.
 */
export const usePeriodStore = defineStore('period', {
  state: () => ({
    pickerOpen: false,
    // session-level "skip for now" flag (resets on every full page load)
    skipped: false,
    // device-level "do not ask again" flag (survives reloads)
    dontAsk: localStorage.getItem('advaca-period-modal') === 'skip',
    // display name of the user's current period (persisted at select time)
    currentName: localStorage.getItem('advaca-period-name') || '',
  }),
  actions: {
    openPicker() {
      this.pickerOpen = true
    },
    closePicker() {
      this.pickerOpen = false
    },
    skipSession() {
      this.skipped = true
      this.pickerOpen = false
    },
    skipDevice() {
      this.dontAsk = true
      localStorage.setItem('advaca-period-modal', 'skip')
      this.skipped = true
      this.pickerOpen = false
    },
    setCurrentName(name) {
      this.currentName = name || ''
      if (name) localStorage.setItem('advaca-period-name', name)
    },
  },
})
