<script lang="ts">
import Organisations from '@/components/about/Organisations.vue'
import Intro from '@/components/about/Intro.vue'
import Landing from '@/components/about/Landing.vue'
import OurFocus from '@/components/about/OurFocus.vue'
import Testimonials from '@/components/about/Testimonials.vue'
import Accomplishments from '@/components/about/Accomplishments.vue'
import Veganism from '@/components/about/Veganism.vue'
import OurStory from '@/components/about/OurStory.vue'
import Education from '@/components/about/Education.vue'
import OurTeam from '@/components/about/OurTeam.vue'
import Contact from '@/components/about/Contact.vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'

export default {
  name: 'AboutView',
  components: { Organisations, Intro, Landing, OurFocus, Testimonials, Accomplishments, Veganism, OurStory, Education, OurTeam, Contact, RevealOnScroll },

}
</script>
  <template>
    <div class="about-view-wide">
      <Landing />
      <RevealOnScroll><Organisations /></RevealOnScroll>
      <RevealOnScroll><Intro /></RevealOnScroll>
      <RevealOnScroll><OurFocus /></RevealOnScroll>
      <RevealOnScroll><Testimonials /></RevealOnScroll>
      <RevealOnScroll><Accomplishments /></RevealOnScroll>
      <RevealOnScroll><Veganism /></RevealOnScroll>
      <RevealOnScroll><Education /></RevealOnScroll>
      <RevealOnScroll><OurStory /></RevealOnScroll>
      <RevealOnScroll><OurTeam /></RevealOnScroll>
      <RevealOnScroll><Contact /></RevealOnScroll>
    </div>

  </template>

<style scoped>
/* Expand section widths and trim side paddings only within About view */
.about-view-wide :deep(.v-container:not(.v-container--fluid)) {
  max-width: min(var(--page-max-width), 100%) !important;
}

.about-view-wide :deep(.v-container):not(.landing):not(.top-container-testimonials) {
  padding-left: var(--page-gutter-x);
  padding-right: var(--page-gutter-x);
}
</style>