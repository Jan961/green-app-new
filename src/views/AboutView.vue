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

export default {
  name: 'AboutView',
  components: { Organisations, Intro, Landing, OurFocus, Testimonials, Accomplishments, Veganism, OurStory, Education, OurTeam },

}
</script>
  <template>
    <Landing />
    <Organisations />
    <Intro />
    <OurFocus />
    <Testimonials />
    <Accomplishments />
    <Veganism />
    <Education />
    <OurStory />
    <OurTeam />
</template>

<style scoped>

</style>