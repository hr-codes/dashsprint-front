<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<script>
export default {
  async created() {
    document.title = import.meta.env.VITE_APP_NAME;
  },
};
</script>
