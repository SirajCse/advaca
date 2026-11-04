<template>
  <div class="flex gap-1">
    <button type="button" class="rounded p-1 text-gray-400 hover:text-primary" title="Add row" @click="$emit('add')">
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v5.5h5.5a.75.75 0 010 1.5h-5.5v5.5a.75.75 0 01-1.5 0v-5.5h-5.5a.75.75 0 010-1.5h5.5v-5.5A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
    </button>
    <button type="button" class="rounded p-1 text-gray-400 hover:text-danger" title="Remove row" @click="$emit('remove')">
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" /></svg>
    </button>
    <button type="button" class="rounded p-1 text-gray-400 hover:text-info" title="Copy row" @click="$emit('copy')">
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5H13v2.5A1.5 1.5 0 0111.5 18h-6A1.5 1.5 0 014 16.5v-6A1.5 1.5 0 015.5 9H7V3.5z" /></svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'RowCopyButtons',
  emits: ['add', 'remove', 'copy'],
};
</script>
