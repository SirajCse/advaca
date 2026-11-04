<template>
  <div>
    <ol class="mb-8 flex items-center justify-center gap-2 text-sm">
      <li v-for="(step, index) in steps" :key="step.name" class="flex items-center gap-2">
        <span class="flex h-8 w-8 items-center justify-center rounded-full font-semibold" :class="stepIndex >= index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'">{{ index + 1 }}</span>
        <span :class="stepIndex >= index ? 'text-gray-800' : 'text-gray-400'">{{ step.label }}</span>
        <span v-if="index < steps.length - 1" class="mx-1 h-px w-8 bg-gray-300" />
      </li>
    </ol>
    <base-card>
      <component :is="current.component" v-model:form="form" :errors="formErrors" />
      <div class="mt-6 flex justify-between">
        <base-button v-if="stepIndex > 0" variant="secondary" @click="stepIndex--">Back</base-button>
        <span v-else />
        <base-button :loading="loading" @click="next">{{ stepIndex === steps.length - 1 ? 'Install' : 'Next' }}</base-button>
      </div>
    </base-card>
  </div>
</template>

<script>
const env = { name: 'environment', label: 'Environment' };
const db = { name: 'database', label: 'Database' };
const admin = { name: 'admin', label: 'Admin account' };
const org = { name: 'organization', label: 'Organization' };

export default {
  data() {
    return {
      stepIndex: 0,
      loading: false,
      form: {},
      steps: [
        { ...env, component: 'InstallEnvironment' },
        { ...db, component: 'InstallDatabase' },
        { ...org, component: 'InstallOrganization' },
        { ...admin, component: 'InstallAdmin' },
      ].map((step) => ({ ...step })),
    };
  },
  computed: {
    current() {
      return this.steps[this.stepIndex];
    },
    formErrors() {
      return this.$store.state.setup.formErrors || {};
    },
  },
  methods: {
    async next() {
      if (this.stepIndex < this.steps.length - 1) {
        this.stepIndex++;
        return;
      }
      this.loading = true;
      try {
        await this.$store.dispatch('setup/install');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
