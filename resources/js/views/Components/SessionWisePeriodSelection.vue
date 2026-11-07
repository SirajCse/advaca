<script setup>
import { onMounted, ref } from 'vue'
import { pickPreReq } from '@/lib/helpers'
import http from '@/lib/http'
import { updatePreference } from '@/api/auth'

const options = ref([])
const selected = ref('')

onMounted(async () => {
  try {
    const { data } = await http.get('/periods/pre-requisite')
    options.value = pickPreReq(data, 'period')
    const current = data.current_period_id || data.period_id
    selected.value = String(current || '')
  } catch {}
})

async function changePeriod() {
  try {
    await updatePreference({ 'academic.period_id': selected.value })
    window.location.reload()
  } catch {}
}
</script>

<template>
  <select
    v-model="selected"
    class="h-8 rounded-md border bg-background px-2 text-xs"
    @change="changePeriod"
  >
    <option value="">Select period</option>
    <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
  </select>
</template>
