<template>
  <v-container class="contact-section py-12">
    <v-sheet class="cta-sheet text-center" rounded="xl" elevation="0" :style="ctaStyle">
      <div class="cta-content">
        <h2 class="cta-title mb-6">Want to contribute?<br />Contact us</h2>
        <v-btn
          class="whatsapp-btn text-success"
          :href="whatsAppUrl"
          target="_blank"
          rel="noopener"
          size="x-large"
          rounded="xl"
          variant="flat"
          prepend-icon="mdi-whatsapp"
        >
          Contact us on WhatsApp
        </v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import bgGradient from '@/assets/images/background/bg-gradient.png'

const defaultMessage = 'Hello Green Garden, I would like to contribute.'
const whatsAppUrl = `https://wa.me/66666666666?text=${encodeURIComponent(defaultMessage)}`

const ctaStyle = {
  backgroundImage: 
  `url(${bgGradient}),
   linear-gradient(90deg, rgba(172, 231, 110, 0.85), 
   rgba(47, 196, 108, 0.92))`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
</script>

<style scoped>
.contact-section {
  max-width: 1200px;
  margin-inline: auto;
}

.cta-sheet {
  position: relative;
  overflow: hidden;
  padding: clamp(28px, 6vw, 56px) 10px clamp(28px, 6vw, 56px) 10px;
}

.cta-sheet::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 24px 36px rgba(0, 0, 0, 0.10),
    inset 0 -16px 28px rgba(0, 0, 0, 0.08);
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cta-title {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  font-size: clamp(28px, 4.8vw, 42px);
  color: #fff;
}

.whatsapp-btn {
  background: #ffffff !important;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}

.whatsapp-btn .v-icon {
  color: #25d366 !important;
}
</style>


