<template>
  <error-page :code="500" :message="$trans('general.errors.something_went_wrong') || 'Something went wrong'" />
</template>

<script>
export default { name: 'ErrorGeneral' };
</script>
