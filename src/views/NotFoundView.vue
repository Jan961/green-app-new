<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundView',
})
</script>

<template>
  <v-container class="py-16 d-flex flex-column align-center justify-center text-center">
    <div class="text-h2 mb-2">404</div>
    <div class="text-h5 mb-6">Page not found</div>
    <div class="mb-8">
      The page you are looking for doesn't exist or has been moved.
    </div>
    <RouterLink to="/about">
      <v-btn color="primary" rounded="xl" variant="flat">Go to Home</v-btn>
    </RouterLink>
  </v-container>
  
</template>

<style scoped>

</style>


