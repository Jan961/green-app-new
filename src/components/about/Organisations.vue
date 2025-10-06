<template>
    <v-container class="organisations-section py-12">
        <v-row class="align-center">
            <v-col cols="12" md="6">
                <div class="d-flex align-center">
                    <v-img
                        src="@/assets/icons/heart.svg"
                        alt="Heart"
                        width="72"
                        height="72"
                        class="heart-icon"
                        cover
                    />
                    <div class="ms-6">
                        <div class="text-h4 text-high-emphasis font-weight-bold title-line">
                            Hosted <span class="text-success">400+</span> volunteers
                        </div>
                        <div class="text-h4 text-high-emphasis font-weight-bold title-line">
                            from around the world
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="d-flex align-center justify-space-between brands">
                    <v-img src="@/assets/icons/wwoof.svg" alt="WWOOF" height="72" contain class="brand-logo" />
                    <v-img src="@/assets/icons/worldpakers.svg" alt="Worldpackers" height="64" contain class="brand-logo" />
                    <v-img src="@/assets/icons/helpx.svg" alt="HelpX" height="64" contain class="brand-logo" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
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
.brands {
    gap: 64px;
}
.brand-logo {
    opacity: 0.55;
    filter: grayscale(100%);
}
@media (max-width: 960px) {
    .brands {
        justify-content: center;
        gap: 32px;
        margin-top: 24px;
    }
}
</style>