<script lang="ts">
import Organisations from '@/components/about/Organisations.vue'
import Intro from '@/components/about/Intro.vue'
import Landing from '@/components/about/Landing.vue'
import OurFocus from '@/components/about/OurFocus.vue'

export default {
  name: 'AboutView',
  components: { Organisations, Intro, Landing, OurFocus },

}
</script>
  <template>
    <Landing />
    <OurFocus />
    <Organisations />
    <Intro />
</template>

<style scoped>

</style>