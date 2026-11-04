<template>
  <v-dropdown placement="left-start">
    <button type="button" class="rounded p-1 text-gray-400 hover:text-gray-600">
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
    </button>
    <template #popper>
      <div class="min-w-[140px] rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
        <slot />
      </div>
    </template>
  </v-dropdown>
</template>

<script>
export default {
  name: 'RowAction',
};
</script>
