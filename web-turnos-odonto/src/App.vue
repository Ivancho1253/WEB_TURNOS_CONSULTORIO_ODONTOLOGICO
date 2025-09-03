<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="min-h-screen gradient-bg">
    <RouterView />
  </div>
</template>

<style>
/* Custom styles for specific components that need special handling */
.hero-bg {
  background: linear-gradient(rgba(14, 165, 233, 0.8), rgba(2, 132, 199, 0.8)), url('/images/background_header.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
