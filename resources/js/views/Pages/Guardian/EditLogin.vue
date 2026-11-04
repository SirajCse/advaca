<!--
  Source path: resources/js/views/Pages/Guardian/EditLogin.vue
  Component:   EditLogin
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('guardian.editlogin')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>Edit Login</CardTitle>
          <CardDescription>Page component for Guardian Edit Login.vue.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a clean Vue 3 SFC generated for the EditLogin component.
            Replace this placeholder with the actual page content for your
            Edit Login.
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
