<script setup>
defineProps({
  modelValue: { type: [String, Object], default: '' },
  options: { type: Array, default: () => [] },
  label: { type: String, default: 'Payment method' },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-1.5">
    <label class="text-sm font-medium">{{ label }}</label>
    <select
      :value="typeof modelValue === 'object' ? modelValue?.payment_method : modelValue"
      class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled>Select payment method</option>
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
  </div>
</template>
