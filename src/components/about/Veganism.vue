<script setup lang="ts">
import veganFood from '@/assets/images/about/vegan/vgan-food.png'
import turningHarvest from '@/assets/images/about/vegan/turning-harvest.png'
import learnCooking from '@/assets/images/about/vegan/learn-cooking-img.png'
</script>

<template>
  <v-container fluid class="veganism-section py-12">
    <v-sheet class="veganism-card px-0" rounded="xl" elevation="0">
      <h2 class="section-title mb-8">Veganism</h2>

      <v-row class="align-center row-gap">
        <!-- Row 1: left copy, right 2 images -->
        <v-col cols="12" md="6" class="copy-block pr-md-8">
          <h3 class="text-h6 text-md-h5 font-weight-bold mb-2">
            Discover the Power of Plant-Based Living
          </h3>
          <p class="text-body-1 text-medium-emphasis mb-4">
            Our farm is dedicated to cultivating high-quality vegan produce, free from meat,
            eggs, fish, and harmful chemicals. Every ingredient is grown right here, using
            natural methods for the freshest, most nourishing food.
          </p>
          <v-btn color="green-darken-2" variant="outlined" rounded="xl" size="large" class="cta-btn">
            Buy our products
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="pl-md-4">
          <v-row class="g-4">
            <v-col cols="12">
              <v-img :src="veganFood" alt="Vegan dishes" class="img-lg" rounded="xl" cover />
            </v-col>
          </v-row>
        </v-col>

        <!-- Row 2: left 2 images, right copy -->
        <!-- Mobile-only text (shown above image on mobile) -->
        <v-col cols="12" class="copy-block pl-md-8 d-md-none">
          <h3 class="text-h6 text-md-h5 font-weight-bold mb-2">
            Turning Harvests into Flavorful Dishes
          </h3>
          <p class="text-body-1 text-medium-emphasis">
            We take pride in transforming our farm’s harvest into delicious dishes, from our
            signature moringa pasta to a variety of local Thai vegan meals. Every meal reflects
            the care and passion we put into plant‑based cooking, from garden to table.
          </p>
        </v-col>

        <v-col cols="12" md="6" class="pr-md-4">
          <v-row class="g-4">
            <v-col cols="12">
              <v-img :src="turningHarvest" alt="Pesto" class="img-md" rounded="xl" cover />
            </v-col>
          </v-row>
        </v-col>
        <!-- Desktop text (hidden on mobile) -->
        <v-col cols="12" md="6" class="copy-block pl-md-8 d-none d-md-flex">
          <h3 class="text-h6 text-md-h5 font-weight-bold mb-2">
            Turning Harvests into Flavorful Dishes
          </h3>
          <p class="text-body-1 text-medium-emphasis">
            We take pride in transforming our farm’s harvest into delicious dishes, from our
            signature moringa pasta to a variety of local Thai vegan meals. Every meal reflects
            the care and passion we put into plant‑based cooking, from garden to table.
          </p>
        </v-col>


        <v-col cols="12" md="6" class="copy-block pr-md-8">
          <h3 class="text-h6 text-md-h5 font-weight-bold mb-2">
            Learning How to Prepare Meals
          </h3>
          <p class="text-body-1 text-medium-emphasis">
            Visitors can take part in the unique process behind creating our vegan dishes,
            learning firsthand how to prepare meals using the fresh produce grown directly on
            our land.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="pl-md-4">
          <v-img :src="learnCooking" alt="Learning to cook" class="img-xl" rounded="xl" cover />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<style scoped>
.veganism-section {
  max-width: min(var(--page-max-width), 100%);
  margin-inline: auto;
  padding-left: var(--page-gutter-x);
  padding-right: var(--page-gutter-x);
}

.veganism-card {
  background: #fff;
  padding: clamp(20px, 5vw, 40px);
}

.section-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(28px, 5vw, 48px);
}

.copy-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.cta-btn {
  padding-inline: 22px;
  letter-spacing: 0.2px;
}

.img-lg {
  height: clamp(220px, 28vw, 320px);
}

.img-md {
  height: clamp(180px, 22vw, 260px);
}

.img-xl {
  height: clamp(260px, 34vw, 400px);
}

.row-gap {
  row-gap: clamp(16px, 4vw, 40px);
}
</style>

