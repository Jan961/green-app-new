<template>
  <v-footer class="app-footer" color="surface" elevation="0" border="t">
    <v-container class="py-10">
      <div class="footer-grid">
        <div class="brand-block">
          <div class="brand-row">
            <v-icon icon="mdi-leaf" color="success" size="40" class="me-3" />
            <div class="brand-name">
              <span class="brand-line">Green</span>
              <span class="brand-line">Angel</span>
            </div>
          </div>
          <div class="brand-tagline text-grey-darken-1">Garden Food Forest Buriram</div>
        </div>

        <div class="links-block">
          <div class="section-title">Explore</div>
          <nav class="link-list" aria-label="Footer navigation">
            <RouterLink
              v-for="l in quickLinks"
              :key="l.label"
              class="link"
              :to="{ name: l.name }"
            >
              <v-icon size="16" class="me-2">mdi-chevron-right</v-icon>
              <span>{{ l.label }}</span>
            </RouterLink>
          </nav>
        </div>

        <div class="contact-block">
          <div class="section-title">Contact</div>
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

        <div class="address-block">
          <div class="section-title">Address</div>
          <div class="address">
            199 Yaka Village, Moo 6, Krasang, Satuk District, Buriram Province 31150, Thailand
          </div>
        </div>
      </div>

      <v-divider class="my-8" />
      <div class="footer-bottom d-flex align-center justify-space-between flex-wrap">
        <div class="legal text-grey-darken-1 text-caption">© 2024 Green garden food forest Buriram</div>
        <div class="credits text-grey-darken-1 text-caption">
          Made with <v-icon size="14" class="mx-1" color="error">mdi-heart</v-icon> for nature
        </div>
      </div>
    </v-container>

  </v-footer>
  </template>

<script setup lang="ts">
type RouteName = 'about' | 'volunteer' | 'donate' | 'contact'

const email = 'Greengarden@gmail.com'
const phone = '+66 63 794 1656'
const phoneRaw = '+66637941656'

const quickLinks: ReadonlyArray<{ label: string; name: RouteName }> = [
  { label: 'About', name: 'about' },
  { label: 'Volunteer', name: 'volunteer' },
  { label: 'Donate', name: 'donate' },
  { label: 'Contact', name: 'contact' },
] as const

const social = [
  { label: 'Facebook', icon: 'mdi-facebook', href: 'https://facebook.com/' },
  { label: 'Instagram', icon: 'mdi-instagram', href: 'https://instagram.com/' },
  { label: 'Line', icon: 'mdi-chat', href: '#' },
] as const
</script>

<style scoped>
.app-footer {
  background:
    radial-gradient(1200px 320px at 20% -20%, rgba(var(--v-theme-primary), 0.06), transparent 60%),
    linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(var(--v-theme-primary), 0.03) 100%),
    #faf9f6;
}

.footer-bottom { min-height: 32px; }

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 28px;
  align-items: start;
}

@media (min-width: 960px) {
  .footer-grid { grid-template-columns: 1.25fr 1fr 1fr 1.2fr; }
}

.brand-block { min-width: 0; }
.links-block { min-width: 0; }
.address-block { min-width: 0; }

.section-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin-bottom: 8px;
}

.brand-row { display: flex; align-items: center; }

.brand-name {
  display: inline-flex;
  flex-direction: column;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  font-size: 22px;
}

.brand-line:first-child { margin-bottom: 4px; }
.brand-tagline { margin-top: 8px; font-size: 13px; }

.link-list { display: grid; }
.link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  color: inherit;
  text-decoration: none;
  opacity: 0.9;
}
.link:hover { opacity: 1; }

.contact-block {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  justify-items: start;
}

.contact-list { display: grid; gap: 6px; }
.contact-item { display: flex; align-items: center; }
.contact-link { color: inherit; text-decoration: none; }

.address { max-width: 760px; }

.social :deep(.v-btn) { background-color: rgba(0, 0, 0, 0.04); }
.social :deep(.v-btn:hover) { background-color: rgba(0, 0, 0, 0.08); }
</style>


