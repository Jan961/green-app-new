<template>
    <!-- Desktop navigation -->
    <v-app-bar 
    v-if="mdAndUp"
    :class="[ appBarClasses, { 'app-bar--no-shadow': isMobileMenuOpen } ]"
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
      <PrimaryButton to="/donate" width="var(--v-navbar-button-width)">Donate</PrimaryButton>
    </v-app-bar>

    <!-- Mobile navigation -->
    <v-app-bar 
    v-if="smAndDown"
    :class="[ appBarClasses, { 'app-bar--no-shadow': isMobileMenuOpen } ]"
    height='var(--v-navbar-height)'
    >
      <v-toolbar-title class="site-logo-title">
        <RouterLink to="/" class="site-logo-link" aria-label="Home">
          <SiteLogo class="site-logo" />
        </RouterLink>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        :icon="isMobileMenuOpen ? 'mdi-close' : 'mdi-menu'"
        :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      />
    </v-app-bar>

    <!-- Fullscreen overlay menu -->
    <v-overlay
      v-if="smAndDown"
      v-model="isMobileMenuOpen"
      class="mobile-menu-overlay"
      content-class="mobile-menu-content"
      scrim="rgba(0,0,0,0.6)"
      :z-index="900"
      @click:outside="isMobileMenuOpen = false"
      transition="fade-transition"
    >
      <v-sheet class="mobile-menu" color="surface" elevation="0">
        <v-list class="mobile-menu-list" density="comfortable" nav>
          <v-list-item to="/about" title="About" prepend-icon="mdi-information-outline" @click="isMobileMenuOpen = false" />
          <v-list-item to="/volunteer" title="Volunteer" prepend-icon="mdi-hand-heart-outline" @click="isMobileMenuOpen = false" />
          <v-list-item to="/contact" title="Contact" prepend-icon="mdi-email-outline" @click="isMobileMenuOpen = false" />
        </v-list>
        <div class="mobile-menu-cta">
          <v-btn to="/donate" color="primary" size="large" block @click="isMobileMenuOpen = false">Donate</v-btn>
        </div>
      </v-sheet>
    </v-overlay>

</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify'
import SiteLogo from '@/components/icons/SiteLogo.vue'
import HeaderButton from '@/components/buttons/HeaderButton.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
const { smAndDown, mdAndUp } = useDisplay()
const isMobileMenuOpen = ref(false)
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

.app-bar--no-shadow {
  box-shadow: none !important;
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

/* Mobile overlay menu */
:deep(.mobile-menu-content) {
  width: 100%;
  height: calc(100% - var(--v-navbar-height));
  margin-top: var(--v-navbar-height);
}
.mobile-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--v-theme-surface), 1);
}
.mobile-menu-list :deep(.v-list-item-title) {
  font-size: 18px;
  font-weight: 600;
}
.mobile-menu-list :deep(.v-list-item) {
  padding-inline: 20px;
  min-height: 56px;
}
.mobile-menu-cta {
  margin: 16px 20px 24px;
}
.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  min-height: var(--v-navbar-height);
}

</style>
