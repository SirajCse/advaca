<!--
  Source path: resources/js/views/Layouts/Guest.vue
  Component:   Guest
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('global.generic')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>generic</CardTitle>
          <CardDescription>Page component for the generic.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a clean Vue 3 SFC generated for the Guest component.
            Replace this placeholder with the actual page content for your
            generic.
          </p>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Components/ParentTransition.vue'
</script>
