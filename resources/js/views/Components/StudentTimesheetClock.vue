<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import http from '@/lib/http'

const active = ref(false)
const busy = ref(false)

async function clock(type) {
  busy.value = true
  try {
    await http.post('/app/student/timesheet/clock', { type })
    active.value = type === 'in'
  } catch {}
  busy.value = false
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Button v-if="!active" :disabled="busy" size="sm" @click="clock('in')">Clock In</Button>
    <Button v-else :disabled="busy" variant="destructive" size="sm" @click="clock('out')">Clock Out</Button>
  </div>
</template>
