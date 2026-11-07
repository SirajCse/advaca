<script setup>
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const router = useRouter()
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle>Session expired</CardTitle>
      <CardDescription>Your session has expired. Please login again.</CardDescription>
    </CardHeader>
    <CardContent>
      <Button class="w-full" @click="router.push('/login')">Login</Button>
    </CardContent>
  </Card>
</template>
