<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: { type: String, default: '' },
})

const html = computed(() => {
  let s = props.content || ''
  s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  s = s.replace(/^### (.*)$/gm, '<h3>$1</h3>')
  s = s.replace(/^## (.*)$/gm, '<h2>$1</h2>')
  s = s.replace(/^# (.*)$/gm, '<h1>$1</h1>')
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/\*(.*?)\*/g, '<em>$1</em>')
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>')
  s = s.replace(/^\- (.*)$/gm, '<li>$1</li>')
  s = s.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')
  s = s.replace(/\n\n/g, '<br/><br/>')
  return s
})
</script>

<template>
  <div class="prose prose-sm max-w-none text-sm leading-relaxed" v-html="html" />
</template>
