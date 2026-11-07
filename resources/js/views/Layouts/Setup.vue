<script setup>
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
</script>

<template>
  <div class="min-h-screen bg-muted/40 p-4 text-foreground md:p-10">
    <div class="mx-auto max-w-3xl space-y-6">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Setup Wizard</h1>
        <p class="text-sm text-muted-foreground">Configure your AdvAca installation</p>
      </div>
      <RouterView />
    </div>
  </div>
</template>
