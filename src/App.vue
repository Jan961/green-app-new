<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-toolbar-title>Green App</v-toolbar-title>
      <v-spacer />
      <v-btn to="/about" variant="text">About</v-btn>
      <v-btn to="/volunteer" variant="text">Volunteer</v-btn>
      <v-btn to="/contact" variant="text">Contact</v-btn>
      <v-btn to="/donate" color="primary" variant="flat">Donate</v-btn>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
