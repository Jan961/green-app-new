<template>
  <v-container class="focus-section py-12">
    <h2 class="section-title mb-6">Our focus</h2>

    <v-row class="g-6">
      <v-col
        v-for="item in focusItems"
        :key="item.title"
        cols="12"
        sm="6"
        md="3"
      >
        <v-sheet class="focus-card" rounded="xl" elevation="0">
          <v-img :src="item.image" :alt="item.title" cover class="card-image" />
          <div class="card-overlay">
            <div>
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.description }}</div>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import chemicalFree from '@/assets/images/about/focus-summary/chemical-free.jpg'
import veganLiving from '@/assets/images/about/focus-summary/positiveChange.png'
import education from '@/assets/images/about/focus-summary/education-focus.jpg'
import baskets from '@/assets/images/about/focus-summary/baskets.png'

type FocusItem = {
  title: string
  description: string
  image: string
}

const focusItems: FocusItem[] = [
  {
    title: 'Chemical-Free Farming',
    description: 'Committed to promoting chemical-free farming.',
    image: chemicalFree,
  },
  {
    title: 'Vegan Living',
    description: 'Fresh, plant-based meals made from our organic harvest.',
    image: veganLiving,
  },
  {
    title: 'Hands-On Learning',
    description:
      'A supportive educational space for local children and international volunteers.',
    image: education,
  },
  {
    title: 'Food From Garden to Plate',
    description: 'Authentic Thai flavors made entirely plant-based.',
    image: baskets,
  },
]
</script>

<style scoped>
.focus-section {
  max-width: 1200px;
  margin-inline: auto;
}

.section-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(28px, 5vw, 48px);
}

.focus-card {
  position: relative;
  overflow: hidden;
  height: 420px;
}

.card-image {
  width: 100%;
  height: 100%;
  display: block;
}

.card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: end;
  padding: 16px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.15) 45%,
    rgba(0, 0, 0, 0) 60%
  );
}

.card-title {
  color: #fff;
  font-weight: 800;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
}

.card-desc {
  color: rgba(255, 255, 255, 0.92);
}

@media (max-width: 959px) {
  .focus-card {
    height: 360px;
  }
}
@media (max-width: 599px) {
  .focus-card {
    height: 300px;
  }
}
</style>

