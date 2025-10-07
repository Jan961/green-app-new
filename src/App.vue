<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: { Footer, Header },
})
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>

</style>
