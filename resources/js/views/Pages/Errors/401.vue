<template>
  <error-page :code="401" :message="$trans('general.errors.unauthenticated') || 'You need to sign in first'" />
</template>

<script>
export default { name: 'Error401' };
</script>
