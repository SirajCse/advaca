<script setup>
// /user/preference — old Profile/Preference.vue 1:1: locale / date format /
// time format / timezone selects loaded from the SAFE config pre-requisite
// (config/?data=dateFormats,timeFormats,locales,timezones — WITH the type/data
// param; the bare config/pre-requisite endpoint 500s on the untouched backend).
// Date & time options preview via the selected format. Saves via
// POST user/preference, then refreshes the user.
import { computed, onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/stores/auth'
import { trans } from '@/spec/lang'
import http from '@/lib/http'

const auth = useAuthStore()
const processing = ref(false)
const errors = ref({})
const options = ref({ dateFormats: [], timeFormats: [], locales: [], timezones: [] })

const form = reactive({
  locale: '',
  dateFormat: '',
  timeFormat: '',
  timezone: '',
})

function fmtPreview(format) {
  if (!format) return ''
  try {
    // PHP-style formats commonly stored as config (d/m/Y, h:i A ...) — render
    // an example using the current date/time
    const d = new Date()
    const pad = (n) => String(n).padStart(2, '0')
    let s = String(format)
    s = s.replace(/d/g, pad(d.getDate())).replace(/m/g, pad(d.getMonth() + 1)).replace(/Y/g, d.getFullYear())
      .replace(/h/g, pad(d.getHours() % 12 || 12)).replace(/H/g, pad(d.getHours()))
      .replace(/i/g, pad(d.getMinutes())).replace(/s/g, pad(d.getSeconds()))
      .replace(/A/g, d.getHours() >= 12 ? 'PM' : 'AM').replace(/a/g, d.getHours() >= 12 ? 'pm' : 'am')
    return s
  } catch {
    return format
  }
}

onMounted(async () => {
  try {
    const { data } = await http.get('/app/config', { params: { data: 'dateFormats,timeFormats,locales,timezones' } })
    const pay = data?.data || data || {}
    options.value = {
      dateFormats: pay.dateFormats || [],
      timeFormats: pay.timeFormats || [],
      locales: pay.locales || [],
      timezones: pay.timezones || [],
    }
  } catch { /* degrade with empty lists */ }
  if (!auth.ready) await auth.init()
  const pref = auth.user?.preference?.system || auth.user?.preference || {}
  form.locale = pref.locale ?? ''
  form.dateFormat = pref.date_format ?? pref.dateFormat ?? ''
  form.timeFormat = pref.time_format ?? pref.timeFormat ?? ''
  form.timezone = pref.timezone ?? ''
})

const localeOptions = computed(() => options.value.locales.map((o) => ({
  value: o.uuid ?? o.value ?? o.name, label: o.name ?? o.label ?? String(o.uuid ?? o.value ?? ''),
})))
const dateOptions = computed(() => options.value.dateFormats.map((o) => ({
  value: o.value ?? o.uuid, label: `${fmtPreview(o.value ?? o.uuid)} (${o.label ?? ''})`.trim(),
})))
const timeOptions = computed(() => options.value.timeFormats.map((o) => ({
  value: o.value ?? o.uuid, label: `${fmtPreview(o.value ?? o.uuid)} (${o.label ?? ''})`.trim(),
})))
const tzOptions = computed(() => options.value.timezones.map((o) => ({
  value: o.value ?? o.name ?? o, label: o.label ?? o.name ?? String(o.value ?? o),
})))

async function save() {
  processing.value = true
  errors.value = {}
  try {
    await http.post('/app/user/preference', {
      locale: form.locale || null,
      date_format: form.dateFormat || null,
      time_format: form.timeFormat || null,
      timezone: form.timezone || null,
    })
    Swal.fire({
      icon: 'success', title: 'Success', text: 'Preference saved.',
      toast: true, position: 'top-end', timer: 3000, showConfirmButton: false,
    })
    await auth.fetchUser()
  } catch (e) {
    errors.value = e?.response?.data?.errors || {}
  } finally {
    processing.value = false
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="save">
    <div class="grid gap-4 md:grid-cols-2">
      <div class="space-y-1.5">
        <Label for="pref-locale">{{ trans('user.preference.props.locale') !== 'user.preference.props.locale' ? trans('user.preference.props.locale') : 'Locale' }}</Label>
        <select id="pref-locale" v-model="form.locale" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm dark:bg-background">
          <option value="">Select</option>
          <option v-for="o in localeOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div class="space-y-1.5">
        <Label for="pref-date">{{ trans('user.preference.props.date_format') !== 'user.preference.props.date_format' ? trans('user.preference.props.date_format') : 'Date format' }}</Label>
        <select id="pref-date" v-model="form.dateFormat" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm dark:bg-background">
          <option value="">Select</option>
          <option v-for="o in dateOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div class="space-y-1.5">
        <Label for="pref-time">{{ trans('user.preference.props.time_format') !== 'user.preference.props.time_format' ? trans('user.preference.props.time_format') : 'Time format' }}</Label>
        <select id="pref-time" v-model="form.timeFormat" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm dark:bg-background">
          <option value="">Select</option>
          <option v-for="o in timeOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div class="space-y-1.5">
        <Label for="pref-tz">{{ trans('user.preference.props.timezone') !== 'user.preference.props.timezone' ? trans('user.preference.props.timezone') : 'Timezone' }}</Label>
        <select id="pref-tz" v-model="form.timezone" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm dark:bg-background">
          <option value="">Select</option>
          <option v-for="o in tzOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
    </div>
    <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save' }}</Button>
  </form>
</template>
