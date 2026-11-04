<!--
  Source path: resources/js/views/Pages/Team/Config/Permission/User.vue
  Component:   User
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('team.user')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>User</CardTitle>
          <CardDescription>Page component for Team Config.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a clean Vue 3 SFC generated for the User component.
            Replace this placeholder with the actual page content for your
            User.
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
