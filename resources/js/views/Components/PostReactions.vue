<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ThumbsDown, ThumbsUp } from 'lucide-vue-next'
import http from '@/lib/http'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
  likeUrl: { type: String, default: '' },
})

const likes = ref(props.post?.likes_count || 0)
const dislikes = ref(props.post?.dislikes_count || 0)

async function react(type) {
  try {
    await http.post(props.likeUrl || `/app/posts/${props.post?.uuid}/reaction`, { type })
    if (type === 'like') likes.value++
    else dislikes.value++
  } catch {}
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="outline" size="sm" @click="react('like')">
      <ThumbsUp class="h-4 w-4" />
      {{ likes }}
    </Button>
    <Button variant="outline" size="sm" @click="react('dislike')">
      <ThumbsDown class="h-4 w-4" />
      {{ dislikes }}
    </Button>
  </div>
</template>
