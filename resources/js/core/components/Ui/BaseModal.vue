<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto" @click.self="close">
        <div class="flex min-h-full items-center justify-center p-4">
          <div class="w-full rounded-lg bg-white shadow-xl" :class="sizeClass">
            <div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <h3 class="text-sm font-semibold text-gray-800">{{ title }}</h3>
              <button type="button" class="text-gray-400 hover:text-gray-600" @click="close">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.28 3.22a.75.75 0 00-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 101.06 1.06L10 11.06l5.72 5.72a.75.75 0 101.06-1.06L11.06 10l5.72-5.72a.75.75 0 00-1.06-1.06L10 8.94 4.28 3.22z" clip-rule="evenodd" /></svg>
              </button>
            </div>
            <div class="p-4">
              <slot />
            </div>
            <div v-if="$slots.footer" class="border-t border-gray-100 px-4 py-3 text-right">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-40 bg-gray-900/50" @click="close" />
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: '' },
    size: { type: String, default: 'md' },
  },
  emits: ['update:modelValue', 'close'],
  computed: {
    sizeClass() {
      return { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' }[this.size];
    },
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
  },
};
</script>
