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
            <SiteLogo v-if="!isMobileMenuOpen" class="site-logo" />
            <SiteLogoWhite v-else class="site-logo" />
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
      :z-index="900"
      @click:outside="isMobileMenuOpen = false"
      transition="fade-transition"
    >
      <v-sheet class="mobile-menu-sheet" elevation="0">
        <v-divider color="primary" length="90%" thickness="3" class="mobile-menu-divider"/>
        <v-list class="mobile-menu-list pt-3" density="comfortable" nav>
          <v-list-item to="/about" title="About" prepend-icon="mdi-information-outline" rounded="xl" @click="isMobileMenuOpen = false" />
          <v-list-item to="/volunteer" title="Volunteer" prepend-icon="mdi-hand-heart-outline" rounded="xl" @click="isMobileMenuOpen = false" />
          <v-list-item to="/contact" title="Contact" prepend-icon="mdi-email-outline" rounded="xl" @click="isMobileMenuOpen = false" />
        </v-list>
        <div class="mobile-menu-cta">
          <v-btn to="/donate" color="primary" size="large" rounded="xl" block @click="isMobileMenuOpen = false">Donate</v-btn>
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
      <PrimaryButton to="/donate" class="me-5" width="var(--v-navbar-button-width)">Donate</PrimaryButton>
    </v-app-bar>

   

   

</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify'
import SiteLogo from '@/components/icons/SiteLogo.vue'
import SiteLogoWhite from '@/components/icons/SiteLogoDark.vue'
import HeaderButton from '@/components/buttons/HeaderButton.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
const { smAndDown} = useDisplay()
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

  /*  mobile */
  .mobile-app-bar--overlay-open {
    background-color: transparent!important;
    box-shadow: none;
  }
  .mobile-app-bar--overlay-closed {
    box-shadow: var(--shadow);
  }

:deep(.mobile-menu-content) {
  width: 100%;
  padding-top: var(--v-navbar-height);
  height: 100%;
  background:
      url('@/assets/images/background/bg-gradient.png'),
      linear-gradient(90deg, rgba(172, 231, 110, 1), rgba(47, 196, 108, 1));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.mobile-menu-sheet {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;


}
.mobile-menu-list {
  background-color: transparent;
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

.mobile-menu-divider {
  align-self: center;
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
