<!--
  Page: Config/Asset/Index.vue — 1:1 with the old app's Config → Asset page
  (live audit 2026-11): seven image assets uploaded via multipart
  POST /app/config/assets?type=<key> and removed via DELETE /app/config/assets?type=<key>.
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Asset" :navs="navs">
      <PageHeaderAction base="config.asset" title="Asset" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <Card>
        <CardHeader>
          <CardTitle>Asset Configuration</CardTitle>
          <CardDescription>Upload logo, icon, favicon and guest backgrounds for your institution.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-5">
          <div v-for="asset in assets" :key="asset.key" class="rounded-lg border p-4">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium">{{ asset.label }}</p>
                <p v-if="asset.hint" class="mt-0.5 text-xs text-muted-foreground">{{ asset.hint }}</p>
                <p v-if="asset.current" class="mt-1 truncate text-xs text-muted-foreground">{{ asset.current }}</p>
              </div>
              <div class="flex items-center gap-2">
                <img v-if="asset.current" :src="asset.current" :alt="asset.label" class="h-10 max-w-[160px] rounded border object-contain" />
                <label class="inline-flex cursor-pointer items-center gap-1.5 rounded-md border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-gray-50">
                  {{ asset.current ? 'Change' : 'Upload' }}
                  <input
                    type="file"
                    class="hidden"
                    accept="image/*"
                    :disabled="uploading === asset.key"
                    @change="(e) => upload(asset, e)"
                  />
                </label>
                <Button
                  v-if="asset.current"
                  type="button"
                  variant="destructive"
                  size="sm"
                  :disabled="uploading === asset.key"
                  @click="remove(asset)"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>

          <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import http from '@/lib/http'

const title = 'Asset'
const initialized = ref(false)
const processing = ref(false)
const uploading = ref('')
const submitError = ref('')
const errors = ref({})

const navs = [
  { label: 'Config' },
  { label: 'Asset' },
]

// keys mirror the backend allowed types (AssetRequest::withValidator) and the
// old app's asset page (labels carry the recommended pixel dimensions)
const assets = ref([
  { key: 'guest_background', label: 'Guest background', hint: '1920x2880', current: '' },
  { key: 'guest_full_page_background', label: 'Guest full page background', hint: '1920x1080', current: '' },
  { key: 'logo', label: 'Logo', hint: '600x200', current: '' },
  { key: 'logo_light', label: 'Logo light', hint: '600x200', current: '' },
  { key: 'icon', label: 'Icon', hint: '512x512', current: '' },
  { key: 'icon_light', label: 'Icon light', hint: '512x512', current: '' },
  { key: 'favicon', label: 'Favicon', hint: '128x128', current: '' },
])

async function load() {
  try {
    const { data } = await http.get('/app/config')
    const section = data?.assets ?? data?.config?.assets ?? {}
    for (const asset of assets.value) {
      const v = section[asset.key]
      asset.current = typeof v === 'string' && v ? v : ''
    }
  } catch {}
  initialized.value = true
}

function absolutize(url) {
  if (!url) return url
  if (/^https?:\/\//i.test(url)) return url
  return '/' + String(url).replace(/^\//, '')
}

async function upload(asset, e) {
  const file = e.target.files && e.target.files[0]
  e.target.value = ''
  if (!file) return
  uploading.value = asset.key
  errors.value = {}
  submitError.value = ''
  try {
    const fd = new FormData()
    fd.append('image', file)
    await http.post('/app/config/assets?type=' + asset.key, fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    await load()
    Swal.fire({ icon: 'success', title: 'Uploaded', text: `${asset.label} uploaded.`, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (err) {
    if (err.fieldErrors) errors.value = err.fieldErrors
    submitError.value = err.toastMessage || `Failed to upload ${asset.label}.`
    Swal.fire({ icon: 'error', title: 'Upload failed', text: submitError.value, toast: true, position: 'top-end', timer: 4000, showConfirmButton: false })
  }
  uploading.value = ''
}

async function remove(asset) {
  uploading.value = asset.key
  submitError.value = ''
  try {
    await http.delete('/app/config/assets?type=' + asset.key)
    asset.current = ''
    Swal.fire({ icon: 'success', title: 'Removed', text: `${asset.label} removed.`, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (err) {
    submitError.value = err.toastMessage || `Failed to remove ${asset.label}.`
  }
  uploading.value = ''
}

onMounted(load)
</script>
