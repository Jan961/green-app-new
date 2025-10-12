<template>
    <v-btn
    :to="to || undefined"
    color="primary"
    size="large"
    rounded="xl"
    variant="elevated"
    :width="width"
    :class="class"
    >
        <slot />
    </v-btn>
</template>
<script setup lang="ts">
defineProps<{
    to?: string
    width?: string | number
    class?: string
}>()
</script>