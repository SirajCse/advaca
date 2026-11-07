<!--
  Page: Communication/Announcement/Show.vue  (auto-generated full implementation)
  API:   communicationAnnouncements @ app/communication/announcements
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Announcement" :navs="navs">
      <PageHeaderAction base="communication.announcement" title="Announcement" :actions="['list', 'edit', 'print']" :edit-uuid="uuid" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <div v-if="record" class="space-y-5">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle class="text-lg">{{ record.name || record.title || record.title || 'Detail' }}</CardTitle>
              <CardDescription>Announcement details</CardDescription>
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
import { communicationAnnouncements } from '@/api/communication'

const route = useRoute()
const router = useRouter()

const title = 'Announcement'
const uuid = computed(() => route.params.uuid)
const initialized = ref(false)
const record = ref(null)

const navs = [
    { label: 'Communication' },
    { label: 'Announcement' },
  ]

const displayFields = [
    { name: 'uuid', label: 'Uuid', type: 'text' },
    { name: 'code_number', label: 'Code number', type: 'text' },
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'title_excerpt', label: 'Title excerpt', type: 'text' },
    { name: 'type', label: 'Type', type: 'badge' },
    { name: 'employee', label: 'Employee', type: 'text' },
    { name: 'audiences', label: 'Audiences', type: 'text' },
    { name: 'is_public', label: 'Is public', type: 'bool' },
    { name: 'show_as_popup_in_website', label: 'Show as popup in website', type: 'text' },
    { name: 'is_pinned', label: 'Is pinned', type: 'bool' },
    { name: 'pinned_at', label: 'Pinned at', type: 'date' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'published_at', label: 'Published at', type: 'date' },
    { name: 'media_token', label: 'Media token', type: 'text' },
  ]

function valueOf(field) {
  const v = record.value?.[field.name]
  if (field.type === 'date') return fmtDate(v)
  if (field.type === 'datetime') return fmtDateTime(v)
  return displayValue(v)
}

async function load() {
  try {
    const { data } = await communicationAnnouncements.show(uuid.value)
    record.value = data?.announcement ?? data
  } catch {
    record.value = null
  }
  initialized.value = true
}

async function remove() {
  const result = await Swal.fire({
    title: 'Delete Announcement?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    confirmButtonColor: '#ef4444',
  })
  if (!result.isConfirmed) return
  try {
    await communicationAnnouncements.destroy(uuid.value)
    Swal.fire({ icon: 'success', title: 'Deleted', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'communication.announcement.index' })
  } catch {}
}

onMounted(load)
</script>
