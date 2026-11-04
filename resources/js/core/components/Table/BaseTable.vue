<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
    <table class="min-w-full divide-y divide-gray-200 text-sm">
      <slot />
    </table>
  </div>
</template>

<script>
export default { name: 'BaseTable' };
</script>
