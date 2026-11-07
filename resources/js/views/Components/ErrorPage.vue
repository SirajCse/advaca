<script setup>
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

const props = defineProps({
  code: { type: [String, Number], default: 404 },
  message: { type: String, default: '' },
})

const router = useRouter()
const messages = {
  401: 'You are not authenticated. Please login to continue.',
  403: 'You do not have permission to access this page.',
  404: 'The page you are looking for could not be found.',
  500: 'Something went wrong on the server.',
}
</script>

<template>
  <div class="mx-auto max-w-md text-center">
    <div class="mb-4 text-6xl font-bold text-primary">{{ code }}</div>
    <p class="mb-6 text-muted-foreground">{{ message || messages[code] || 'Unexpected error.' }}</p>
    <Button @click="router.push('/dashboard')">Go to Dashboard</Button>
  </div>
</template>
