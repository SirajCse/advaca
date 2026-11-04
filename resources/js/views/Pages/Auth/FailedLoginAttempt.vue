<!--
  Source path: resources/js/views/Pages/Auth/FailedLoginAttempt.vue
  Component:   FailedLoginAttempt
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('auth.failedloginattempt')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>Failed Login Attempt</CardTitle>
          <CardDescription>Page component for Auth Failed Login Attempt.vue.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a clean Vue 3 SFC generated for the FailedLoginAttempt component.
            Replace this placeholder with the actual page content for your
            Failed Login Attempt.
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
