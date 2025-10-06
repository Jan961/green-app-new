<template>
  <v-container class="intro-section py-12">
    <v-sheet class="intro-card" rounded="xl" elevation="0">
      <v-row class="align-center" no-gutters>
        <v-col cols="12" md="6">
          <v-img
            src="@/assets/images/about/farm.png"
            alt="Green Garden"
            class="intro-image"
            height="420"
            cover
            rounded="xl"
          />
        </v-col>

        <v-col cols="12" md="6">
          <div class="intro-content">
            <v-btn
              class="intro-cta mb-6"
              variant="outlined"
              rounded="xl"
              size="large"
            >
              Discover Green Garden
            </v-btn>

            <h2 class="intro-title mb-4">
              From Bare Land to a
              <br />
              Flourishing Ecosystem
            </h2>

            <p class="intro-text">
              Located in Buriram, North-East Thailand, near the Cambodian and Laotian borders,
              Green Garden farm was established in 2014. It all started with bare land, where
              banana trees were first planted to enrich the soil. Since then, the area has
              thrived, transforming into a vibrant ecosystem teeming with fruit trees, herbs,
              moringa, ivy, and edible flowers—all cultivated without the use of pesticides.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
.intro-section {
  max-width: 1200px;
  margin-inline: auto;
}

.intro-card {
  background: #43b36b;
  padding: clamp(16px, 4vw, 32px);
}

.intro-image {
  width: 100%;
}

.intro-content {
  padding: clamp(12px, 3vw, 28px);
  color: #fff;
}

.intro-cta {
  border-color: rgba(255, 255, 255, 0.7) !important;
  color: #fff !important;
}

.intro-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(28px, 4.8vw, 48px);
  color: #fff;
}

.intro-text {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 959px) {
  .intro-card .v-row {
    gap: 16px;
  }
}
</style>

