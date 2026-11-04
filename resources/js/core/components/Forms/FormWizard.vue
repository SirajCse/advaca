<template>
  <div>
    <ol class="mb-6 flex items-center">
      <li v-for="(step, index) in steps" :key="step" class="flex items-center">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          :class="index <= current ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'"
        >{{ index + 1 }}</span>
        <span class="ml-2 text-sm" :class="index <= current ? 'text-gray-900' : 'text-gray-400'">{{ step }}</span>
        <span v-if="index < steps.length - 1" class="mx-3 h-px w-10 bg-gray-300" />
      </li>
    </ol>
    <slot :current="current" />
    <div class="mt-4 flex justify-between">
      <base-button v-if="current > 0" variant="secondary" @click="current--">Back</base-button>
      <base-button v-if="current < steps.length - 1" @click="current++">Next</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormWizard',
  props: { steps: { type: Array, default: () => [] } },
  data() {
    return { current: 0 };
  },
};
</script>
