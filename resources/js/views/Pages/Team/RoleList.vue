<script setup>
// Team role list — /teams/:uuid/config/role — 1:1 with the old TeamConfigRole
// list page (roles of the current school/team + create button).
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import http from '@/lib/http'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const uuid = computed(() => route.params.uuid || auth.user?.team?.uuid || auth.user?.team_id || '')

const rows = ref([])
const initialized = ref(false)
const error = ref('')

async function load() {
  try {
    const { data } = await http.get(`/app/teams/${uuid.value}/roles`)
    rows.value = Array.isArray(data) ? data : (data?.data || [])
  } catch (e) {
    error.value = e?.response?.data?.message || 'roles could not be loaded'
  }
  initialized.value = true
}

onMounted(load)
</script>

<template>
  <div class="space-y-4">
    <PageHeader title="Role & Permission" :navs="route.meta.navs || []">
      <template #default>
        <Button
          v-if="router.hasRoute('TeamConfigRoleCreate')"
          variant="outline" size="sm"
          @click="router.push({ name: 'TeamConfigRoleCreate', params: { uuid } })"
        >
          Add Role
        </Button>
      </template>
    </PageHeader>

    <ParentTransition :visibility="initialized">
      <Card>
        <CardHeader><CardTitle>Roles</CardTitle></CardHeader>
        <CardContent>
          <p v-if="error" class="mb-3 text-sm text-destructive">{{ error }}</p>
          <div class="overflow-x-auto rounded-lg border">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b bg-muted/50 text-left">
                  <th class="px-3 py-2 font-medium">Name</th>
                  <th class="px-3 py-2 font-medium">Users</th>
                  <th class="px-3 py-2 font-medium">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!rows.length">
                  <td colspan="3" class="px-3 py-6 text-center text-muted-foreground">No roles yet</td>
                </tr>
                <tr v-for="r in rows" :key="r.uuid" class="border-b last:border-b-0">
                  <td class="px-3 py-2 font-medium">{{ r.name ?? r.label }}</td>
                  <td class="px-3 py-2">{{ r.users_count ?? r.users?.length ?? '-' }}</td>
                  <td class="px-3 py-2">
                    <Badge :variant="r.is_default ? 'secondary' : 'outline'">{{ r.is_default ? 'Default' : 'Custom' }}</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
