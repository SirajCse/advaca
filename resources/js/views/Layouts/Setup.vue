<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 theme-default">
    <div class="w-full max-w-2xl rounded-xl bg-white p-8 shadow">
      <h1 class="mb-6 text-center text-2xl font-bold text-gray-800">{{ $trans('setup.install.install_wizard') || 'Setup wizard' }}</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
export default { name: 'SetupLayout' };
</script>
