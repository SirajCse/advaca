<!--
  Page: Academic/IdCardTemplate/Action.vue  (auto-generated full implementation - create & edit)
  API:   academicIdCardTemplates @ app/academic/id-card-templates
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Id Card Template' : 'Edit Id Card Template'" :navs="navs">
      <PageHeaderAction base="academic.id-card-template" title="Id Card Template" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Id Card Template' : 'Edit Id Card Template'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'academic.id-card-template.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="name">Name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="name" v-model="form.name" type="text" :class="errors.name ? 'border-destructive' : ''" />
          <p v-if="errors.name" class="text-xs text-destructive">{{ String(errors.name[0] || errors.name) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="custom_template_file_name">Custom template file name<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="custom_template_file_name" v-model="form.custom_template_file_name" type="text" :class="errors.custom_template_file_name ? 'border-destructive' : ''" />
          <p v-if="errors.custom_template_file_name" class="text-xs text-destructive">{{ String(errors.custom_template_file_name[0] || errors.custom_template_file_name) }}</p>
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
import { academicIdCardTemplates } from '@/api/academic'

const route = useRoute()
const router = useRouter()

const title = 'Id Card Template'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Academic' },
    { label: 'Id Card Template' },
  ]

const form = reactive({
    name: "",
    custom_template_file_name: "",
  })

const relationOptions = reactive({})

async function loadPreRequisite() {
  if (typeof academicIdCardTemplates.preRequisite !== 'function') return
  try {
    const { data } = await academicIdCardTemplates.preRequisite()
    preReq.value = data
        // no relation fields
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await academicIdCardTemplates.show(uuid)
    const record = data?.idcardtemplate ?? data
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
      const res = await academicIdCardTemplates.store({ ...form })
      message = res.data?.message || 'Id Card Template created successfully.'
    } else {
      const res = await academicIdCardTemplates.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Id Card Template updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'academic.id-card-template.index' })
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
