<script setup>
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
defineProps({ variant: { type: String, default: 'default' } })
</script>
<template><DropdownMenuItem :variant="variant"><slot /></DropdownMenuItem></template>
