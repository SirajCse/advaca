<!--
  Page: Library/Book/Action.vue  (auto-generated full implementation - create & edit)
  API:   libraryLibraryBooks @ app/library/library/books
-->
<template>
  <div class="space-y-5">
    <PageHeader :title="isCreate ? 'New Book' : 'Edit Book'" :navs="navs">
      <PageHeaderAction base="library.book" title="Book" :actions="['list']" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <FormAction
        :title="isCreate ? 'New Book' : 'Edit Book'"
        :processing="processing"
        :is-create="isCreate"
        :back-to="{ name: 'library.book.index' }"
        @submit="submit"
      >
                <div class="space-y-1.5">
          <Label for="title">Title<span v-if="true" class="text-destructive"> *</span></Label>
          <Input id="title" v-model="form.title" type="text" :class="errors.title ? 'border-destructive' : ''" />
          <p v-if="errors.title" class="text-xs text-destructive">{{ String(errors.title[0] || errors.title) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="author">Author<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="author" v-model="form.author" type="text" :class="errors.author ? 'border-destructive' : ''" />
          <p v-if="errors.author" class="text-xs text-destructive">{{ String(errors.author[0] || errors.author) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="publisher">Publisher<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="publisher" v-model="form.publisher" type="text" :class="errors.publisher ? 'border-destructive' : ''" />
          <p v-if="errors.publisher" class="text-xs text-destructive">{{ String(errors.publisher[0] || errors.publisher) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.language"
          :options="relationOptions.language"
          label="Language"
          :required="false"
          :error="errors.language ? String(errors.language[0] || errors.language) : ''"
        />

        <div class="space-y-1.5">
          <Label for="topic">Topic<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="topic" v-model="form.topic" type="text" :class="errors.topic ? 'border-destructive' : ''" />
          <p v-if="errors.topic" class="text-xs text-destructive">{{ String(errors.topic[0] || errors.topic) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.category"
          :options="relationOptions.category"
          label="Category"
          :required="false"
          :error="errors.category ? String(errors.category[0] || errors.category) : ''"
        />

        <div class="space-y-1.5">
          <Label for="sub_title">Sub title<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="sub_title" v-model="form.sub_title" type="text" :class="errors.sub_title ? 'border-destructive' : ''" />
          <p v-if="errors.sub_title" class="text-xs text-destructive">{{ String(errors.sub_title[0] || errors.sub_title) }}</p>
        </div>

        <FormRelationSelect
          v-model="form.subject"
          :options="relationOptions.subject"
          label="Subject"
          :required="false"
          :error="errors.subject ? String(errors.subject[0] || errors.subject) : ''"
        />

        <div class="space-y-1.5">
          <Label for="year_published">Year published<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="year_published" v-model="form.year_published" type="text" :class="errors.year_published ? 'border-destructive' : ''" />
          <p v-if="errors.year_published" class="text-xs text-destructive">{{ String(errors.year_published[0] || errors.year_published) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="volume">Volume<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="volume" v-model="form.volume" type="text" :class="errors.volume ? 'border-destructive' : ''" />
          <p v-if="errors.volume" class="text-xs text-destructive">{{ String(errors.volume[0] || errors.volume) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="isbn_number">Isbn number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="isbn_number" v-model="form.isbn_number" type="text" :class="errors.isbn_number ? 'border-destructive' : ''" />
          <p v-if="errors.isbn_number" class="text-xs text-destructive">{{ String(errors.isbn_number[0] || errors.isbn_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="call_number">Call number<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="call_number" v-model="form.call_number" type="text" :class="errors.call_number ? 'border-destructive' : ''" />
          <p v-if="errors.call_number" class="text-xs text-destructive">{{ String(errors.call_number[0] || errors.call_number) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="edition">Edition<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="edition" v-model="form.edition" type="text" :class="errors.edition ? 'border-destructive' : ''" />
          <p v-if="errors.edition" class="text-xs text-destructive">{{ String(errors.edition[0] || errors.edition) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="type">Type<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="type" v-model="form.type" type="text" :class="errors.type ? 'border-destructive' : ''" />
          <p v-if="errors.type" class="text-xs text-destructive">{{ String(errors.type[0] || errors.type) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="page">Page<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="page" v-model="form.page" type="number" :class="errors.page ? 'border-destructive' : ''" />
          <p v-if="errors.page" class="text-xs text-destructive">{{ String(errors.page[0] || errors.page) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="price">Price<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="price" v-model="form.price" type="number" :class="errors.price ? 'border-destructive' : ''" />
          <p v-if="errors.price" class="text-xs text-destructive">{{ String(errors.price[0] || errors.price) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="summary">Description<span v-if="false" class="text-destructive"> *</span></Label>
          <Textarea id="summary" v-model="form.summary" :rows="4" />
          <p v-if="errors.summary" class="text-xs text-destructive">{{ String(errors.summary[0] || errors.summary) }}</p>
        </div>


        <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
      </FormAction>
    </ParentTransition>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormAction from '@/views/Components/FormAction.vue'
import FormSelect from '@/views/Components/FormSelect.vue'
import FormRelationSelect from '@/views/Components/FormRelationSelect.vue'
import FormArrayInput from '@/views/Components/FormArrayInput.vue'
import { pickPreReq } from '@/lib/helpers'
import { libraryLibraryBooks } from '@/api/library'

const route = useRoute()
const router = useRouter()

const title = 'Book'
const isCreate = computed(() => !route.params.uuid)
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})
const preReq = ref(null)

const navs = [
    { label: 'Library' },
    { label: 'Book' },
  ]

const form = reactive({
    title: "",
    author: "",
    publisher: "",
    language: "",
    topic: "",
    category: "",
    sub_title: "",
    subject: "",
    year_published: "",
    volume: "",
    isbn_number: "",
    call_number: "",
    edition: "",
    type: "",
    page: "",
    price: "",
    summary: "",
  })

const relationOptions = reactive({
    language: [],
    category: [],
    subject: []
  })

async function loadPreRequisite() {
  if (typeof libraryLibraryBooks.preRequisite !== 'function') return
  try {
    const { data } = await libraryLibraryBooks.preRequisite()
    preReq.value = data
    
    relationOptions['language'] = pickPreReq(preReq.value, 'language')
    relationOptions['category'] = pickPreReq(preReq.value, 'category')
    relationOptions['subject'] = pickPreReq(preReq.value, 'subject')
  } catch {}
}

async function loadRecordAndPreReq(uuid) {
  await Promise.all([loadRecord(uuid), loadPreRequisite()])
}

async function loadRecord(uuid) {
  try {
    const { data } = await libraryLibraryBooks.show(uuid)
    const record = data?.book ?? data
        Object.keys(form).forEach((k) => {
      let v = record[k]
      if (v && typeof v === 'object' && !Array.isArray(v)) v = v.uuid ?? v.id ?? v.name ?? ''
      if (v === null || v === undefined) {
        v = Array.isArray(form[k]) ? [] : (typeof form[k] === 'boolean' ? false : '')
      }
      form[k] = v
    })
  } catch {
    // keep defaults
  }
}

async function submit() {
  processing.value = true
  errors.value = {}
  submitError.value = ''
  try {
    let message
    if (isCreate.value) {
      const res = await libraryLibraryBooks.store({ ...form })
      message = res.data?.message || 'Book created successfully.'
    } else {
      const res = await libraryLibraryBooks.update(route.params.uuid, { ...form })
      message = res.data?.message || 'Book updated successfully.'
    }
    Swal.fire({ icon: 'success', title: 'Success', text: message, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push({ name: 'library.book.index' })
  } catch (e) {
    if (e.fieldErrors && Object.keys(e.fieldErrors).length) {
      errors.value = e.fieldErrors
    }
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(async () => {
  if (!isCreate.value) {
    await loadRecordAndPreReq(route.params.uuid)
  } else {
    await loadPreRequisite()
  }
  initialized.value = true
})
</script>
