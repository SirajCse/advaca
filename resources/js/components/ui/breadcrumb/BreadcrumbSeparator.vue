<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
</script>
<template>
  <li aria-hidden="true" role="presentation" class="[&>svg]:size-3.5">
    <slot><ChevronRight /></slot>
  </li>
</template>
