<template>
  <aside class="w-56 shrink-0">
    <nav class="rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
      <slot />
    </nav>
  </aside>
</template>

<script>
export default { name: 'ConfigSidebar' };
</script>
