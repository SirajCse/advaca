<script setup>
import { onMounted, ref } from 'vue'
import { getUserScope, updateScope } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'
import http from '@/lib/http'

const auth = useAuthStore()
const teams = ref([])
const periods = ref([])
const selectedTeam = ref(auth.user?.current_team_id || '')
const selectedPeriod = ref('')

onMounted(async () => {
  try {
    const { data } = await getUserScope()
    teams.value = (data.teams || []).map((t) => ({ value: String(t.id), label: t.name }))
    periods.value = (data.periods || []).map((p) => ({ value: String(p.id), label: p.name }))
  } catch {}
})

async function saveScope() {
  try {
    await http.post('/users/scope', {
      scope: selectedPeriod.value ? 'all' : 'current_team',
      team_id: selectedTeam.value,
      period_id: selectedPeriod.value,
    })
    await auth.fetchUser()
    window.location.reload()
  } catch {}
}
</script>

<template>
  <div class="flex items-center gap-2 text-sm">
    <select v-model="selectedTeam" class="h-8 rounded-md border bg-background px-2 text-xs">
      <option v-for="t in teams" :key="t.value" :value="t.value">{{ t.label }}</option>
    </select>
    <select v-model="selectedPeriod" class="h-8 rounded-md border bg-background px-2 text-xs">
      <option value="">Period</option>
      <option v-for="p in periods" :key="p.value" :value="p.value">{{ p.label }}</option>
    </select>
    <button class="rounded-md border px-2 py-1 text-xs hover:bg-accent" @click="saveScope">Apply</button>
  </div>
</template>
