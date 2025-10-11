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
.header-button :deep(.v-btn__overlay){
  background-color: transparent!important;
}

.header-button :deep(.v-btn__overlay){
    border: 1px solid rgba(var(--v-theme-primary));
}






</style>
