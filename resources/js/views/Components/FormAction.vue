<template>
  <Card>
    <CardHeader v-if="title || $slots.title">
      <CardTitle><slot name="title">{{ title }}</slot></CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="$emit('submit')" class="space-y-4">
        <slot />
      </form>
    </CardContent>
    <CardFooter v-if="$slots.actions || $slots.footer" class="justify-end space-x-2">
      <slot name="actions" />
      <slot name="footer" />
    </CardFooter>
  </Card>
</template>
<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
defineProps({
  title: { type: [String, Object], default: '' },
  initUrl: { type: String, default: '' },
  initForm: { type: Object, default: () => ({}) },
  form: { type: Object, default: () => ({}) },
  redirect: { type: String, default: '' },
  action: { type: String, default: '' },
})
defineEmits(['submit'])
</script>
