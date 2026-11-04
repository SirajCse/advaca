<template>
  <teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex">
      <div class="flex-1 bg-gray-900/50" @click="$emit('update:modelValue', false)" />
      <div class="w-full max-w-md overflow-y-auto bg-white shadow-xl">
        <div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
          <h3 class="text-sm font-semibold text-gray-800">{{ title }}</h3>
          <button type="button" class="text-gray-400" @click="$emit('update:modelValue', false)">✕</button>
        </div>
        <div class="p-4"><slot /></div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'BaseSideover',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
};
</script>
