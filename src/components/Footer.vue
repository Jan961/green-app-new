<template>
  <v-footer class="app-footer" color="surface" elevation="0" border="t">
    <v-container class="py-8">
      <div class="footer-grid">
        <div class="brand-block">
          <div class="brand-row">
            <v-icon icon="mdi-leaf" color="success" size="40" class="me-3" />
            <div class="brand-name">
              <span class="brand-line">Green</span>
              <span class="brand-line">Angel</span>
            </div>
          </div>
        </div>

        <div class="address-block">
          <div class="address">
            199 Yaka Village, Moo 6, Krasang, Satuk District, Buriram Province 31150, Thailand
          </div>
        </div>

        <div class="contact-block">
          <div class="contact-list">
            <div class="contact-item">
              <v-icon size="18" class="me-2">mdi-email-outline</v-icon>
              <a :href="`mailto:${email}`" class="contact-link">{{ email }}</a>
            </div>
            <div class="contact-item">
              <v-icon size="18" class="me-2">mdi-phone</v-icon>
              <a :href="`tel:${phoneRaw}`" class="contact-link">{{ phone }}</a>
            </div>
          </div>
          <div class="social">
            <v-btn
              v-for="s in social"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              icon
              size="small"
              variant="tonal"
              class="me-2"
              :aria-label="s.label"
            >
              <v-icon :icon="s.icon" />
            </v-btn>
          </div>
        </div>
      </div>
      <v-divider class="my-6" />
      <div class="footer-bottom d-flex align-center justify-center">
        <div class="text-grey-darken-1 text-caption">© 2024 Green garden food forest Buriram</div>
      </div>
    </v-container>

  </v-footer>
</template>

<script setup lang="ts">
const email = 'Greengarden@gmail.com'
const phone = '+66 63 794 1656'
const phoneRaw = '+66637941656'
const social = [
  { label: 'Facebook', icon: 'mdi-facebook', href: 'https://facebook.com/' },
  { label: 'Instagram', icon: 'mdi-instagram', href: 'https://instagram.com/' },
  { label: 'Line', icon: 'mdi-chat', href: '#' },
]
</script>

<style scoped>
.app-footer {
  background: radial-gradient(1200px 300px at 20% -20%, rgba(67, 179, 107, 0.06), transparent 60%), #faf9f6;
}

.footer-bottom {
  min-height: 32px;
}

.footer-top {
  row-gap: 16px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px 24px;
  align-items: start;
}

@media (min-width: 960px) {
  .footer-grid {
    grid-template-columns: 220px 1fr 1fr;
  }
}

.brand-block { min-width: 0; }

.address-block { min-width: 0; }

.contact-block {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  justify-items: start;
}

@media (min-width: 960px) {
  .contact-block { justify-items: end; }
}

.contact-list { display: grid; gap: 6px; }

.brand-row {
  display: flex;
  align-items: center;
}

.brand-name {
  display: inline-flex;
  flex-direction: column;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  font-size: 22px;
}

.brand-line:first-child {
  margin-bottom: 4px;
}

.address { max-width: 760px; }

.contact-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

@media (min-width: 960px) {
  .contact-stack {
    align-items: flex-end;
  }
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-link {
  color: inherit;
  text-decoration: none;
}

.social :deep(.v-btn) {
  background-color: rgba(0, 0, 0, 0.04);
}

.social :deep(.v-btn:hover) {
  background-color: rgba(0, 0, 0, 0.08);
}
</style>


