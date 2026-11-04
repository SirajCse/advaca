<template>
  <div>
    <base-label v-if="label" class="mb-1">{{ label }}</base-label>
    <div
      class="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-primary"
      @click="$refs.file.click()"
      @dragover.prevent
      @drop.prevent="onDrop"
    >
      <img v-if="preview" :src="preview" class="max-h-40 rounded" alt="preview" />
      <div v-else class="text-sm text-gray-500">
        <slot name="empty">{{ $trans('global.upload_file') || 'Click or drop file to upload' }}</slot>
      </div>
    </div>
    <input ref="file" type="file" class="hidden" :accept="accept" @change="onChange" />
    <form-error v-if="error" :message="error" />
  </div>
</template>

<script>
export default {
  name: 'MediaUpload',
  props: {
    modelValue: { type: [String, File], default: '' },
    label: { type: String, default: '' },
    accept: { type: String, default: '*' },
    error: { type: [String, Array], default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return { preview: '' };
  },
  methods: {
    onChange(event) {
      this.setFile(event.target.files[0]);
    },
    onDrop(event) {
      this.setFile(event.dataTransfer.files[0]);
    },
    setFile(file) {
      if (!file) return;
      this.$emit('update:modelValue', file);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
