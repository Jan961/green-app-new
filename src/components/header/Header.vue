<template>
 <!-- Mobile navigation -->
    <v-app-bar 
      v-if="smAndDown"
      :class="mobileAppBarClasses"
      height='var(--v-navbar-height)'
      flat
      >
        <v-spacer />
        <v-toolbar-title class="site-logo-title-mobile">
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


    <!-- Desktop navigation -->
    <v-app-bar 
    v-else
    :class="desktopAppBarClasses"
    height='var(--v-navbar-height)'
    flat
    >
      <v-toolbar-title class="site-logo-title-desktop">
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
  console.log('atTop', atTop.value)
}
onMounted(() => {
  updateAtTop()
  window.addEventListener('scroll', updateAtTop, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateAtTop)
})
const desktopAppBarClasses = computed(() => ({
  'desktop-app-bar--top': atTop.value,
  'desktop-app-bar--scrolled': !atTop.value,
}))
const mobileAppBarClasses = computed(() => ({
  'mobile-app-bar--overlay-closed': !isMobileMenuOpen.value,
  'mobile-app-bar--overlay-open': isMobileMenuOpen.value,
}))


</script>
<style scoped>
/* variables */
.v-app-bar {
  --shadow: 0 10px 25px rgba(27, 94, 32, 0.08), 0 2px 8px rgba(0,0,0,0.04);
}


/*  desktop */
.desktop-app-bar--top {
  transition:  box-shadow 1000ms ease, backdrop-filter 1000ms ease;
  box-shadow: none;
}
.desktop-app-bar--scrolled {
  transition: box-shadow 1000ms ease, backdrop-filter 200ms ease;
  backdrop-filter: saturate(180%) blur(12px);
  box-shadow: var(--shadow);
  }


  /*  mobile */
  .mobile-app-bar--overlay-open {
    background-color: transparent;
    box-shadow: none;
  }
  .mobile-app-bar--overlay-closed {
    box-shadow: var(--shadow);
  }

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

/*  common */

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




</style>
