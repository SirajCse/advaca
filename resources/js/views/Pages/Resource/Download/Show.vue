<!--
  Page: Resource/Download/Show.vue  (auto-generated full implementation)
  API:   resourceDownloads @ app/resource/downloads
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Download" :navs="navs">
      <PageHeaderAction base="resource.download" title="Download" :actions="['list', 'edit', 'print']" :edit-uuid="uuid" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <div v-if="record" class="space-y-5">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle class="text-lg">{{ record.name || record.title || record.title || 'Detail' }}</CardTitle>
              <CardDescription>Download details</CardDescription>
            </div>
            <Button variant="destructive" size="sm" @click="remove">
              <Trash2 class="h-4 w-4" />
              Delete
            </Button>
          </CardHeader>
          <CardContent>
            <dl class="grid gap-x-8 gap-y-4 md:grid-cols-2">
              <div v-for="field in displayFields" :key="field.name" class="space-y-1">
                <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">{{ field.label }}</dt>
                <dd class="text-sm">
                  <Badge v-if="field.name === 'status'" :variant="String(valueOf(field)).includes('active') ? 'success' : 'secondary'">
                    {{ valueOf(field) }}
                  </Badge>
                  <template v-else>{{ valueOf(field) }}</template>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <slot name="extra" :record="record" />
      </div>
      <Card v-else-if="initialized">
        <CardContent class="py-10 text-center text-muted-foreground">Record not found.</CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2 } from 'lucide-vue-next'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { displayValue, fmtDate, fmtDateTime } from '@/lib/helpers'
import { resourceDownloads } from '@/api/resource'

const route = useRoute()
const router = useRouter()

const title = 'Download'
const uuid = computed(() => route.params.uuid)
const initialized = ref(false)
const record = ref(null)

const navs = [
    { label: 'Resource' },
    { label: 'Download' },
  ]

const displayFields = [
    { name: 'uuid', label: 'Uuid', type: 'text' },
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'title_excerpt', label: 'Title excerpt', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'employee', label: 'Employee', type: 'text' },
    { name: 'audiences', label: 'Audiences', type: 'text' },
    { name: 'audience_types', label: 'Audience types', type: 'text' },
    { name: 'student_audience_type', label: 'Student audience type', type: 'text' },
    { name: 'employee_audience_type', label: 'Employee audience type', type: 'text' },
    { name: 'published_at', label: 'Published at', type: 'date' },
    { name: 'expires_at', label: 'Expires at', type: 'date' },
    { name: 'is_public', label: 'Is public', type: 'bool' },
    { name: 'is_editable', label: 'Is editable', type: 'bool' },
    { name: 'is_deletable', label: 'Is deletable', type: 'bool' },
  ]

function valueOf(field) {
  const v = record.value?.[field.name]
  if (field.type === 'date') return fmtDate(v)
  if (field.type === 'datetime') return fmtDateTime(v)
  return displayValue(v)
}

async function load() {
  try {
    const { data } = await resourceDownloads.show(uuid.value)
    record.value = data?.download ?? data
  } catch {
    record.value = null
  }
  initialized.value = true
}

async function remove() {
  const result = await Swal.fire({
    title: 'Delete Download?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await resourceDownloads.destroy(uuid.value)
    Swal.fire({ icon: 'success', title: 'Deleted', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'resource.download.index' })
  } catch {}
}

onMounted(load)
</script>
