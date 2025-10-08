<template>
    <v-app-bar 
    :class="appBarClasses"
    >
      <v-toolbar-title>
        <RouterLink to="/" class="site-logo-link" aria-label="Home">
          <SiteLogo class="site-logo" />
        </RouterLink>
      </v-toolbar-title>
      <v-spacer />
      <v-btn to="/about" variant="flat">About</v-btn>
      <v-btn to="/volunteer" variant="flat">Volunteer</v-btn>
      <v-btn to="/contact" variant="flat">Contact</v-btn>
      <v-btn to="/donate" color="primary" variant="flat">Donate</v-btn>
    </v-app-bar>

</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import SiteLogo from '@/components/icons/SiteLogo.vue'
const atTop = ref(true)
function updateAtTop (): void {
  const y = typeof window !== 'undefined' ? (window.scrollY ?? 0) : 0
  atTop.value = y <= 0
}
onMounted(() => {
  updateAtTop()
  window.addEventListener('scroll', updateAtTop, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateAtTop)
})
const appBarClasses = computed(() => ({
  'app-bar--top': atTop.value,
  'app-bar--scrolled': !atTop.value,
}))
</script>
<style scoped>
.app-bar--top {
  transition: background-color 200ms ease, box-shadow 200ms ease, backdrop-filter 200ms ease;
  background-color: red;
  box-shadow: none;
}
.app-bar--scrolled {
  transition: background-color 200ms ease, box-shadow 200ms ease, backdrop-filter 200ms ease;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(12px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}

.site-logo-link {
  display: inline-block;
  line-height: 0;
  text-decoration: none;
}

.site-logo {
  height: 56px; /* large at top */
  width: auto;
}

</style>
