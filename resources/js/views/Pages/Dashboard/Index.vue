<script setup>
import { onMounted, ref } from 'vue'
import http from '@/lib/http'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import PageHeader from '@/views/Components/PageHeader.vue'
import { fmtDate } from '@/lib/helpers'

const stats = ref(null)
const studentChart = ref(null)
const schedule = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const [stat, chart, sched] = await Promise.allSettled([
      http.get('/app/dashboard/stat'),
      http.get('/app/dashboard/student-chart-data'),
      http.get('/app/dashboard/schedule'),
    ])
    if (stat.status === 'fulfilled') stats.value = stat.value.data
    if (chart.status === 'fulfilled') studentChart.value = chart.value.data
    if (sched.status === 'fulfilled') schedule.value = sched.value.data?.data ?? sched.value.data ?? []
    if (stat.status === 'rejected' && chart.status === 'rejected') error.value = true
  } catch {
    error.value = true
  }
  loading.value = false
})

const statEntries = () => Object.entries(stats.value || {}).slice(0, 8)
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Dashboard" :navs="[{ label: 'Home' }, { label: 'Dashboard' }]" />

    <Alert v-if="error">
      <AlertTitle>Welcome to AdvAca</AlertTitle>
      <AlertDescription>
        Dashboard statistics require the <code>dashboard:stat</code> permission. Use the sidebar to explore modules.
      </AlertDescription>
    </Alert>

    <div v-if="loading" class="grid gap-4 md:grid-cols-4">
      <Skeleton v-for="i in 4" :key="i" class="h-28 w-full" />
    </div>

    <div v-else-if="stats" class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Card v-for="[k, v] in statEntries()" :key="k">
        <CardHeader class="pb-2">
          <CardTitle class="text-xs font-medium uppercase tracking-wide text-muted-foreground">{{ k.replace(/_/g, ' ') }}</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ typeof v === 'object' ? (v?.count ?? v?.total ?? '-') : v }}</div>
        </CardContent>
      </Card>
    </div>

    <Card v-if="schedule.length">
      <CardHeader><CardTitle class="text-base">Today's schedule</CardTitle></CardHeader>
      <CardContent class="space-y-2">
        <div v-for="(s, i) in schedule.slice(0, 8)" :key="i" class="flex items-center justify-between rounded-md border p-3 text-sm">
          <span class="font-medium">{{ s.course_name || s.batch_name || s.subject_name || s.name || 'Session' }}</span>
          <span class="text-muted-foreground">{{ s.start_time || s.time || '' }} {{ s.class_timing || '' }}</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
