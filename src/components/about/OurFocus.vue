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
        <v-sheet class="focus-card" rounded="xl" elevation="0" tabindex="0">
          <v-img :src="item.image" :alt="item.title" cover class="card-image" />
          <div class="card-overlay">
            <div class="card-content">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.description }}</div>
              <div class="card-extra">{{ item.details }}</div>
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
  details: string
}

const focusItems: FocusItem[] = [
  {
    title: 'Chemical-Free Farming',
    description: 'Committed to promoting chemical-free farming.',
    image: chemicalFree,
    details:
      'We nurture soil health with natural methods, building biodiversity and resilience.',
  },
  {
    title: 'Vegan Living',
    description: 'Fresh, plant-based meals made from our organic harvest.',
    image: veganLiving,
    details:
      'Seasonal menus celebrate local produce while reducing our environmental footprint.',
  },
  {
    title: 'Hands-On Learning',
    description:
      'A supportive educational space for local children and international volunteers.',
    image: education,
    details:
      'Workshops blend practice and theory to spark curiosity and lifelong skills.',
  },
  {
    title: 'Food From Garden to Plate',
    description: 'Authentic Thai flavors made entirely plant-based.',
    image: baskets,
    details:
      'From harvest to kitchen, every step is thoughtful, simple, and sustainable.',
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
  transition: transform 300ms ease, box-shadow 300ms ease;
  will-change: transform;
}

.card-image {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1), filter 300ms ease;
  will-change: transform;
}

.focus-card:hover,
.focus-card:focus-visible {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  outline: 2px solid var(--v-theme-primary);
  outline-offset: 2px;
}

.focus-card:hover .card-image,
.focus-card:focus-visible .card-image {
  transform: scale(1.06);
  filter: saturate(1.05) contrast(1.05);
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
  z-index: 1;
}

.card-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0) 75%
  );
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 0;
}

.focus-card:hover .card-overlay::before,
.focus-card:focus-visible .card-overlay::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 6px;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
}

.focus-card:hover .card-content,
.focus-card:focus-visible .card-content {
  transform: translateY(-6px);
}

.card-title {
  color: #fff;
  font-weight: 800;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
}

.card-desc {
  color: rgba(255, 255, 255, 0.92);
}

.card-extra {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.92rem;
  line-height: 1.35;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 450ms ease, opacity 300ms ease;
}

.focus-card:hover .card-extra,
.focus-card:focus-visible .card-extra {
  max-height: 140px;
  opacity: 1;
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

