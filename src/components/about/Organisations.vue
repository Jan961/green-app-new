<template>
    <v-container fluid class="organisations-section py-12">
        <div :class="['d-flex align-center', smAndDown ? 'flex-column ga-8' : 'w-100 flex-row ga-12 justify-start organisations-row']">
            <div class="d-flex align-center ga-6 org-stats">
                <v-img
                    src="@/assets/icons/heart.svg"
                    alt="Heart"
                    width="72"
                    height="72"
                    class="heart-icon"
                    cover
                />
                <div class="">
                    <div class="text-h5 text-high-emphasis font-weight-bold title-line">
                        Hosted <span class="text-success">400+</span> volunteers
                    </div>
                    <div class="text-h5 text-high-emphasis font-weight-bold title-line">
                        from around the world
                    </div>
                </div>
            </div>
            <div :class="['d-flex brands justify-space-evenly', smAndDown ? 'flex-column align-start ga-6' : 'flex-row align-center ga-12']">
                <a class="brand-link d-inline-flex align-center" href="https://wwoofindependents.org/" target="_blank" rel="noopener noreferrer" aria-label="WWOOF">
                    <v-icon icon="$wwoofLogo" :size="brandSize" class="brand-logo" />
                </a>
                <a class="brand-link d-inline-flex align-center" href="https://www.worldpackers.com/positions/76186" target="_blank" rel="noopener noreferrer" aria-label="Worldpackers">
                    <v-icon icon="$worldpackersLogo" :size="brandSize" class="brand-logo" />
                </a>
                <a class="brand-link d-inline-flex align-center" href="https://www.helpx.net/host/1486281OQ" target="_blank" rel="noopener noreferrer" aria-label="helpx">
                    <v-icon icon="$helpxLogo" :size="brandSize" class="brand-logo" />
                </a>
            </div>
        </div>
    </v-container>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown, mdAndDown, lgAndDown, xlAndUp } = useDisplay()

const brandSize = computed(() => {
    if (smAndDown.value) return 200
    return 260
})
</script>
<style scoped>
.organisations-section {
    padding-top: 48px;
    padding-bottom: 48px;
    max-width: min(var(--page-max-width), 100%);
    margin-inline: auto;
    padding-left: var(--page-gutter-x);
    padding-right: var(--page-gutter-x);
}
.organisations-row {
    column-gap: clamp(24px, 6vw, 80px);
}
.org-stats {
    min-width: 320px;
}
.brands {
    flex: 1 1 auto;
}
.brand-link {
    text-decoration: none;
    line-height: 0; /* prevent extra inline spacing that can misalign icons */
}
.title-line {
    line-height: 1.2;
}
.heart-icon {
    max-width: 72px;
}

.brand-logo {
    opacity: 0.8;
    color: grey;
    transform-origin: center;
    transition: transform 0.6s ease, color 0.6s ease, opacity 0.6s ease;
    will-change: transform;
}
.brand-logo:hover {
    opacity: 1;
    color: rgb(var(--v-theme-primary));
    transform: scale(1.08);
}
/* @media (max-width: 960px) {
    .brands {
        justify-content: center;
        gap: 32px;
        margin-top: 24px;
    }
} */

/* */
/* https://www.worldpackers.com/positions/76186 */
/* https://www.helpx.net/host/1486281OQ */

</style>