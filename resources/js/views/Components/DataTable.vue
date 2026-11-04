<template>
  <Card>
    <CardHeader v-if="title || $slots.header">
      <CardTitle>{{ title }}</CardTitle>
      <slot name="header" />
    </CardHeader>
    <CardContent class="p-0">
      <Table>
        <TableHeader v-if="headers && headers.length">
          <TableRow>
            <TableHead v-for="(h, i) in headers" :key="i">{{ h.label || h.name }}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <slot />
        </TableBody>
      </Table>
    </CardContent>
    <CardFooter v-if="$slots.footer" class="justify-end">
      <slot name="footer" />
    </CardFooter>
  </Card>
</template>
<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Table, TableHeader, TableBody, TableRow, TableHead } from '@/components/ui/table'
defineProps({
  title: { type: String, default: '' },
  headers: { type: Array, default: () => [] },
  meta: { type: Object, default: () => ({}) },
  module: { type: String, default: '' },
})
</script>
