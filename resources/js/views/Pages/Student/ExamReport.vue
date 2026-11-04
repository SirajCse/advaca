<!--
  Source path: resources/js/views/Pages/Student/ExamReport.vue
  Component:   ExamReport
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('student.examreport')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>Exam Report</CardTitle>
          <CardDescription>Page component for Student Exam Report.vue.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a clean Vue 3 SFC generated for the ExamReport component.
            Replace this placeholder with the actual page content for your
            Exam Report.
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
