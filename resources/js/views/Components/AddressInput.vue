<script setup>
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps({
  modelValue: { type: Object, default: () => ({}) },
  label: { type: String, default: 'Address' },
})
const emit = defineEmits(['update:modelValue'])
const address = computed(() => props.modelValue || {})

function updateField(key, value) {
  emit('update:modelValue', { ...address.value, [key]: value })
}
</script>

<template>
  <div class="space-y-3">
    <Label>{{ label }}</Label>
    <div class="grid gap-3 md:grid-cols-2">
      <Input :model-value="address.address_line1" placeholder="Address line 1" @update:model-value="updateField('address_line1', $event)" />
      <Input :model-value="address.address_line2" placeholder="Address line 2" @update:model-value="updateField('address_line2', $event)" />
      <Input :model-value="address.city" placeholder="City" @update:model-value="updateField('city', $event)" />
      <Input :model-value="address.state" placeholder="State" @update:model-value="updateField('state', $event)" />
      <Input :model-value="address.zipcode" placeholder="Zipcode" @update:model-value="updateField('zipcode', $event)" />
      <Input :model-value="address.country" placeholder="Country" @update:model-value="updateField('country', $event)" />
    </div>
  </div>
</template>
