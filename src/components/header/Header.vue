<template>
    <v-app-bar 
    :class="[ appBarClasses]"
    height='var(--v-navbar-height)'
    >
      <v-toolbar-title class="site-logo-title">
        <RouterLink to="/" class="site-logo-link" aria-label="Home">
          <SiteLogo class="site-logo" />
        </RouterLink>
      </v-toolbar-title>
      <v-spacer />
      <HeaderButton to="/about" >About</HeaderButton>
      <HeaderButton to="/volunteer">Volunteer</HeaderButton>
      <HeaderButton to="/contact" >Contact</HeaderButton>
      <v-btn 
        to="/donate" 
        color="primary" 
        class="donate-btn ms-1 me-5" 
        variant="flat"
        size="large"
        width="var(--v-navbar-button-width)"
        rounded="xl"
      >
        Donate
      </v-btn>
    </v-app-bar>

</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import SiteLogo from '@/components/icons/SiteLogo.vue'
import HeaderButton from '@/components/header/HeaderButton.vue'
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
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 0;

}
:deep(.site-logo) {
  display: block;
  height: 100%;
  width: auto;
  padding: 8px;
  max-height: var(--v-navbar-height);
}

</style>
