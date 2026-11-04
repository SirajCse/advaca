<template>
  <div class="divide-y divide-gray-100">
    <div v-for="notification in notifications" :key="notification.uuid" class="px-4 py-3 text-sm hover:bg-gray-50">
      <p class="font-medium text-gray-800">{{ notification.title }}</p>
      <p class="text-xs text-gray-500">{{ notification.description }}</p>
    </div>
    <p v-if="!notifications.length" class="px-4 py-6 text-center text-sm text-gray-400">No notifications</p>
  </div>
</template>

<script>
export default {
  name: 'NotificationList',
  data() {
    return { notifications: [] };
  },
};
</script>
