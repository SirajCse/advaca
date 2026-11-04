<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
    <h1 class="text-6xl font-extrabold text-primary">{{ code }}</h1>
    <p class="mt-3 text-lg text-gray-600">{{ message }}</p>
    <router-link to="/" class="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
      {{ $trans('global.back_to_home') || 'Back to home' }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    code: { type: [String, Number], default: 404 },
    message: { type: String, default: '' },
  },
};
</script>
