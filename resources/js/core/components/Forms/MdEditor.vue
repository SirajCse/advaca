<template>
  <div>
    <MdEditor
      :model-value="modelValue"
      :toolbars="toolbars"
      editor-id="md-editor"
      class="min-h-[200px]"
      @update:modelValue="$emit('update:modelValue', $event)"
      @on-upload-img="onUploadImg"
    />
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default {
  name: 'MdEditor',
  components: { MdEditor },
  props: {
    modelValue: { type: String, default: '' },
    error: { type: [String, Array], default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      toolbars: ['bold', 'italic', 'heading', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'code', '|', 'preview'],
    };
  },
  methods: {
    onUploadImg(files, callback) {
      callback(Array.isArray(files) ? files.map(() => '') : ['']);
    },
  },
};
</script>
