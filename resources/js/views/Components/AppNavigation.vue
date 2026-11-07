<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { menu } from '@/spec/menu'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight } from 'lucide-vue-next'

const route = useRoute()

import {
  Home, Bell, Building2, Users, Sofa, Landmark, GraduationCap, Banknote, Newspaper,
  ContactRound, Laptop, QrCode, Folder, Truck, Calendar, Warehouse, Megaphone, BookOpen,
  ThumbsUp, ListChecks, Headphones, ShieldAlert, Image, UserRound, UsersRound,
  Cpu, Utensils, SlidersHorizontal, Hotel, List, TextCursorInput, Globe, PenSquare,
  FileText, MessageCircle, Boxes, Wrench, Settings, UserX, LayoutDashboard,
} from 'lucide-vue-next'

const ICONS = {
  home: Home, bell: Bell, 'building-2': Building2, users: Users, sofa: Sofa,
  landmark: Landmark, 'graduation-cap': GraduationCap, banknote: Banknote,
  newspaper: Newspaper, 'user-tie': ContactRound, laptop: Laptop, 'qr-code': QrCode,
  folder: Folder, truck: Truck, calendar: Calendar, warehouse: Warehouse,
  megaphone: Megaphone, 'book-open': BookOpen, 'thumbs-up': ThumbsUp,
  'list-checks': ListChecks, headphones: Headphones, 'shield-alert': ShieldAlert,
  image: Image, 'user-round': UserRound, 'id-card': ContactRound, 'users-round': UsersRound,
  cpu: Cpu, utensils: Utensils, 'sliders-horizontal': SlidersHorizontal, hotel: Hotel,
  list: List, 'text-cursor-input': TextCursorInput, globe: Globe,
  'pen-square': PenSquare, 'file-text': FileText, 'message-circle': MessageCircle,
  boxes: Boxes, wrench: Wrench, settings: Settings, 'user-x': UserX,
  circle: List, dashboard: LayoutDashboard,
}
const iconComp = (name) => ICONS[name] || List

const expanded = ref({})
const tree = computed(() => (menu || []).filter((m) => m.label))

function labelFor(child) {
  if (!child) return ''
  let lbl = child.label || ''
  if (child.trans) {
    // trans keys like global.list carry "List :attribute" — keep simple label fallback
    return lbl
  }
  return lbl
}

function isActive(item) {
  if (!item.path) return false
  const p = item.path.replace(/\/+$/, '')
  return route.path === p || route.path.startsWith(p + '/')
}

function sectionActive(section) {
  if (isActive(section)) return true
  return (section.children || []).some((c) => isActive(c))
}

function toggle(name) {
  expanded.value[name] = !expanded.value[name]
}

watch(
  () => route.path,
  () => {
    for (const s of tree.value) {
      if (sectionActive(s)) expanded.value[s.name] = true
    }
  },
  { immediate: true },
)

// filter children: dedupe by label+path, drop empties & unlabeled
function visibleChildren(section) {
  if (section.hideChildren) return []
  const seen = new Set()
  const out = []
  for (const c of section.children || []) {
    if (!c.labelKey) continue
    const lbl = labelFor(c)
    if (!lbl || seen.has(lbl + '|' + c.path)) continue
    seen.add(lbl + '|' + c.path)
    out.push({ ...c, label: lbl })
  }
  return out
}
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r bg-card lg:flex">
    <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <div class="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">A</div>
      <span class="font-semibold tracking-tight">AdvAca</span>
    </div>

    <nav class="flex-1 space-y-0.5 overflow-y-auto p-2.5">
      <template v-for="section in tree" :key="section.name">
        <!-- single page (no children): direct link -->
        <RouterLink
          v-if="!visibleChildren(section).length"
          :to="section.path"
          class="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
          :class="isActive(section) ? 'bg-primary/10 font-medium text-primary' : 'text-foreground/80'"
        >
          <component :is="iconComp(section.icon)" class="h-4 w-4 shrink-0" />
          {{ section.label }}
        </RouterLink>

        <!-- group with children: collapsible -->
        <div v-else>
          <button
            type="button"
            class="flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
            :class="sectionActive(section) ? 'font-medium text-primary' : 'text-foreground/80'"
            @click="toggle(section.name)"
          >
            <component :is="iconComp(section.icon)" class="h-4 w-4 shrink-0" />
            <span class="flex-1 truncate text-left">{{ section.label }}</span>
            <ChevronDown v-if="expanded[section.name]" class="h-3.5 w-3.5 opacity-60" />
            <ChevronRight v-else class="h-3.5 w-3.5 opacity-60" />
          </button>

          <div v-show="expanded[section.name]" class="mb-1 ml-4 space-y-0.5 border-l pl-3">
            <RouterLink
              v-for="child in visibleChildren(section)"
              :key="child.name"
              :to="child.path"
              class="flex items-center gap-2 rounded-md px-2 py-1 text-[13px] transition-colors hover:bg-accent"
              :class="isActive(child) ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground'"
            >
              <span class="truncate">{{ child.label }}</span>
            </RouterLink>
          </div>
        </div>
      </template>
    </nav>
  </aside>
</template>
