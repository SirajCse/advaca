<template>
  <v-dropdown placement="top-end">
    <button type="button" class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:opacity-90">
      <slot name="icon">＋</slot>
    </button>
    <template #popper>
      <div class="min-w-[160px] rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
        <slot />
      </div>
    </template>
  </v-dropdown>
</template>

<script>
export default { name: 'FloatingMenu' };
</script>
