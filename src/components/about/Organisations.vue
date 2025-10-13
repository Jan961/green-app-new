<template>
    <v-container class="organisations-section py-12">
        <div :class="['d-flex align-center ga-12', smAndDown ? 'flex-column' : 'flex-row']">

                <div class="d-flex align-center ga-6">
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
           
                <div :class="['d-flex align-center', smAndDown ? 'flex-column ga-0' : 'flex-row ga-12']">
                    <v-btn :ripple="false" variant="plain" size="200" class="brand-logo" >
                        <v-icon icon="$wwoofLogo" size="200" class="brand-logo" />
                    </v-btn>
                    <v-btn :ripple="false" variant="plain" size="200" class="brand-logo" >
                        <v-icon icon="$worldpackersLogo" size="200" class="brand-logo" />
                    </v-btn>
                    <v-btn :ripple="false" variant="plain" size="200" class="brand-logo" >
                        <v-icon icon="$helpxLogo" size="200" class="brand-logo" />
                    </v-btn>
                </div>
        </div>
    </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
</script>
<style scoped>
.organisations-section {
    padding-top: 48px;
    padding-bottom: 48px;
}
.title-line {
    line-height: 1.2;
}
.heart-icon {
    max-width: 72px;
}

.brand-logo {
    opacity: 0.8;
    filter: grayscale(100%);
}
@media (max-width: 960px) {
    .brands {
        justify-content: center;
        gap: 32px;
        margin-top: 24px;
    }
}

/* https://wwoofindependents.org/ */
/* https://www.worldpackers.com/positions/76186 */
/* https://www.helpx.net/host/1486281OQ */

</style>