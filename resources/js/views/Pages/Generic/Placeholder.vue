<template>
  <div class="space-y-4">
    <PageHeader :title="pageTitle" :navs="navs" />
    <ParentTransition :visibility="true">
      <Card class="rounded-lg border shadow-sm">
        <CardContent class="flex min-h-[280px] flex-col items-center justify-center gap-3 p-10 text-center">
          <Construction class="h-12 w-12 text-muted-foreground/40" />
          <h2 class="text-lg font-semibold text-foreground">{{ pageTitle }}</h2>
          <p class="max-w-md text-sm text-muted-foreground">
            This {{ moduleName }} page is part of the redesigned AdvAca interface.
            The module-specific content for this section is served through its configuration and action endpoints.
          </p>
          <Button v-if="listPath" variant="outline" size="sm" @click="$router.push(listPath)">
            <ListIcon class="mr-1.5 h-4 w-4" /> Open list
          </Button>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { List as ListIcon, Construction } from 'lucide-vue-next'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'

const route = useRoute()

const pageTitle = computed(() => route.meta.pageTitle || route.meta.title || '')
const moduleName = computed(() => (route.meta.navs?.length > 1 ? String(route.meta.navs[1].label || '').toLowerCase() : 'module'))
const listPath = computed(() => route.meta.listPath || '')
</script>
