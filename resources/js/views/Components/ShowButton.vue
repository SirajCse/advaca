<script setup>
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-vue-next'

const props = defineProps({
  name: { type: String, required: true },
  uuid: { type: String, required: true },
})
const router = useRouter()
</script>

<template>
  <Button variant="ghost" size="xs" @click="router.push({ name: props.name, params: { uuid: props.uuid } })">
    <Eye class="h-3.5 w-3.5" />
    View
  </Button>
</template>
