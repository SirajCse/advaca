<script setup>
import { onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import FormSelect from '@/views/Components/FormSelect.vue'
import { useThemeStore } from '@/stores/theme'
import { updatePreference } from '@/api/auth'

const theme = useThemeStore()
const processing = ref(false)
const form = reactive({ locale: 'en', enable_screen_lock: false })

async function save() {
  processing.value = true
  try {
    await updatePreference({
      'system.locale': form.locale,
      'system.enable_screen_lock': form.enable_screen_lock,
      'system.display': theme.dark ? 'dark' : 'light',
    })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Preferences updated.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch {}
  processing.value = false
}
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Preference" :navs="[{ label: 'User' }, { label: 'Preference' }]" />
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Personal display and locale options</CardDescription>
      </CardHeader>
      <CardContent class="max-w-xl space-y-5">
        <FormSelect v-model="form.locale" :options="[{ value: 'en', label: 'English' }]" label="Language" />
        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <div class="text-sm font-medium">Dark display</div>
            <div class="text-xs text-muted-foreground">Use the dark color scheme</div>
          </div>
          <Switch :model-value="theme.dark" @update:model-value="theme.dark = $event; theme.apply()" />
        </div>
        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <div class="text-sm font-medium">Screen lock</div>
            <div class="text-xs text-muted-foreground">Lock the screen when idle</div>
          </div>
          <Switch v-model="form.enable_screen_lock" />
        </div>
        <Button :disabled="processing" @click="save">{{ processing ? 'Saving…' : 'Save preferences' }}</Button>
      </CardContent>
    </Card>
  </div>
</template>
