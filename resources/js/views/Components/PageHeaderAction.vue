<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Pencil, Plus, Printer } from 'lucide-vue-next'

const props = defineProps({
  base: { type: String, required: true },   // e.g. 'academic.batches'
  title: { type: String, default: '' },
  actions: { type: Array, default: () => [] },
  editUuid: { type: String, default: '' },
})

const router = useRouter()

const visible = computed(() => ({
  create: props.actions.includes('create'),
  list: props.actions.includes('list'),
  edit: props.actions.includes('edit') && !!props.editUuid,
  print: props.actions.includes('print'),
}))

function goCreate() {
  router.push({ name: `${props.base}.create` })
}
function goList() {
  router.push({ name: `${props.base}.index` })
}
function goEdit() {
  router.push({ name: `${props.base}.edit`, params: { uuid: props.editUuid } })
}
function goPrint() {
  window.print()
}
</script>

<template>
  <Button v-if="visible.list" variant="outline" size="sm" @click="goList">
    <ArrowLeft class="h-4 w-4" />
    Back
  </Button>
  <Button v-if="visible.print" variant="outline" size="sm" @click="goPrint">
    <Printer class="h-4 w-4" />
    Print
  </Button>
  <Button v-if="visible.edit" variant="secondary" size="sm" @click="goEdit">
    <Pencil class="h-4 w-4" />
    Edit
  </Button>
  <Button v-if="visible.create" size="sm" @click="goCreate">
    <Plus class="h-4 w-4" />
    New {{ title }}
  </Button>
</template>
