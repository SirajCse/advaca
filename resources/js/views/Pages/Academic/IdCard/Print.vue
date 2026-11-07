<!--
  Page: Academic/IdCard/Print.vue  (auto-generated full implementation)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Id Card Print" :navs="navs">
      <PageHeaderAction base="academic.id-card" title="Id Card Print" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <Card>
        <CardHeader>
          <CardTitle>{{ title }}</CardTitle>
          <CardDescription>Id Card Print view</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div v-if="loading" class="space-y-3">
            <Skeleton class="h-4 w-3/4" />
            <Skeleton class="h-4 w-1/2" />
          </div>

          <template v-else-if="records.length">
            <div v-for="rec in records" :key="rec.uuid || rec.id" class="rounded-lg border p-4">
              <div class="font-medium">{{ rec.name || rec.title || rec.uuid }}</div>
              <div class="mt-1 text-sm text-muted-foreground">{{ rec.description || rec.created_at || '' }}</div>
            </div>
          </template>

          <Alert v-else>
            <AlertTitle>Id Card Print</AlertTitle>
            <AlertDescription>
              This view is wired to its parent module. Once the module provides data, it renders here.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'


const title = 'Id Card Print'
const initialized = ref(false)
const loading = ref(false)
const records = ref([])

const navs = [
    { label: 'Academic' },
    { label: 'Id Card Print' },
  ]

async function load() {
  loading.value = true
    // No direct list endpoint for this view. Data is provided by the parent module API.
  records.value = []
  loading.value = false
  initialized.value = true
}

onMounted(load)
</script>
