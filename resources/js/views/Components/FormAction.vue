<script setup>
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  processing: { type: Boolean, default: false },
  isCreate: { type: Boolean, default: true },
  backTo: { type: String, default: '' },
})

const emit = defineEmits(['submit'])
const router = useRouter()

function onCancel() {
  if (props.backTo) router.push(props.backTo)
  else if (window.history.length > 1) router.back()
}
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <Card>
      <CardHeader>
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription v-if="description">{{ description }}</CardDescription>
      </CardHeader>
      <CardContent class="space-y-5">
        <slot />
      </CardContent>
      <CardFooter class="justify-end gap-2 border-t pt-4">
        <Button type="button" variant="outline" @click="onCancel">Cancel</Button>
        <Button type="submit" :disabled="processing">
          <span v-if="processing">Saving…</span>
          <span v-else>{{ isCreate ? 'Create' : 'Update' }}</span>
        </Button>
      </CardFooter>
    </Card>
  </form>
</template>
