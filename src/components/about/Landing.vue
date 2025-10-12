<template>
    <v-container :class="[ landingContainerClass, 'py-10']">
      <v-row align="start" justify="space-between" :class="{'pt-6': !smAndDown}" >
        <v-col cols="12" md="6" class="pe-6">
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
              color="primary"
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
  
        <v-col cols="12" md="6" class="pt-12">
          <v-sheet :class="[
            'video-frame',
            'elevation-0',
            smAndDown ? 'video-frame-mobile' : 'video-frame-desktop'  
           ]" 
           rounded="xl">
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
  --bg-opacity: 0.90;
  --blur-amount: 18px;
  --elevate-text: 0 2px 12px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.9);
  --elevate-drop: 5px 5px 22px rgba(255,255,255,1);
  --elevate-stroke: 0 0 0 1px rgba(255,255,255,0.22) inset;
  /* how strongly the blurred area lightens toward white (desktop only) */
  --lighten-low: 0.18;
  --lighten-mid: 0.45;
  --lighten-high: 0.78;
  height: calc(110vh - var(--v-navbar-height-desktop));
  margin-top: var(--v-navbar-height-desktop);
  position: relative;
  overflow: hidden; /* clip decorative bg */
  z-index: 0; /* establish stacking context so ::after can sit behind */
}

/*  mobile */
.landing-mobile {
  --bg-opacity: 0.85;
  --blur-amount: 16px;
  --elevate-text: 0 1px 0 rgba(255,255,255,0.35), 0 0 10px rgba(255,255,255,0.08);
  --elevate-drop: 0 2px 10px rgba(255,255,255,0.18);
  --elevate-stroke: 0 0 0 1px rgba(255,255,255,0.20) inset;
  margin-top: var(--v-navbar-height-mobile);
  position: relative;
  padding-bottom: 40px;
  z-index: 0; /* establish stacking context so ::after can sit behind */

}


.location-chip .chip-text {
  background: linear-gradient(90deg, #51C25E 0%, #ADE157 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Make chip surface white while preserving gradient text inside */
.location-chip {
  background-color: #ffffff !important;
  border-color: rgba(var(--v-theme-light-green), 1) !important;
  border-width: 1px !important;
  filter: drop-shadow(var(--elevate-drop)) !important;
}

.location-chip:hover,
.location-chip:focus-visible {
  filter: drop-shadow(var(--elevate-drop)) !important;
}

.hero-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(32px, 5vw, 48px);
}

.nowrap {
  white-space: nowrap;
}

.lead {
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.68);
}

.video-frame {

  padding: 20px;
  position: relative;
  z-index: 1;
}
.video-frame-desktop {
  background: rgba(var(--v-theme-primary), 1 );
}
.video-frame-mobile {
  background: linear-gradient(90deg, rgba(172, 231, 110, 1), rgba(47, 196, 108, 1));
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

/* Gentle white elevation for readability across the hero */
:where(.landing, .landing-mobile) :where(h1, h2, h3, h4, h5, h6, p, .lead) {
  text-shadow: var(--elevate-text);
}

:where(.landing, .landing-mobile) :where(.v-btn, .v-chip, .video-frame, .v-sheet, video, img) {
  filter: drop-shadow(var(--elevate-drop));
}

:where(.landing, .landing-mobile) :where(.v-btn, .v-chip, .video-frame, .v-sheet) {
  box-shadow: var(--elevate-stroke);
}

/* Decorative background on the right */
.landing::after {
  --ax: 80%;   /* anchor X (background-position) */
  --ay: 100%;  /* anchor Y */

  background-size: cover; /* preserve aspect ratio and fill */
  background-position: var(--ax) var(--ay);
  content: "";
  position: absolute;
  inset: 0; /* fill parent */
  background-image: url('@/assets/images/background/green-gradient.png');
  background-repeat: no-repeat;
  /* Fade the base image with a longer, smoother tail */
  -webkit-mask-image: linear-gradient(180deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 74%,
    rgba(0,0,0,0.6) 88%,
    rgba(0,0,0,0) 100%
  );
  mask-image: linear-gradient(180deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 74%,
    rgba(0,0,0,0.6) 88%,
    rgba(0,0,0,0) 100%
  );
  opacity: var(--bg-opacity, 1);
  pointer-events: none;
  z-index: -2; /* keep decorative bg behind blurred overlay and content */
}

/* Blurred bottom overlay to soften edge into white */
.landing::before {
  content: "";
  position: absolute;
  inset: 0;
  /* blend a white gradient with the blurred image so it both lightens and fades */
  background-image:
    linear-gradient(180deg,
      rgba(255,255,255,0) 56%,
      rgba(255,255,255,var(--lighten-low)) 72%,
      rgba(255,255,255,var(--lighten-mid)) 86%,
      rgba(255,255,255,var(--lighten-high)) 100%
    ),
    url('@/assets/images/background/green-gradient.png');
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-position: var(--ax, 80%) var(--ay, 100%), var(--ax, 80%) var(--ay, 100%);
  background-blend-mode: screen, normal; /* screen makes the white gradient lighten the image */
  filter: blur(var(--blur-amount, 18px));
  /* opacity follows mask below; keep element fully opaque for blending accuracy */
  opacity: 1;
  /* Gradual ramp from minimal to heavy blur, then fade out */
  -webkit-mask-image: linear-gradient(180deg,
    rgba(0,0,0,0) 55%,
    rgba(0,0,0,0.25) 70%,
    rgba(0,0,0,0.65) 86%,
    rgba(0,0,0,0.95) 94%,
    rgba(0,0,0,0) 100%
  );
  mask-image: linear-gradient(180deg,
    rgba(0,0,0,0) 55%,
    rgba(0,0,0,0.25) 70%,
    rgba(0,0,0,0.65) 86%,
    rgba(0,0,0,0.95) 94%,
    rgba(0,0,0,0) 100%
  );
  pointer-events: none;
  z-index: -1; /* above ::after, below content */
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
  -webkit-mask-image: linear-gradient(180deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 68%,
    rgba(0,0,0,0.6) 86%,
    rgba(0,0,0,0) 100%
  );
  mask-image: linear-gradient(180deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 68%,
    rgba(0,0,0,0.6) 86%,
    rgba(0,0,0,0) 100%
  );
  opacity: var(--bg-opacity, 1);
  pointer-events: none;
  z-index: -2; /* keep decorative bg behind blurred overlay and content */
}

/* Blurred bottom overlay for mobile */
.landing-mobile::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('@/assets/images/background/green-gradient.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  filter: blur(var(--blur-amount, 16px));
  opacity: var(--bg-opacity, 1);
  -webkit-mask-image: linear-gradient(180deg,
    rgba(0,0,0,0) 52%,
    rgba(0,0,0,0.25) 68%,
    rgba(0,0,0,0.6) 84%,
    rgba(0,0,0,0.9) 92%,
    rgba(0,0,0,0) 100%
  );
  mask-image: linear-gradient(180deg,
    rgba(0,0,0,0) 52%,
    rgba(0,0,0,0.25) 68%,
    rgba(0,0,0,0.6) 84%,
    rgba(0,0,0,0.9) 92%,
    rgba(0,0,0,0) 100%
  );
  pointer-events: none;
  z-index: -1;
}



</style>