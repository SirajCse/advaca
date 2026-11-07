<script setup>
import { computed } from 'vue'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  PaginationContent, PaginationItem, PaginationNext, PaginationPrevious,
} from '@/components/ui/pagination'
import { Skeleton } from '@/components/ui/skeleton'
import { ChevronDown, ChevronUp, Search } from 'lucide-vue-next'

const props = defineProps({
  title: { type: String, default: '' },
  headers: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
  meta: { type: Object, default: () => ({}) },
  loading: { type: Boolean, default: false },
  searchPlaceholder: { type: String, default: 'Search...' },
  noSearch: { type: Boolean, default: false },
})

const emit = defineEmits(['query'])

const query = defineModel('query', { type: Object, default: () => ({ page: 1, per_page: 20, q: '', sort: '', order: '' }) })

const pages = computed(() => {
  const last = Number(props.meta.last_page || 1)
  const cur = Number(props.meta.current_page || query.value.page || 1)
  const win = []
  const start = Math.max(1, cur - 2)
  const end = Math.min(last, cur + 2)
  for (let p = start; p <= end; p++) win.push(p)
  return { last, cur, win, start, end }
})

let searchTimer = null
function onSearch() {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    query.value = { ...query.value, page: 1 }
    emit('query', { ...query.value })
  }, 350)
}

function setSort(name) {
  const order = query.value.sort === name && query.value.order === 'asc' ? 'desc' : 'asc'
  query.value = { ...query.value, sort: name, order, page: 1 }
  emit('query', { ...query.value })
}

function goPage(p) {
  if (p < 1 || p > pages.value.last) return
  query.value = { ...query.value, page: p }
  emit('query', { ...query.value })
}

function changePerPage(v) {
  query.value = { ...query.value, per_page: Number(v), page: 1 }
  emit('query', { ...query.value })
}

function cellValue(item, name) {
  const val = item?.[name]
  if (val === null || val === undefined) return '-'
  if (typeof val === 'object') return val.name || val.title || val.label || value(val)
  if (typeof val === 'boolean') return val ? 'Yes' : 'No'
  return String(val)
}
function value(v) {
  if (v === null || v === undefined) return '-'
  if (typeof v === 'object') return v.name || v.title || v.label || '-'
  return String(v)
}
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-3">
      <CardTitle class="text-base">{{ title }}</CardTitle>
      <div v-if="!noSearch" class="relative w-full max-w-xs">
        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          v-model="query.q"
          :placeholder="searchPlaceholder"
          class="pl-8"
          @input="onSearch"
        />
      </div>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead v-for="h in headers" :key="h.name" :class="h.class">
                <button
                  v-if="h.sortable"
                  class="inline-flex items-center gap-1 font-medium"
                  @click="setSort(h.name)"
                >
                  {{ h.label }}
                  <ChevronUp v-if="query.sort === h.name && query.order === 'asc'" class="h-3 w-3" />
                  <ChevronDown v-else-if="query.sort === h.name" class="h-3 w-3" />
                </button>
                <template v-else>{{ h.label }}</template>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-if="loading && !items.length">
              <TableCell v-for="h in headers" :key="h.name">
                <Skeleton class="h-4 w-full" />
              </TableCell>
            </TableRow>
            <TableRow v-for="item in items" :key="item.uuid || item.id">
              <TableCell v-for="h in headers" :key="h.name" :class="h.cellClass">
                <slot
                  :name="`item-${h.name}`"
                  :item="item"
                  :value="cellValue(item, h.name)"
                >
                  {{ cellValue(item, h.name) }}
                </slot>
              </TableCell>
            </TableRow>
            <TableRow v-if="!loading && !items.length">
              <TableCell :colspan="headers.length" class="py-10 text-center text-muted-foreground">
                No records found.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div v-if="pages.last > 1 || meta.total" class="flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs text-muted-foreground">
          Showing {{ items.length }} of {{ meta.total ?? items.length }} record(s)
        </div>
        <PaginationContent>
          <PaginationPrevious :disabled="pages.cur <= 1" @click="goPage(pages.cur - 1)" />
          <PaginationItem
            v-for="p in pages.win"
            :key="p"
            :value="p"
            :is-active="p === pages.cur"
            @click="goPage(p)"
          />
          <span v-if="pages.end < pages.last - 1" class="px-1 text-muted-foreground">…</span>
          <PaginationItem v-if="pages.end < pages.last" :value="pages.last" :is-active="false" @click="goPage(pages.last)" />
          <PaginationNext :disabled="pages.cur >= pages.last" @click="goPage(pages.cur + 1)" />
        </PaginationContent>
        <div class="flex items-center gap-2 text-xs text-muted-foreground">
          Per page
          <select
            class="h-7 rounded-md border bg-background px-2 text-xs"
            :value="query.per_page"
            @change="changePerPage($event.target.value)"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
