<!--
  Source path: resources/js/views/Pages/Transport/Vehicle/Action.vue
  Component:   Action
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('transport.vehicle')" :navs="navs" />
    <ParentTransition appear :visibility="true">
      <FormAction :title="$t('transport.vehicle')" @submit="submit">
        <template #default>
          <div class="grid grid-cols-3 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <Label for="name">{{ $t('transport.vehicle') }}</Label>
              <Input id="name" v-model="form.name" class="mt-1" />
            </div>
            <div class="col-span-3 sm:col-span-1">
              <Label for="code">Code</Label>
              <Input id="code" v-model="form.code" class="mt-1" />
            </div>
            <div class="col-span-3">
              <Label for="description">Description</Label>
              <Textarea id="description" v-model="form.description" rows="3" class="mt-1" />
            </div>
            <div class="col-span-3 sm:col-span-1">
              <Label for="status">Status</Label>
              <Switch id="status" v-model:checked="form.status" class="mt-2" />
            </div>
          </div>
        </template>
        <template #actions>
          <Button type="submit" :disabled="processing">{ $t('global.save') }</Button>
          <Button variant="outline" @click="back">Cancel</Button>
        </template>
      </FormAction>
    </ParentTransition>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { router } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Components/ParentTransition.vue'
import FormAction from '@/views/Components/FormAction.vue'

const props = defineProps({
  item: { type: Object, default: () => ({}) },
})

const form = reactive({
  name: props.item?.name || '',
  code: props.item?.code || '',
  description: props.item?.description || '',
  status: props.item?.status ?? true,
})

const processing = ref(false)

const navs = [
  { label: 'Transport', path: 'Transport' },
  { label: 'Vehicle', path: 'Action' },
]

const submit = () => {
  processing.value = true
  router.post('/transport/vehicle', form, {
    onFinish: () => { processing.value = false },
  })
}

const back = () => router.back()
</script>
