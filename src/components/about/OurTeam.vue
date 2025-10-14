<template>
  <v-container class="team-section py-12">
    <h2 class="section-title mb-8">Meet Our people</h2>

    <v-row align="stretch">
      <v-col
        v-for="member in members"
        :key="member.name"
        cols="12"
        sm="6"
        md="3"
      >
        <v-sheet class="member-card" rounded="xl" elevation="1">
          <div class="media-wrapper">
            <v-img
              :src="member.image"
              :alt="member.name"
              class="member-image"
              cover
              height="420"
              rounded="xl"
            />
            <div class="member-overlay">
              <div class="member-name">{{ member.name }}</div>
              <div class="member-role">{{ member.role }}</div>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
type TeamMember = {
  name: string
  role: string
  image: string
}

import imgGreenAngel from '@/assets/images/about/team/foto3.jpeg'
import imgPiiJack from '@/assets/images/about/team/pii-jack.png'
import imgAem from '@/assets/images/about/team/Aem.jpeg'
import imgMom from '@/assets/images/about/team/founder-mum.jpg'

const members: TeamMember[] = [
  {
    name: 'Green angel',
    role: 'Founder',
    image: imgGreenAngel,
  },
  {
    name: 'Pii Jack',
    role: 'Specialist Technician and Carpenter',
    image: imgPiiJack,
  },
  {
    name: 'Aem',
    role: 'Permaculture designer',
    image: imgAem,
  },
  {
    name: 'Mom',
    role: 'Founder',
    image: imgMom,
  },
]
</script>

<style scoped>
.team-section {
  max-width: 1200px;
  margin-inline: auto;
}

.section-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-size: clamp(28px, 4.8vw, 48px);
}

.member-card {
  display: flex;
  flex-direction: column;
}

.member-image {
  width: 100%;
  transition: transform 500ms ease;
}

.member-meta {
  display: none; /* replaced by overlay */
}

.member-name {
  font-size: 1.125rem;
  font-weight: 700;
}

.member-role {
  color: rgba(0, 0, 0, 0.6);
}

/* New overlay presentation */
.media-wrapper {
  position: relative;
}

.member-card {
  position: relative;
  overflow: hidden;
}

.member-overlay {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0));
  color: #fff;
}

.member-overlay .member-name {
  font-weight: 800;
}

.member-overlay .member-role {
  color: rgba(255, 255, 255, 0.9);
}

.member-card:hover .member-image,
.member-card:focus-within .member-image {
  transform: scale(1.03);
}
</style>


