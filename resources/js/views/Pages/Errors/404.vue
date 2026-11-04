<template>
  <error-page :code="404" :message="$trans('general.errors.not_found') || 'Page not found'" />
</template>

<script>
export default { name: 'Error404' };
</script>
