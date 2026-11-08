<template>
  <div class="space-y-4">
    <PageHeader :title="pageTitle" :navs="navs">
      <template #default>
        <Button v-if="createRoute" class="hidden sm:inline-flex" size="sm" @click="goCreate">
          <Plus class="mr-1.5 h-4 w-4" /> {{ trans('global.add', { attribute: singularLabel }) }}
        </Button>
        <Button v-if="createRoute" class="sm:hidden" size="icon" @click="goCreate">
          <Plus class="h-4 w-4" />
        </Button>
      </template>
    </PageHeader>

    <Alert v-if="listError" variant="destructive">
      <AlertDescription>{{ listError }}</AlertDescription>
    </Alert>

    <ParentTransition :visibility="initialized">
      <Card class="rounded-lg border shadow-sm">
        <!-- toolbar: search -->
        <div
          v-if="keySearch"
          class="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3"
        >
          <div class="relative w-full max-w-xs">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              v-model="search"
              :placeholder="keySearchLabel"
              class="pl-8 bg-white"
              @keyup.enter="reload()"
            />
          </div>
          <div class="flex items-center gap-2">
            <Select v-model="perPage">
              <SelectTrigger class="h-8 w-[110px] bg-white text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem v-for="n in perPageOptions" :key="n" :value="String(n)">{{ n }} / page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <CardContent class="p-0">
          <!-- loading skeleton -->
          <div v-if="loading && !rows.length" class="space-y-2 p-5">
            <Skeleton v-for="i in 5" :key="i" class="h-9 w-full" />
          </div>

          <!-- empty -->
          <div v-else-if="!rows.length" class="flex flex-col items-center justify-center gap-2 py-16 text-muted-foreground">
            <Inbox class="h-10 w-10 opacity-40" />
            <p class="text-sm">No {{ pageTitle.toLowerCase() }} found</p>
          </div>

          <!-- table -->
          <div v-else class="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow class="bg-muted/50 hover:bg-muted/50">
                  <TableHead class="w-12 text-center">#</TableHead>
                  <TableHead
                    v-for="col in columns"
                    :key="col.k"
                    :class="['whitespace-nowrap', col.s && col.k !== 'selectAll' ? 'cursor-pointer select-none' : '']"
                    @click="col.s && col.k !== 'selectAll' && sortBy(col.k)"
                  >
                    <Checkbox v-if="col.k === 'selectAll'" disabled />
                    <span v-else class="inline-flex items-center gap-1">
                      {{ col.l }}
                      <ArrowUpDown v-if="col.s" class="h-3 w-3 opacity-40" :class="sortKey === col.k ? 'opacity-100' : ''" />
                    </span>
                  </TableHead>
                  <TableHead v-if="hasActions" class="w-16 text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="(row, idx) in rows" :key="row.uuid || idx" class="group">
                  <TableCell class="text-center text-xs text-muted-foreground">
                    {{ (currentPage - 1) * perPageNum + idx + 1 }}
                  </TableCell>
                  <TableCell v-for="col in columns" :key="col.k" class="max-w-[280px]">
                    <Checkbox v-if="col.k === 'selectAll'" disabled />
                    <div v-else class="truncate">
                      {{ cellValue(row, col) }}
                      <span v-if="col.sub && resolveKey(row, col.sub) !== undefined" class="block text-xs text-muted-foreground">{{ displayValue(resolveKey(row, col.sub)) }}</span>
                    </div>
                  </TableCell>
                  <TableCell v-if="hasActions" class="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger as-child>
                        <Button variant="ghost" size="icon" class="h-8 w-8">
                          <MoreVertical class="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" class="w-40">
                        <DropdownMenuItem v-if="showRoute" @click="goShow(row)">
                          <Eye class="mr-2 h-4 w-4" /> Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem v-if="editRoute" @click="goEdit(row)">
                          <Pencil class="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem v-if="duplicateRoute" @click="goDuplicate(row)">
                          <Copy class="mr-2 h-4 w-4" /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem v-if="route.meta.actions?.destroy" class="text-destructive focus:text-destructive" @click="remove(row)">
                          <Trash2 class="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>

        <!-- pagination -->
        <div v-if="lastPage > 1" class="flex flex-wrap items-center justify-between gap-2 border-t px-5 py-3 text-sm text-muted-foreground">
          <span>Showing {{ from }}–{{ to }} of {{ total }}</span>
          <div class="flex items-center gap-1">
            <Button variant="outline" size="icon" class="h-8 w-8" :disabled="currentPage <= 1" @click="goPage(currentPage - 1)">
              <ChevronLeft class="h-4 w-4" />
            </Button>
            <template v-for="p in pageNumbers" :key="p">
              <Button
                variant="outline"
                size="icon"
                class="h-8 w-8"
                :class="p === currentPage ? 'bg-primary text-primary-foreground hover:bg-primary' : ''"
                @click="goPage(p)"
              >
                {{ p }}
              </Button>
            </template>
            <Button variant="outline" size="icon" class="h-8 w-8" :disabled="currentPage >= lastPage" @click="goPage(currentPage + 1)">
              <ChevronRight class="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Checkbox } from '@/components/ui/checkbox'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { trans } from '@/spec/lang'
import { createCrudApi, normalizeList } from '@/api/crud'
import { resolveKey, displayValue } from '@/lib/helpers'
import {
  Plus, Search, Inbox, ChevronLeft, ChevronRight, MoreVertical, Eye, Pencil, Copy, Trash2, ArrowUpDown,
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const entity = computed(() => route.meta.entity || {})
const pageTitle = computed(() => route.meta.pageTitle || entity.value.label || '')
const singularLabel = computed(() => route.meta.singularLabel || pageTitle.value)
const columns = computed(() => (entity.value.columns || []).filter((c) => c.k))
const keySearch = computed(() => !!route.meta.keySearch)
const keySearchLabel = computed(() => route.meta.keySearchLabel || 'Search...')

const createRoute = computed(() => route.meta.actions?.create || null)
const editRoute = computed(() => route.meta.actions?.edit || null)
const showRoute = computed(() => route.meta.actions?.show || null)
const duplicateRoute = computed(() => route.meta.actions?.duplicate || null)
const hasActions = computed(() => !!(createRoute.value || editRoute.value || showRoute.value || duplicateRoute.value || route.meta.actions?.destroy))

const initialized = ref(false)
const loading = ref(false)
const listError = ref('')
const rows = ref([])
const total = ref(0)
const currentPage = ref(1)
const lastPage = ref(1)
const perPageNum = ref(20)
const sortKey = ref('')
const sortOrder = ref('asc')
const search = ref('')

const perPageOptions = [10, 20, 50, 100]
const perPage = ref('20')

const from = computed(() => (total.value ? (currentPage.value - 1) * perPageNum.value + 1 : 0))
const to = computed(() => Math.min(currentPage.value * perPageNum.value, total.value))
const pageNumbers = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(lastPage.value, start + 4)
  for (let i = start; i <= end; i += 1) pages.push(i)
  return pages
})

const api = createCrudApi(entity.value.endpoints || {})

async function fetchRows() {
  if (!entity.value.endpoints?.index) {
    initialized.value = true
    return
  }
  loading.value = true
  try {
    const params = {
      current_page: currentPage.value,
      per_page: Number(perPage.value),
      sort: sortKey.value ? snakeCase(sortKey.value) : undefined,
      order: sortOrder.value,
      search: search.value || undefined,
      ...(route.meta.listParams || {}),
    }
    const resp = await api.list(params)
    const norm = normalizeList(resp)
    rows.value = norm.rows
    total.value = Number(norm.meta.total ?? norm.rows.length)
    lastPage.value = Number(norm.meta.last_page ?? 1)
    currentPage.value = Number(norm.meta.current_page ?? currentPage.value)
    listError.value = ''
  } catch (e) {
    rows.value = []
    const status = e?.response?.status
    listError.value = e?.response?.data?.message
      || (status ? `The list could not be loaded (HTTP ${status}). Please retry.` : 'The list could not be loaded. Please retry.')
  } finally {
    loading.value = false
    initialized.value = true
  }
}

function reload(page = 1) {
  currentPage.value = page
  fetchRows()
}

function goPage(p) {
  if (p < 1 || p > lastPage.value) return
  currentPage.value = p
  fetchRows()
}

function sortBy(key) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
  fetchRows()
}

function snakeCase(s) {
  return String(s).replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase()
}

function cellValue(row, col) {
  // resolveKey bridges the backend's snake_case resources with the spec's
  // camelCase keys (codeNumber -> code_number) and dot paths; displayValue
  // renders Cal date objects / enum details / arrays as readable text.
  return displayValue(resolveKey(row, col.k))
}

const baseName = computed(() => {
  const n = String(route.name || '')
  return n.endsWith('List') ? n.slice(0, -4) : n
})

function goCreate() { router.push({ name: baseName.value + 'Create' }) }
function goEdit(row) { router.push({ name: baseName.value + 'Edit', params: { uuid: row.uuid } }) }
function goShow(row) { router.push({ name: baseName.value + 'Show', params: { uuid: row.uuid } }) }
function goDuplicate(row) { router.push({ name: baseName.value + 'Duplicate', params: { uuid: row.uuid } }) }

async function remove(row) {
  const confirmed = await Swal.fire({
    title: `Delete this ${singularLabel.value}?`,
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6d28d9',
    cancelButtonColor: '#ef4444',
    confirmButtonText: 'Delete',
  })
  if (!confirmed.isConfirmed) return
  try {
    await api.destroy(row.uuid)
    Swal.fire({ icon: 'success', text: singularLabel.value + ' deleted.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    reload(currentPage.value)
  } catch { /* handled by http interceptor */ }
}

const navs = computed(() => route.meta.navs || [])

watch(perPage, () => reload(1))

onMounted(fetchRows)
</script>
