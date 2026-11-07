<!--
  Page: Utility/Todo/Action.vue  (auto-generated full implementation - create & edit)
  API:   utilityTodos @ app/utility/todos
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Todo' : 'Edit Todo'" :navs="navs">
      <PageHeaderAction base="utility.todo" title="Todo" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Todo' : 'Edit Todo'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'utility.todo.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
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
import { utilityTodos } from '@/api/utility'

const route = useRoute()
const router = useRouter()

const title = 'Todo'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Utility' },
    { label: 'Todo' },
  ]

const form = reactive({
    title: "",
    due_date: "",
    due_time: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof utilityTodos.preRequisite !== 'function') return
  try {
    const { data } = await utilityTodos.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await utilityTodos.show(uuid)
    const record = data?.todo ?? data
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
      const res = await utilityTodos.store({ ...form })
      message = res.data?.message || 'Todo created successfully.'
    } else {
      const res = await utilityTodos.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Todo updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'utility.todo.index' })
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
