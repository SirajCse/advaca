<script setup>
// Communication compose — /communication/{emails,sms,whatsapp,push-messages}/new
// 1:1 with the old Communication/{Email,SMS,WhatsApp,PushMessage} compose pages:
// audience type selects (student/employee), inclusion/exclusion filters, and the
// message body. Sends via POST app/communication/{emails|sms|whats-app|push-messages}.
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import { Textarea } from '@/components/ui/textarea'
import http from '@/lib/http'

const route = useRoute()
const router = useRouter()

const KINDS = {
  CommunicationEmailNew: { path: 'communication/emails', title: 'Send Email', hasContent: false },
  CommunicationSMSNew: { path: 'communication/sms', title: 'Send SMS', hasContent: true },
  CommunicationWhatsAppNew: { path: 'communication/whats-app', title: 'Send WhatsApp', hasContent: true, hasTemplate: true },
  CommunicationPushMessageNew: { path: 'communication/push-messages', title: 'Send Push Message', hasContent: true },
}
const cfg = computed(() => KINDS[route.name] || { path: 'communication/emails', title: 'Compose', hasContent: false })

const form = reactive({
  student_audience_type: '',
  employee_audience_type: '',
  subject: '',
  inclusion: '',
  exclusion: '',
  content: '',
  template_code: '',
})
const preReq = ref({})
const processing = ref(false)
const submitError = ref('')

async function loadPreReq() {
  try {
    const { data } = await http.get('/app/communication/pre-requisite')
    preReq.value = data || {}
  } catch {
    try {
      const { data } = await http.get('/app/config/options?category=audience_type&all=true')
      preReq.value = { audienceTypes: data?.data || data || [] }
    } catch { /* optional */ }
  }
}

const audienceOptions = computed(() => {
  const s = preReq.value.studentAudienceTypes || preReq.value.student_audience_types || []
  return s.map((r) => ({ value: r.value ?? r.uuid ?? r.id ?? r.name, label: r.name ?? r.label ?? String(r.value ?? '') }))
})
const variableOptions = computed(() => {
  const v = preReq.value.preDefinedVariables || preReq.value.pre_defined_variables || []
  return v.map((r) => ({ value: r.value ?? r.name ?? r, label: r.name ?? r.label ?? String(r.value ?? '') }))
})

async function send() {
  processing.value = true
  submitError.value = ''
  try {
    const payload = {
      student_audience_type: form.student_audience_type || null,
      employee_audience_type: form.employee_audience_type || null,
      subject: form.subject,
      inclusion: form.inclusion || null,
      exclusion: form.exclusion || null,
    }
    if (cfg.value.hasContent) payload.content = form.content
    if (cfg.value.hasTemplate) payload.template_code = form.template_code
    await http.post(`/app/${cfg.value.path}`, payload)
    Swal.fire({ icon: 'success', title: 'Success', text: `${cfg.value.title} queued.`, toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
    router.push('/dashboard')
  } catch (e) {
    submitError.value = e?.response?.data?.message || 'could not send'
  } finally {
    processing.value = false
  }
}

onMounted(loadPreReq)
</script>

<template>
  <div class="space-y-4">
    <PageHeader :title="cfg.title" :navs="route.meta.navs || []" />
    <ParentTransition :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>{{ cfg.title }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-5">
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-1.5">
              <Label for="sat">Student audience</Label>
              <select id="sat" v-model="form.student_audience_type" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm">
                <option value="">Select</option>
                <option v-for="o in audienceOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
            </div>
            <div class="space-y-1.5">
              <Label for="eat">Employee audience</Label>
              <select id="eat" v-model="form.employee_audience_type" class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm">
                <option value="">Select</option>
                <option v-for="o in audienceOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
            </div>
            <div class="space-y-1.5">
              <Label for="subj">Subject</Label>
              <Input id="subj" v-model="form.subject" />
            </div>
            <div v-if="cfg.hasTemplate" class="space-y-1.5">
              <Label for="tc">Template code</Label>
              <Input id="tc" v-model="form.template_code" />
            </div>
          </div>
          <div class="grid gap-5 md:grid-cols-2">
            <div class="space-y-1.5">
              <Label for="inc">Inclusion filter</Label>
              <Textarea id="inc" v-model="form.inclusion" rows="3" placeholder="one value per line" />
            </div>
            <div class="space-y-1.5">
              <Label for="exc">Exclusion filter</Label>
              <Textarea id="exc" v-model="form.exclusion" rows="3" placeholder="one value per line" />
            </div>
          </div>
          <div v-if="cfg.hasContent" class="space-y-1.5">
            <Label for="cnt">Content</Label>
            <Textarea id="cnt" v-model="form.content" rows="6" />
          </div>
          <div v-if="variableOptions.length" class="flex flex-wrap gap-2">
            <code v-for="v in variableOptions" :key="v.value" class="rounded bg-muted px-2 py-0.5 text-xs">{{ v.label }}</code>
          </div>
          <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
          <div class="flex justify-end gap-3">
            <Button type="button" variant="outline" @click="router.back()">Cancel</Button>
            <Button type="button" :disabled="processing" @click="send">{{ processing ? 'Sending…' : 'Send' }}</Button>
          </div>
        </CardContent>
      </Card>
    </ParentTransition>
  </div>
</template>
