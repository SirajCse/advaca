<!--
  Source path: resources/js/views/Pages/Academic/BatchIncharge/Show.vue
  Component:   Show
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('academic.batchincharge')" :navs="navs" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>{{ item.name || item.title || $t('academic.batchincharge') }}</CardTitle>
          <CardDescription>UUID: {{ item.uuid || '-' }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm font-medium text-muted-foreground">Name</p>
              <p>{{ item.name || '-' }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">Code</p>
              <p>{{ item.code || '-' }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">Created</p>
              <p>{{ item.createdAt || item.created_at || '-' }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">Status</p>
              <Badge :variant="item.status ? 'default' : 'secondary'">{{ item.status ? 'Active' : 'Inactive' }}</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" @click="back">Back</Button>
        </CardFooter>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Components/ParentTransition.vue'
import { router } from '@inertiajs/vue3'

const props = defineProps({
  item: { type: Object, default: () => ({}) },
})

const navs = [
  { label: 'Academic', path: 'Academic' },
  { label: 'Batch Incharge', path: 'Show' },
]

const back = () => router.back()
</script>
