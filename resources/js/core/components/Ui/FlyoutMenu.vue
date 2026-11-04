<template>
  <v-dropdown>
    <slot name="trigger">
      <button type="button" class="rounded p-1 text-gray-400 hover:text-gray-600">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
      </button>
    </slot>
    <template #popper>
      <div class="min-w-[160px] rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
        <slot />
      </div>
    </template>
  </v-dropdown>
</template>

<script>
export default { name: 'FlyoutMenu' };
</script>
