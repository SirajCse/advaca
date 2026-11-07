<script setup>
import GuestHeader from '@/views/Components/GuestHeader.vue'
import FooterCredit from '@/views/Components/FooterCredit.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background text-foreground">
    <GuestHeader />
    <main class="flex flex-1 items-center justify-center p-4">
      <div class="w-full max-w-md">
        <RouterView />
      </div>
    </main>
    <FooterCredit />
  </div>
</template>
