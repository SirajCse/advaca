<!--
  Page: Config/Auth/Index.vue  (auto-generated full implementation - settings)
-->
<template>
  <div class="space-y-5">
    <PageHeader title="Auth" :navs="navs">
      <PageHeaderAction base="config.auth" title="Auth" :actions="[]" />
    </PageHeader>

    <ParentTransition appear :visibility="initialized">
      <form @submit.prevent="save">
        <Card>
          <CardHeader>
            <CardTitle>Auth settings</CardTitle>
            <CardDescription>Configure Auth options for your institution.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
                    <div class="space-y-1.5">
          <Label for="session_lifetime">Session lifetime<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="session_lifetime" v-model="form.session_lifetime" type="text" :class="errors.session_lifetime ? 'border-destructive' : ''" />
          <p v-if="errors.session_lifetime" class="text-xs text-destructive">{{ String(errors.session_lifetime[0] || errors.session_lifetime) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="login_throttle_max_attempts">Login throttle max attempts<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="login_throttle_max_attempts" v-model="form.login_throttle_max_attempts" type="text" :class="errors.login_throttle_max_attempts ? 'border-destructive' : ''" />
          <p v-if="errors.login_throttle_max_attempts" class="text-xs text-destructive">{{ String(errors.login_throttle_max_attempts[0] || errors.login_throttle_max_attempts) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="login_throttle_lock_timeout">Login throttle lock timeout<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="login_throttle_lock_timeout" v-model="form.login_throttle_lock_timeout" type="text" :class="errors.login_throttle_lock_timeout ? 'border-destructive' : ''" />
          <p v-if="errors.login_throttle_lock_timeout" class="text-xs text-destructive">{{ String(errors.login_throttle_lock_timeout[0] || errors.login_throttle_lock_timeout) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_reset_password">Enable reset password</Label>
          </div>
          <Switch id="enable_reset_password" v-model="form.enable_reset_password" />
        </div>

        <div class="space-y-1.5">
          <Label for="reset_password_token_lifetime">Reset password token lifetime<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="reset_password_token_lifetime" v-model="form.reset_password_token_lifetime" type="password" :class="errors.reset_password_token_lifetime ? 'border-destructive' : ''" />
          <p v-if="errors.reset_password_token_lifetime" class="text-xs text-destructive">{{ String(errors.reset_password_token_lifetime[0] || errors.reset_password_token_lifetime) }}</p>
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_registration">Enable registration</Label>
          </div>
          <Switch id="enable_registration" v-model="form.enable_registration" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_registration_terms">Enable registration terms</Label>
          </div>
          <Switch id="enable_registration_terms" v-model="form.enable_registration_terms" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_email_verification">Enable email verification</Label>
          </div>
          <Switch id="enable_email_verification" v-model="form.enable_email_verification" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_account_approval">Enable account approval</Label>
          </div>
          <Switch id="enable_account_approval" v-model="form.enable_account_approval" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_two_factor_security">Enable two factor security</Label>
          </div>
          <Switch id="enable_two_factor_security" v-model="form.enable_two_factor_security" />
        </div>

        <div class="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label for="enable_oauth_login">Enable oauth login</Label>
          </div>
          <Switch id="enable_oauth_login" v-model="form.enable_oauth_login" />
        </div>

        <div class="space-y-1.5">
          <Label for="google_client_id">Google client id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="google_client_id" v-model="form.google_client_id" type="text" :class="errors.google_client_id ? 'border-destructive' : ''" />
          <p v-if="errors.google_client_id" class="text-xs text-destructive">{{ String(errors.google_client_id[0] || errors.google_client_id) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="google_client_secret">Google client secret<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="google_client_secret" v-model="form.google_client_secret" type="password" :class="errors.google_client_secret ? 'border-destructive' : ''" />
          <p v-if="errors.google_client_secret" class="text-xs text-destructive">{{ String(errors.google_client_secret[0] || errors.google_client_secret) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="facebook_client_id">Facebook client id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="facebook_client_id" v-model="form.facebook_client_id" type="text" :class="errors.facebook_client_id ? 'border-destructive' : ''" />
          <p v-if="errors.facebook_client_id" class="text-xs text-destructive">{{ String(errors.facebook_client_id[0] || errors.facebook_client_id) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="facebook_client_secret">Facebook client secret<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="facebook_client_secret" v-model="form.facebook_client_secret" type="password" :class="errors.facebook_client_secret ? 'border-destructive' : ''" />
          <p v-if="errors.facebook_client_secret" class="text-xs text-destructive">{{ String(errors.facebook_client_secret[0] || errors.facebook_client_secret) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="twitter_client_id">Twitter client id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="twitter_client_id" v-model="form.twitter_client_id" type="text" :class="errors.twitter_client_id ? 'border-destructive' : ''" />
          <p v-if="errors.twitter_client_id" class="text-xs text-destructive">{{ String(errors.twitter_client_id[0] || errors.twitter_client_id) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="twitter_client_secret">Twitter client secret<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="twitter_client_secret" v-model="form.twitter_client_secret" type="password" :class="errors.twitter_client_secret ? 'border-destructive' : ''" />
          <p v-if="errors.twitter_client_secret" class="text-xs text-destructive">{{ String(errors.twitter_client_secret[0] || errors.twitter_client_secret) }}</p>
        </div>

        <div class="space-y-1.5">
          <Label for="github_client_id">Github client id<span v-if="false" class="text-destructive"> *</span></Label>
          <Input id="github_client_id" v-model="form.github_client_id" type="text" :class="errors.github_client_id ? 'border-destructive' : ''" />
          <p v-if="errors.github_client_id" class="text-xs text-destructive">{{ String(errors.github_client_id[0] || errors.github_client_id) }}</p>
        </div>


            <p v-if="submitError" class="text-sm text-destructive">{{ submitError }}</p>
          </CardContent>
          <div class="flex items-center justify-end gap-2 border-t p-4">
            <Button type="submit" :disabled="processing">{{ processing ? 'Saving…' : 'Save settings' }}</Button>
          </div>
        </Card>
      </form>
    </ParentTransition>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import PageHeaderAction from '@/views/Components/PageHeaderAction.vue'
import ParentTransition from '@/views/Layouts/ParentTransition.vue'
import FormSelect from '@/views/Components/FormSelect.vue'
import { storeAppConfig, getAppConfig } from '@/api/config'

const title = 'Auth'
const initialized = ref(false)
const processing = ref(false)
const submitError = ref('')
const errors = ref({})

const navs = [
    { label: 'Config' },
    { label: 'Auth' },
  ]

const form = reactive({
    session_lifetime: "",
    login_throttle_max_attempts: "",
    login_throttle_lock_timeout: "",
    enable_reset_password: false,
    reset_password_token_lifetime: "",
    enable_registration: false,
    enable_registration_terms: false,
    enable_email_verification: false,
    enable_account_approval: false,
    enable_two_factor_security: false,
    enable_oauth_login: false,
    google_client_id: "",
    google_client_secret: "",
    facebook_client_id: "",
    facebook_client_secret: "",
    twitter_client_id: "",
    twitter_client_secret: "",
    github_client_id: "",
  })

async function load() {
  try {
    const { data } = await getAppConfig()
    const section = data?.config?.auth ?? data?.auth
    if (section && typeof section === 'object') {
      Object.keys(form).forEach((k) => {
        if (section[k] !== undefined && section[k] !== null) {
          if (typeof form[k] === 'boolean') form[k] = !!section[k]
          else form[k] = section[k]
        }
      })
    }
  } catch {}
  initialized.value = true
}

async function save() {
  processing.value = true
  errors.value = {}
  submitError.value = ''
  try {
    await storeAppConfig({ auth: { ...form } })
    Swal.fire({ icon: 'success', title: 'Saved', text: 'Auth settings saved.', toast: true, position: 'top-end', timer: 3000, showConfirmButton: false })
  } catch (e) {
    if (e.fieldErrors) errors.value = e.fieldErrors
    if (e.toastMessage) submitError.value = e.toastMessage
  }
  processing.value = false
}

onMounted(load)
</script>
