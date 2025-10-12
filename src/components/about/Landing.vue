<template>
    <v-container :class="[ landingContainerClass, 'py-10']">
      <v-row align="center" justify="space-between" class="g-8">
        <v-col cols="12" md="7">
          <v-chip
            class="mb-6 location-chip"
            color="green-darken-2"
            variant="outlined"
            rounded="xl"
            size="large"
            prepend-icon="mdi-map-marker-outline"
            :to="{ name: 'contact' }"
          >
            <span class="chip-text">Satuk, Buriram, Thailand</span>
          </v-chip>
  
          <h1 class="hero-title mb-6">
            Visit <span class="nowrap">Green Garden</span>,<br/>
             a vegan permaculture
            retreat in rural Thailand.
          </h1>
  
          <p class="lead mb-8">
            Immerse yourself in village rhythms, learn regenerative farming, savor plant-based meals
            grown steps away, and join us in nurturing the land for a sustainable future.
          </p>
  
          <div class="cta-group">
            <v-btn
              color="green-darken-2"
              rounded="xl"
              size="large"
              class="mr-4 mb-3"
            >
              Apply to Volunteer
            </v-btn>
            <!-- <v-btn
              variant="outlined"
              color="green-darken-2"
              rounded="xl"
              size="large"
              class="mb-3"
            >
              Buy Our Products
            </v-btn> -->
          </div>
        </v-col>
  
        <v-col cols="12" md="5">
          <v-sheet class="video-frame elevation-1" rounded="xl">
            <v-responsive :aspect-ratio="16/9">
              <video
                :src="mainVideo"
                autoplay
                muted
                loop
                playsinline
                class="video"
              />
            </v-responsive>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
import mainVideo from '@/assets/videos/main_video.mp4'
import { useDisplay } from 'vuetify'
import { computed } from 'vue'
const { smAndDown } = useDisplay()
const landingContainerClass = computed(() => ({
  'landing': !smAndDown.value,
  'landing-mobile': smAndDown.value,
}))




</script>

<style scoped>

/*  desktop */
.landing {
  height: calc(100vh - var(--v-navbar-height));
  margin-top: var(--v-navbar-height);
  position: relative;
  overflow: hidden; /* clip decorative bg */
  z-index: 0; /* establish stacking context so ::after can sit behind */
}

/*  mobile */
.landing-mobile {
  margin-top: var(--v-navbar-height);
  position: relative;
  padding-bottom: 40px;
  z-index: 0; /* establish stacking context so ::after can sit behind */

}


.location-chip .chip-text {
  background: linear-gradient(90deg, #51C25E 0%, #ADE157 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.hero-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(32px, 5vw, 56px);
}

.nowrap {
  white-space: nowrap;
}

.lead {
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.68);
}

.video-frame {
  background: #fff;
  padding: 10px;
  position: relative;
  z-index: 1;
}

.video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 14px;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* Decorative background on the right */
.landing::after {
  content: "";
  position: absolute;
  right: -100px;
  bottom: -160px;
  width: clamp(420px, 45vw, 780px);
  height: clamp(420px, 45vw, 780px);
  background-image: url('@/assets/images/background/green-gradient.png');
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
  z-index: -1; /* keep decorative bg behind content */
}
/* .landing-mobile::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
  z-index: 0;
} */

/* Mobile background as a full-cover layer with soft fade at bottom */
.landing-mobile::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('@/assets/images/background/green-gradient.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  pointer-events: none;
  z-index: -1; /* keep decorative bg behind content */
  -webkit-mask-image: linear-gradient(180deg, #000 70%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 70%, transparent 100%);
}



</style>