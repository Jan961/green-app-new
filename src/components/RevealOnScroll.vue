<template>
  <div
    v-intersect="onIntersect"
    :class="['reveal', { 'reveal--visible': isVisible }]"
  >
    <slot />
  </div>
  
</template>

<script lang="ts">
export default {
  name: 'RevealOnScroll',
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    onIntersect(isIntersecting: boolean) {
      if (isIntersecting) this.isVisible = true
    },
  },
}
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 3000ms ease, transform 600ms ease;
  will-change: opacity, transform;
}
.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}
</style>


