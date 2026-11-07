<script setup>
import { ref, watch } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  processing: { type: Boolean, default: false },
  isCreate: { type: Boolean, default: true },
  backTo: { type: [String, Object], default: '' },
  submitLabel: { type: String, default: 'Save' },
  resetLabel: { type: String, default: 'Reset' },
})

const emit = defineEmits(['submit', 'reset'])

const router = useRouter()
const route = useRoute()
const keepAdding = defineModel('keepAdding', { type: Boolean, default: false })

function onCancel() {
  if (props.backTo) router.push(props.backTo)
  else if (window.history.length > 1) router.back()
  else router.push('/')
}

function onReset() {
  emit('reset')
}
</script>

<template>
  <form @submit.prevent="emit('submit')" @reset.prevent="onReset">
    <Card class="rounded-lg border shadow-sm">
      <CardContent class="space-y-5 p-6">
        <slot />
      </CardContent>

      <!-- Old-UI footer: Reset + Keep Adding (left) · Cancel + Save (right) -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-t px-6 py-4">
        <div class="flex items-center gap-4">
          <Button type="button" variant="secondary" class="bg-muted text-foreground hover:bg-muted/80" @click="onReset">
            {{ resetLabel }}
          </Button>
          <label v-if="isCreate" class="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
            <Checkbox :checked="!!keepAdding" @update:checked="(v) => (keepAdding = v)" />
            Keep Adding
          </label>
        </div>
        <div class="flex items-center gap-2">
          <Button type="button" variant="destructive" class="px-6" @click="onCancel">Cancel</Button>
          <Button type="submit" class="px-8" :disabled="processing">
            <span v-if="processing">Saving…</span>
            <span v-else>{{ submitLabel }}</span>
          </Button>
        </div>
      </div>
    </Card>
  </form>
</template>
