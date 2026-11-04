<!--
  Source path: resources/js/views/Pages/Recruitment/Job/VacancyDetail.vue
  Component:   VacancyDetail
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('recruitment.vacancydetail')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>Vacancy Detail</CardTitle>
          <CardDescription>Page component for Recruitment Job.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a clean Vue 3 SFC generated for the VacancyDetail component.
            Replace this placeholder with the actual page content for your
            Vacancy Detail.
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
