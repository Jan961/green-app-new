<template>
 <!-- Mobile navigation -->
    <v-app-bar 
      v-if="smAndDown"
      :class="mobileAppBarClasses"
      height='var(--v-navbar-height-mobile)'
      flat
      >
        <v-spacer />
        <v-toolbar-title class="site-logo-title-mobile">
          <RouterLink to="/" class="site-logo-link" aria-label="Home">
            <SiteLogo v-if="!isMobileMenuOpen" class="site-logo  site-logo-mobile" />
            <SiteLogoWhite v-else class="site-logo site-logo-mobile" />
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
      scrim="rgba(0, 0, 0, 0.18)"
    >
      <v-sheet
        class="mobile-menu-sheet"
        elevation="0"
        rounded="xl"
      >
        <v-divider color="primary" length="88%" thickness="1" class="mobile-menu-divider" style="opacity: 0.6" />
        <div class="menu-items-top-wrapper">
        <v-list class="mobile-menu-list pt-6" density="comfortable" nav lines="one" :ripple="false">
          <v-list-item to="/about" title="About" prepend-icon="mdi-information-outline" rounded="xl" @click="isMobileMenuOpen = false" />
          <v-list-item to="/volunteer" title="Volunteer" prepend-icon="mdi-hand-heart-outline" rounded="xl" @click="isMobileMenuOpen = false" />
          <v-list-item to="/contact" title="Contact" prepend-icon="mdi-email-outline" rounded="xl" @click="isMobileMenuOpen = false" />
        </v-list>
      </div>
        <div class="mobile-menu-cta">
          <v-btn
            to="/donate"
            color="primary"
            size="x-large"
            density="default"
            rounded="xl"
            block
            style="box-shadow: 0 10px 26px rgba(47, 196, 108, 0.20)"
            @click="isMobileMenuOpen = false"
          >
            Donate
          </v-btn>
        </div>

      </v-sheet>
    </v-overlay>


    <!-- Desktop navigation -->
    <v-app-bar 
    v-else
    :class="desktopAppBarClasses"
    height='var(--v-navbar-height-desktop)'
    flat
    >
      <v-toolbar-title class="site-logo-title-desktop">
        <RouterLink to="/" class="site-logo-link" aria-label="Home">
          <SiteLogo class="site-logo site-logo-desktop" />
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
    background-color: transparent!important;
    box-shadow: none;
  }
  .mobile-app-bar--overlay-closed {
    box-shadow: var(--shadow);
  }

:deep(.mobile-menu-content) {
  width: 100%;
  padding-top: var(--v-navbar-height-mobile);
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

.menu-items-top-wrapper {
  /* apply blur only to the top menu items container */
  backdrop-filter: saturate(110%) blur(12px);
  -webkit-backdrop-filter: saturate(110%) blur(12px);
  background-color: rgba(255, 255, 255, 0.10);
  border-radius: 16px;
  margin: 12px 12px 8px;
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
  min-height: var(--v-navbar-height-mobile);
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
}
:deep(.site-logo-desktop) {
  max-height: var(--v-navbar-height-desktop);
}
:deep(.site-logo-mobile) {
  max-height: var(--v-navbar-height-mobile);
}




</style>
