<template>
  <error-page :code="403" :message="$trans('general.errors.forbidden') || 'You do not have permission to access this page'" />
</template>

<script>
export default { name: 'Error403' };
</script>
