<script setup>
import { onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import http from '@/lib/http'
import { pickPreReq } from '@/lib/helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import PageHeader from '@/views/Components/PageHeader.vue'
import FormSelect from '@/views/Components/FormSelect.vue'

const courses = ref([])
const batches = ref([])
const form = reactive({ date: new Date().toISOString().slice(0, 10), course: '', batch: '' })
const students = ref([])
const statuses = reactive({})
const processing = ref(false)

onMounted(async () => {
  try {
    const { data } = await http.get('/app/students/pre-requisite')
    courses.value = pickPreReq(data, 'course')
  } catch {}
})

async function loadBatches() {
  try {
    const { data } = await http.get('/app/academic/batches/pre-requisite', { params: { course: form.course } })
    batches.value = pickPreReq(data, 'batch')
  } catch {}
}

async function loadStudents() {
  try {
    const { data } = await http.get('/app/students', { params: { per_page: 100, batch: form.batch } })
    students.value = data?.data ?? []
    students.value.forEach((s) => (statuses[s.uuid] = 'present'))
  } catch {}
}

async function mark() {
  processing.value = true
  try {
    await http.post('/app/attendance/mark', {
      date: form.date,
      batch: form.batch,
      students: Object.entries(statuses).map(([uuid, status]) => ({ uuid, status })),
    })
    Swal.fire({ icon: 'success', title: 'Attendance saved', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch {}
  processing.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Attendance Assistant" :navs="[{ label: 'Attendance' }, { label: 'Assistant' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Mark attendance</CardTitle>
        <CardDescription>Select date, course and batch, then mark each student</CardDescription>
      </CardHeader>
      <CardContent class="space-y-5">
        <div class="grid gap-4 md:grid-cols-4">
          <div class="space-y-1.5">
            <label class="text-sm font-medium">Date</label>
            <Input v-model="form.date" type="date" />
          </div>
          <FormSelect v-model="form.course" :options="courses" label="Course" @update:model-value="loadBatches" />
          <FormSelect v-model="form.batch" :options="batches" label="Batch" @update:model-value="loadStudents" />
          <div class="flex items-end">
            <Button :disabled="processing || !form.batch || !students.length" @click="mark">{{ processing ? 'Saving…' : 'Save attendance' }}</Button>
          </div>
        </div>

        <div v-if="students.length" class="overflow-hidden rounded-md border">
          <div v-for="s in students" :key="s.uuid" class="flex items-center justify-between border-b px-4 py-2 last:border-0">
            <span class="text-sm">{{ s.name || s.full_name }}</span>
            <div class="flex gap-2">
              <button
                v-for="st in ['present', 'absent', 'late_leave', 'half_day']"
                :key="st"
                class="rounded-full border px-3 py-1 text-xs capitalize transition-colors"
                :class="statuses[s.uuid] === st ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'"
                @click="statuses[s.uuid] = st"
              >
                {{ st.replace('_', ' ') }}
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
