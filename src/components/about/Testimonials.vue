<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import nailAvatar from '@/assets/images/about/testimonials/nail.jpeg'
import lucianaAvatar from '@/assets/images/about/testimonials/luciana.png'
import katerinaAvatar from '@/assets/images/about/testimonials/katerina.png'
import laurieAvatar from '@/assets/images/about/testimonials/laurie.png'
import lauraAvatar from '@/assets/images/about/testimonials/laura.png'

type Testimonial = {
    id: number
    title: string
    body: string
    author: string
    rating: number
    avatar: string
    website: string
}

const testimonials = ref<Testimonial[]>([
    {
        id: 1,
        title: 'No better place to learn about permaculture and live like a real Thai farmer.',
        body:'We had a really good time at the project. The host is a good example of female empowerment and we wish her all the best of luck in creating this little heaven. Everyday we had good and healthy food. As non vegans we learnt a lot about eating meals without meat or chicken. The tasks were very different from each other, which we liked very much :)',
        author: 'Nail',
        rating: 5,
        avatar: nailAvatar,
        website: 'Worldpackers',
    },
    {
        id: 2,
        title: 'The tastiest plant-based, locally produced, nutritious vegan dishes...',
        body: 'made from seasonal fruits and vegetables that you will not have the chance of coming across in any restaurant. The most delicious meals packed with nutrients I have tried in Thailand.',
        author: 'Katerina',
        rating: 5,
        avatar: katerinaAvatar,
        website: 'Google',
    },
    {
        id: 3,
        title: 'We had an amazing experience here.',
        body: 'We learned so much about harvesting and building a small agri culture farm. The food was delicious and the balance between working and relaxing was perfect. A big shoutout to Miss Green for hosting us and making us feel at home. We feel grateful and wiser.',
        author: 'Laurie Missiaen',
        rating: 5,
        avatar: laurieAvatar,
        website: 'Google',
    },
    {
        id: 4,
        title: 'A real life experience. I learned so much and food was amazing!',
        body: 'I will cook Thai and vegan in France now 😁. Thank you Angel for everything you teach …',
        author: 'Léia Launay',
        rating: 5,
        avatar: lauraAvatar,
        website: 'Google',
    },
    {
        id: 5,
        title: 'It was a great experience!',
        body: 'I\'ve learned a lot with Green not just about the farm but also about life. Shes not a woman of many words but with good eyes you can see how much she cares about the nature and her family. ive also learned how to cook in a thai kitchen (wich ive never seen before) but reminded me a lot of my granny and the life they had in the past.',
        author: 'Luciana Dagostini',
        rating: 5,
        avatar: lucianaAvatar,
        website: 'Google',
    },
    
])

const active = ref<number>(1)

const total = computed(() => testimonials.value.length)

const { mdAndUp } = useDisplay()
const windowHeight = computed(() => (mdAndUp.value ? '380px' : '760px'))

function next() {
    active.value = active.value >= total.value ? 1 : active.value + 1
}

function prev() {
    active.value = active.value <= 1 ? total.value : active.value - 1
}
</script>

<template>
    <v-container class="py-12 my-12 top-container-testimonials"  fluid>
        <v-row align="center" no-gutters>
            <v-col cols="1" class="d-none d-md-flex justify-center">
                <v-btn icon variant="text" color="success" @click="prev">
                    <v-icon size="48">mdi-chevron-left</v-icon>
                </v-btn>
            </v-col>

            <v-col cols="12" md="10">
                <div  :style="{ height: windowHeight }">
                    <v-window v-model="active" :touch="{ left: next, right: prev }" continuous>
                    <v-window-item
                        v-for="t in testimonials"
                        :key="t.id"
                        :value="t.id"
                        class="testimonial-card px-3 py-16"

                    >
                        <v-row align="center" justify="center">
                            <v-col cols="12" md="8">
                                <div class="d-flex align-center mb-4">
                                    <v-icon color="primary" size="48" class="mr-3">
                                        mdi-format-quote-open
                                    </v-icon>
                                    <div class="text-h5 text-md-h3 font-weight-bold">
                                        {{ t.title }}
                                    </div>
                                </div>
                                <div class="text-body-1 text-medium-emphasis pr-md-8">
                                    {{ t.body }}
                                </div>
                            </v-col>

                            <v-col cols="12" md="3" class="d-flex flex-column align-center">
                                <v-avatar size="96" class="mb-3">
                                    <v-img :src="t.avatar" alt="avatar" cover></v-img>
                                </v-avatar>
                                <div class="text-subtitle-1 font-weight-medium mb-1">
                                    {{ t.author }}
                                </div>
                                <v-rating
                                    :model-value="t.rating"
                                    color="success"
                                    active-color="success"
                                    size="20"
                                    half-increments
                                    readonly
                                />
                                <div class="text-caption text-medium-emphasis mt-1">
                                    {{ Number(t.rating).toFixed(1) }} {{ t.website }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>
                    </v-window>
                </div>

                <div class="d-flex justify-center mt-4 mt-md-6">
                    <v-btn
                        v-for="t in testimonials"
                        :key="t.id"
                        size="small"
                        variant="text"
                        icon
                        @click="active = t.id"
                    >
                        <v-icon :color="active === t.id ? 'success' : 'grey'">mdi-circle</v-icon>
                    </v-btn>
                </div>
            </v-col>

            <v-col cols="1" class="d-none d-md-flex justify-center">
                <v-btn icon variant="text" color="success" @click="next">
                    <v-icon size="48">mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.mr-3 {
    margin-right: 12px;
}


.testimonial-card {
    border: 1px solid rgba(var(--v-theme-primary), 0.3);
    border-radius: 32px;
}

.top-container-testimonials {
    padding-left: 160px;
    padding-right: 160px;

}
</style>