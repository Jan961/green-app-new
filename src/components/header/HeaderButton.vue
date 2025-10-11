<template>
    <v-btn 
    :to="to" 
    variant="text"
    width="var(--v-navbar-button-width)"
    size="large"
    :ripple="false"
    rounded="xl"
    class="mx-1 header-button"
    >
        <slot/>
    </v-btn>
</template>
<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>
<style scoped>

.header-button {
    position: relative;
    overflow: visible;
}

/* Place the underline on the content wrapper so it sits above Vuetify overlays */
.header-button :deep(.v-btn__content) {
    position: relative;
}

.header-button :deep(.v-btn__content)::after {
content: "";
position: absolute;
left: 0px;
right: 0px;
bottom: -4px;
height: 3px;
background: rgba(var(--v-theme-primary));
transform: scaleX(0);
transform-origin: left;
transition: transform 180ms ease;
border-radius: 2px;
}

.header-button:hover :deep(.v-btn__content)::after { transform: scaleX(1); }

.header-button :deep(.v-btn__overlay){
  background-color: transparent!important;
  border: 1px solid rgba(var(--v-theme-primary));
}






</style>
