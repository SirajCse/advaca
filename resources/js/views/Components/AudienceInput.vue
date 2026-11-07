<script setup>
defineProps({
  modelValue: { type: [Array, String], default: () => [] },
  options: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-2">
    <label class="text-sm font-medium">Audience</label>
    <div class="flex flex-wrap gap-3">
      <label v-for="o in options" :key="o.value" class="flex items-center gap-1.5 text-sm">
        <input
          type="checkbox"
          :value="o.value"
          :checked="Array.isArray(modelValue) ? modelValue.includes(o.value) : false"
          class="h-4 w-4"
          @change="(e) => {
            const next = Array.isArray(modelValue) ? [...modelValue] : []
            if (e.target.checked) next.push(o.value)
            else next.splice(next.indexOf(o.value), 1)
            emit('update:modelValue', next)
          }"
        />
        {{ o.label }}
      </label>
    </div>
  </div>
</template>
