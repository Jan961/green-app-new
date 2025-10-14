<template>
  <v-container class="story-section py-12">
    <v-sheet class="story-card" rounded="xl" elevation="0">
      <v-row class="align-center g-8" no-gutters>

        <v-col cols="12" md="6">
          <div class="story-content">
            <v-chip class="mb-4" variant="outlined" color="green-darken-2" rounded="xl" size="large">
              Our story
            </v-chip>

            <h2 class="story-title mb-4">
              Hello, I am the founder of
              <br />
              Green Garden food forest
            </h2>

            <div class="story-text text-body-1 text-medium-emphasis">
              <p class="mb-3">
                I’m Chonthicha, though most people know me as “Green Angel.” I have been vegan for
                over 35 years. I am driven by a deep passion for organic farming, permaculture, and
                community empowerment.
              </p>
              <p class="mb-3">
                My journey began as an English teacher, where I drew on my background in
                environmental and social enterprises to inspire my students. After working
                internationally for more than two decades, I now host volunteers from across the
                globe at my Green Garden Food Forest in Buriram.
              </p>
              <p class="mb-6">
                By cultivating crops like lemongrass and moringa, I help provide sustainable income
                for local farmers while encouraging younger generations to embrace environmentally
                responsible practices. I am committed to fostering a positive, professional learning
                environment in our Bangkok-based courses, contributing to a greener, more
                sustainable future for all.
              </p>
            </div>

            <v-btn color="primary" rounded="xl" size="large">
              View work experience
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
            :src="storyImage"
            alt="Our story"
            class="story-image"
            height="560"
            cover
            rounded="xl"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import storyImage from '@/assets/images/about/our-story/green-pic.png'
</script>

<style scoped>
.story-section {
  max-width: 1200px;
  margin-inline: auto;
}

.story-card {
  background: #fff;
  padding: clamp(16px, 4vw, 28px);
}

.story-content {
  padding: clamp(8px, 2.4vw, 20px);
}

.story-title {
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(28px, 5.2vw, 48px);
}

.story-image {
  width: 100%;
}

@media (max-width: 959px) {
  .story-card .v-row {
    gap: 16px;
  }
}
</style>



