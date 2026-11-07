<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import { useConfigStore } from '@/stores/config'

const config = useConfigStore()
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Product" :navs="[{ label: 'Product' }, { label: 'Overview' }]" />
    <Card>
      <CardHeader>
        <CardTitle>{{ config.appName }}</CardTitle>
        <CardDescription>School / college management platform</CardDescription>
      </CardHeader>
      <CardContent class="space-y-3 text-sm text-muted-foreground">
        <p>This installation is powered by the AdvAca product family. Manage your license and version details below.</p>
        <RouterLink to="/product/license" class="text-primary hover:underline">View license details</RouterLink>
      </CardContent>
    </Card>
  </div>
</template>
