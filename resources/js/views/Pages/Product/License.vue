<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import { Badge } from '@/components/ui/badge'

const version = '1.5.5.2'
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="License" :navs="[{ label: 'Product', path: '/product' }, { label: 'License' }]" />
    <Card>
      <CardHeader>
        <CardTitle>License details</CardTitle>
        <CardDescription>Installation version and license state</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4 text-sm">
        <div class="flex items-center gap-3">
          <span class="text-muted-foreground">Version</span>
          <Badge variant="secondary">v{{ version }}</Badge>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-muted-foreground">License</span>
          <Badge variant="success">Active</Badge>
        </div>
        <p class="text-muted-foreground">Contact your vendor for renewal or upgrade options.</p>
      </CardContent>
    </Card>
  </div>
</template>
