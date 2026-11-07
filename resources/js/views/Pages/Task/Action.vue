<!--
  Page: Task/Action.vue  (auto-generated full implementation - create & edit)
  API:   tasks @ app/tasks
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Task' : 'Edit Task'" :navs="navs">
      <PageHeaderAction base="task" title="Task" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Task' : 'Edit Task'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'task.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="start_date">Start date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="start_date" v-model="form.start_date" type="date" :class="errors.start_date ? 'border-destructive' : ''" />
          <p v-if="errors.start_date" class="text-xs text-destructive">{{ String(errors.start_date[0] || errors.start_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="due_date">Due date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="due_date" v-model="form.due_date" type="date" :class="errors.due_date ? 'border-destructive' : ''" />
          <p v-if="errors.due_date" class="text-xs text-destructive">{{ String(errors.due_date[0] || errors.due_date) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="due_time">Due time<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="due_time" v-model="form.due_time" type="date" :class="errors.due_time ? 'border-destructive' : ''" />
          <p v-if="errors.due_time" class="text-xs text-destructive">{{ String(errors.due_time[0] || errors.due_time) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="false"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="priority">Priority<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="priority" v-model="form.priority" type="text" :class="errors.priority ? 'border-destructive' : ''" />
          <p v-if="errors.priority" class="text-xs text-destructive">{{ String(errors.priority[0] || errors.priority) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>


        <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
      </FormAction>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormAction from '@/views/Components/FormAction.vue'
import FormSelect from '@/views/Components/FormSelect.vue'
import FormRelationSelect from '@/views/Components/FormRelationSelect.vue'
import FormArrayInput from '@/views/Components/FormArrayInput.vue'
import { pickPreReq } from '@/lib/helpers'
import { tasks } from '@/api/tasks'

const route = useRoute()
const router = useRouter()

const title = 'Task'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Task' },
    { label: 'Task' },
  ]

const form = reactive({
    title: "",
    start_date: "",
    due_date: "",
    due_time: "",
    category: "",
    priority: "",
    description: "",
  })

const relationOptions = reactive({
    category: []
  })

async function loadPreRequisite() {
  if (typeof tasks.preRequisite !== 'function') return
  try {
    const { data } = await tasks.preRequisite()
    preReq.value = data
    
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await tasks.show(uuid)
    const record = data?.task ?? data
        Object.keys(form).forEach((k) => {
      let v = record[k]
      if (v && typeof v === 'object' && !Array.isArray(v)) v = v.uuid ?? v.id ?? v.name ?? ''
      if (v === null || v === undefined) {
        v = Array.isArray(form[k]) ? [] : (typeof form[k] === 'boolean' ? false : '')
      }
      form[k] = v
    })
  } catch {
    // keep defaults
  }
}

async function submit() {
  processing.value = true
  errors.value = {}
  submitError.value = ''
  try {
    let message
    if (isCreate.value) {
      const res = await tasks.store({ ...form })
      message = res.data?.message || 'Task created successfully.'
    } else {
      const res = await tasks.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Task updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'task.index' })
  } catch (e) {
    if (e.fieldErrors && Object.keys(e.fieldErrors).length) {
      errors.value = e.fieldErrors
    }
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(async () => {
  if (!isCreate.value) {
    await loadRecordAndPreReq(route.params.uuid)
  } else {
    await loadPreRequisite()
  }
  initialized.value = true
})
</script>
