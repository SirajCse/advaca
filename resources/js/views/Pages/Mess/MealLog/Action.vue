<!--
  Page: Mess/MealLog/Action.vue  (auto-generated full implementation - create & edit)
  API:   messMessMealLogs @ app/mess/mess/meal-logs
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Meal Log' : 'Edit Meal Log'" :navs="navs">
      <PageHeaderAction base="mess.meal-log" title="Meal Log" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Meal Log' : 'Edit Meal Log'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'mess.meal-log.index' }"
        @submit="submit"
      >
                <FormRelationSelect
          v-model="form.meal"
          :options="relationOptions.meal"
          label="Meal"
          :required="true"
          :error="errors.meal ? String(errors.meal[0] || errors.meal) : ''"
        />

        <div class="space-y-1.5">
          <Label for="date">Date<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="date" v-model="form.date" type="date" :class="errors.date ? 'border-destructive' : ''" />
          <p v-if="errors.date" class="text-xs text-destructive">{{ String(errors.date[0] || errors.date) }}</p>
        </div>

        <FormArrayInput
          v-model="form.menu_items"
          label="Item"
          :required="true"
          placeholder="Add value"
          :error="errors.menu_items ? String(errors.menu_items[0] || errors.menu_items) : ''"
        />

        <div class="space-y-1.5">
          <Label for="description">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="description" v-model="form.description" :rows="4" />
          <p v-if="errors.description" class="text-xs text-destructive">{{ String(errors.description[0] || errors.description) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="remarks">Remarks<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="remarks" v-model="form.remarks" :rows="4" />
          <p v-if="errors.remarks" class="text-xs text-destructive">{{ String(errors.remarks[0] || errors.remarks) }}</p>
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
import { messMessMealLogs } from '@/api/mess'

const route = useRoute()
const router = useRouter()

const title = 'Meal Log'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Mess' },
    { label: 'Meal Log' },
  ]

const form = reactive({
    meal: "",
    date: "",
    menu_items: [],
    description: "",
    remarks: "",
  })

const relationOptions = reactive({
    meal: []
  })

async function loadPreRequisite() {
  if (typeof messMessMealLogs.preRequisite !== 'function') return
  try {
    const { data } = await messMessMealLogs.preRequisite()
    preReq.value = data
    
    relationOptions['meal'] = pickPreReq(preReq.value, 'meal')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await messMessMealLogs.show(uuid)
    const record = data?.meallog ?? data
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
      const res = await messMessMealLogs.store({ ...form })
      message = res.data?.message || 'Meal Log created successfully.'
    } else {
      const res = await messMessMealLogs.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Meal Log updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'mess.meal-log.index' })
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
