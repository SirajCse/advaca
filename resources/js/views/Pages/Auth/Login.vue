<template>
  <div class="flex min-h-full items-center justify-center bg-gray-50 px-4 py-12">
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-extrabold text-gray-900">{{ $trans('auth.login.page_title') || 'Sign in' }}</h1>
        <p class="mt-2 text-sm text-gray-500">{{ $trans('auth.login.page_description') || 'Sign in to continue' }}</p>
      </div>
      <div class="rounded-xl bg-white p-8 shadow">
        <form @submit.prevent="submit">
          <base-input v-model="form.email" type="email" :label="$trans('auth.email') || 'Email'" class="mb-4" required />
          <base-input v-model="form.password" type="password" :label="$trans('auth.password') || 'Password'" class="mb-2" required />
          <form-error v-if="formErrors.email" :message="formErrors.email" class="mb-2" />
          <div class="mb-4 flex items-center justify-between">
            <base-checkbox v-model="form.remember" :label="$trans('auth.remember_me') || 'Remember me'" />
            <router-link to="/password" class="text-sm text-primary hover:underline">
              {{ $trans('auth.forgot_password') || 'Forgot password?' }}
            </router-link>
          </div>
          <base-button type="submit" :loading="loading" class="w-full">
            {{ $trans('auth.login') || 'Sign in' }}
          </base-button>
        </form>
        <div v-if="otherLogins.length" class="mt-6 border-t border-gray-100 pt-4 text-center text-sm">
          <router-link v-for="login in otherLogins" :key="login.to" :to="login.to" class="mr-3 text-primary hover:underline">
            {{ login.label }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { email: '', password: '', remember: false, device_name: 'browser' },
      loading: false,
    };
  },
  computed: {
    formErrors() {
      return this.$store.state.auth.formErrors || {};
    },
    authConfig() {
      return this.$store.state.config.auth || {};
    },
    otherLogins() {
      const items = [];
      if (this.authConfig.enableEmailOtpLogin) items.push({ label: this.$trans('auth.email_otp_login') || 'Email OTP', to: '/email-otp-login' });
      if (this.authConfig.enableSmsOtpLogin) items.push({ label: this.$trans('auth.sms_otp_login') || 'SMS OTP', to: '/sms-otp-login' });
      if (this.authConfig.enableRegistration) items.push({ label: this.$trans('auth.register') || 'Register', to: '/register' });
      return items;
    },
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await this.$form.submit(this.$store.state.auth, 'auth/login', this.form, {
          successMessage: this.$trans('auth.welcome') || 'Welcome back!',
        });
        const redirect = this.$route.query.ref || '/home';
        this.$router.push(redirect);
      } catch (error) {
        // errors already committed to store
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
