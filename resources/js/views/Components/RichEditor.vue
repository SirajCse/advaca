<script setup>
// Quill rich text editor — the same editor the original AdvAca frontend used
// (confirmed in the old build bundle: @vueup/vue-quill "QuillEditor").
// Bridges the plain v-model string contract used by FormField.
import { ref, watch, onMounted } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const props = defineProps({
  modelValue: { type: [String, null], default: '' },
  placeholder: { type: String, default: 'Write here...' },
  disabled: { type: Boolean, default: false },
  minHeight: { type: String, default: '180px' },
})
const emit = defineEmits(['update:modelValue'])

const editorRef = ref(null)
let ready = false

// toolbar mirrors the original snow toolbar (headers, inline styles, lists, align, media)
const toolbar = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }, { align: [] }],
  ['link', 'image', 'video'],
  ['clean'],
]

const BLANK = ['<p><br></p>', '<p><br/></p>', '<div><br></div>', '<br>', '']
const isBlank = (h) => !h || BLANK.includes(String(h).trim())

function setHtml(v) {
  if (!editorRef.value || !ready) return
  try { editorRef.value.setHTML(v || '') } catch { /* quill guard */ }
}

function onReady() {
  ready = true
  if (editorRef.value?.getQuill?.()) {
    try { editorRef.value.getQuill().enable(!props.disabled) } catch { /* noop */ }
  }
  if (!isBlank(props.modelValue)) setHtml(props.modelValue)
}

// external value changes (edit form load) — never echo back while typing
watch(() => props.modelValue, (v) => {
  if (!ready) return
  const cur = getHtml()
  if (isBlank(v) && isBlank(cur)) return
  if ((v || '') === cur) return
  setHtml(v)
})

watch(() => props.disabled, (d) => {
  try { editorRef.value?.getQuill?.()?.enable(!d) } catch { /* noop */ }
})

function getHtml() {
  if (!editorRef.value) return ''
  try { return editorRef.value.getHTML() || '' } catch { return '' }
}

function onChange() {
  const h = getHtml()
  emit('update:modelValue', isBlank(h) ? '' : h)
}

onMounted(() => {
  if (props.modelValue) setHtml(props.modelValue)
})
</script>

<template>
  <div class="rich-editor rounded-md border border-input bg-white" :class="{ 'opacity-60 pointer-events-none': disabled }">
    <QuillEditor
      ref="editorRef"
      theme="snow"
      content-type="html"
      :toolbar="toolbar"
      :placeholder="placeholder"
      :style="{ minHeight }"
      class="rich-editor-quill"
      @ready="onReady"
      @update:content="onChange"
    />
  </div>
</template>

<style>
.rich-editor .ql-toolbar {
  border: none;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 6px 6px 0 0;
  font-family: inherit;
}
.rich-editor .ql-container {
  border: none;
  border-radius: 0 0 6px 6px;
  font-family: inherit;
  font-size: 0.875rem;
}
.rich-editor .ql-editor {
  min-height: v-bind(minHeight);
}
.rich-editor .ql-editor.ql-blank::before {
  color: #9ca3af;
  font-style: normal;
}
</style>
