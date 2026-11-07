<template>
  <div class="space-y-4">
    <PageHeader :title="pageTitle" :navs="navs">
      <template #default>
        <Button variant="outline" size="sm" @click="goList">
          <ListIcon class="mr-1.5 h-4 w-4" /> List all {{ listLabel }}
        </Button>
      </template>
    </PageHeader>

    <ParentTransition :visibility="initialized">
      <FormAction
        v-model:keep-adding="keepAdding"
        :processing="processing"
        :is-create="isCreate"
        submit-label="Save"
        @submit="submit"
        @reset="resetForm"
      >
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FormField
            v-for="f in visibleFields"
            :key="f.n"
            v-model="form[f.n]"
            :field="f"
            :error="fieldErrors[f.n]"
            :disabled="processing"
            :pre-req-options="preReq"
          />
        </div>
        <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
      </FormAction>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { List as ListIcon } from 'lucide-vue-next'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormAction from '@/views/Components/FormAction.vue'
import FormField from '@/views/Components/FormField.vue'
import { trans } from '@/spec/lang'
import { createCrudApi } from '@/api/crud'
import http from '@/lib/http'

const route = useRoute()
const router = useRouter()

const entity = computed(() => route.meta.entity || {})
const isCreate = computed(() => !route.params.uuid)
const pageTitle = computed(() => route.meta.pageTitle || `${isCreate.value ? 'Add' : 'Edit'} ${entity.value.label || ''}`.trim())
const listLabel = computed(() => route.meta.singularLabel || entity.value.label || '')

const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const keepAdding = ref(false)
const fieldErrors = ref({})
const preReq = ref({})

const visibleFields = computed(() =>
  (entity.value.fields || []).filter((f) => !['id', 'uuid', 'created_at', 'updated_at'].includes(f.n)),
)

function emptyForm() {
  const f = {}
  for (const field of entity.value.fields || []) {
    if (field.t === 'checkbox') f[field.n] = false
    else if (field.t === 'multiselect' || field.t === 'array') f[field.n] = []
    else f[field.n] = ''
  }
  return f
}

const form = reactive(emptyForm())

const api = createCrudApi(entity.value.endpoints || {})

async function loadPreRequisite() {
  if (!entity.value.endpoints?.preRequisite) return
  try {
    const data = await api.preRequisite()
    preReq.value = data || {}
  } catch { /* non-fatal */ }
  // also merge global config pre-requisite (periods, sessions etc.)
  try {
    const { data } = await http.get('config/pre-requisite')
    preReq.value = { ...(data || {}), ...preReq.value }
  } catch { /* non-fatal */ }
}

async function loadRecord() {
  if (isCreate.value || !entity.value.endpoints?.show) return
  try {
    const data = await api.show(route.params.uuid)
    const record = data?.item || data?.record || data
    for (const f of entity.value.fields || []) {
      const v = record?.[f.n]
      if (v !== undefined && v !== null) {
        form[f.n] = f.t === 'checkbox' ? Boolean(v) : (f.t === 'multiselect' ? (Array.isArray(v) ? v : []) : v)
      }
    }
  } catch { /* handled */ }
}

function resetForm() {
  Object.assign(form, emptyForm())
  fieldErrors.value = {}
  submitError.value = ''
}

async function submit() {
  processing.value = true
  fieldErrors.value = {}
  submitError.value = ''
  const payload = { ...form }
  try {
    if (isCreate.value) {
      await api.store(payload)
    } else {
      await api.update(route.params.uuid, payload)
    }
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `${route.meta.singularLabel || entity.value.label} ${isCreate.value ? 'created' : 'updated'}.`,
      toast: true,
      position: 'top-end',
      timer: 3000,
      showConfirmButton: false,
    })
    if (isCreate.value && keepAdding.value) {
      resetForm()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      goList()
    }
  } catch (e) {
    const fe = e?.fieldErrors || e?.response?.data?.errors || {}
    fieldErrors.value = fe
    const first = Object.values(fe)[0]
    submitError.value = first ? (Array.isArray(first) ? first[0] : String(first)) : ''
  } finally {
    processing.value = false
  }
}

function goList() {
  const n = String(route.name || '')
  const base = n.replace(/(Create|Edit|Duplicate)$/, '')
  router.push({ name: base + 'List' })
}

const navs = computed(() => route.meta.navs || [])

onMounted(async () => {
  await Promise.all([loadPreRequisite(), loadRecord()])
  initialized.value = true
})
</script>
