<template>
  <v-container class="education-section py-12">
    <v-sheet class="education-card" rounded="xl" elevation="1">
      <v-row class="align-center g-8" no-gutters>
        <v-col cols="12" md="6" order="1" order-md="1">
          <div class="pr-md-8">
            <h2 class="section-title mb-4">Education</h2>

            <div class="org-header d-flex align-center mb-3">
              <v-avatar size="44" class="mr-3" rounded="lg">
                <v-img :src="orgLogo" alt="Green World Education Foundation" cover />
              </v-avatar>
              <div class="text-h6 text-md-h4 font-weight-black">
                The Green World<br />Education Foundation
              </div>
            </div>

            <p class="text-body-1 text-medium-emphasis mb-6">
              We collaborate with GreenWEF, an organization dedicated to supporting youth, women,
              and disadvantaged groups in our community. Together, we help them develop skills, earn
              a sustainable income, and pursue careers in related fields.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="6" order="2" order-md="2">
          <v-img
            :src="educationPhoto"
            alt="Green World Education Foundation"
            height="420"
            cover
            rounded="xl"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>w

<script setup lang="ts">
import educationImage from '@/assets/icons/green-world-education.svg'
import educationPhoto from '@/assets/images/about/education/world-edu-found1.png'
// Using the same image as logo placeholder; replace with actual logo if available
const orgLogo = educationImage
</script>

<style scoped>
.education-section {
  max-width: 1200px;
  margin-inline: auto;
}

.education-card {
  background: #f7fbf5;
  padding: clamp(16px, 4vw, 28px);
}

.section-title {
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(28px, 5vw, 44px);
}

@media (max-width: 959px) {
  .education-card .v-row {
    gap: 16px;
  }
}
</style>



