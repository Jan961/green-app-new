<template>
    <v-container class="testimonials-section py-12">
        <v-slide-group
            v-model="active"
            show-arrows
            class="testimonials-group"
        >
            <template #prev="{ prev }">
                <v-btn icon variant="text" :height="80" :width="80" @click="prev">
                    <v-icon icon="mdi-chevron-left" size="80" />
                </v-btn>
            </template>
            <template #next="{ next }">
                <v-btn icon variant="text" :height="80" :width="80" @click="next">
                    <v-icon icon="mdi-chevron-right" size="80" />
                </v-btn>
            </template>
            <v-slide-group-item
                v-for="t in testimonials"
                :key="t.id"
                :value="t.id"
                class="testimonial-item"
            >   
            <v-card class="testimonial-card" rounded="xl" elevation="0">   
                <div class="testimonial-content">
                    {{ t.title }}
                    {{ t.body }}
                    {{ t.author }}
                    {{ t.rating }}
                    {{ t.avatar }}
                </div>
            </v-card>

            </v-slide-group-item>
        </v-slide-group>
    </v-container>
    
</template>
<script setup lang="ts">
import { ref } from 'vue'

type Testimonial = {
    id: number
    title: string
    body: string
    author: string
    rating: number
    avatar: string
}

const testimonials = ref<Testimonial[]>([
    {
        id: 1,
        title: 'We had an amazing experience here.',
        body:
            'We learned so much about harvesting and building a small agriculture farm. The food was delicious and the balance between working and relaxing was perfect. A big shoutout to Miss Green for hosting us and making us feel at home. We feel grateful and wiser.',
        author: 'Laurie Missiaen',
        rating: 5,
        avatar: 'https://i.pravatar.cc/160?img=15',
    },
    {
        id: 2,
        title: 'Truly inspiring and peaceful place.',
        body:
            'Days were filled with meaningful tasks, evenings with stories and laughter. I learned practical permaculture skills and ate the freshest plant-based meals I have ever had.',
        author: 'Miguel Santos',
        rating: 5,
        avatar: 'https://i.pravatar.cc/160?img=32',
    },
    {
        id: 3,
        title: 'Skill-building, community, and nature.',
        body:
            'From composting to planting, every activity was hands-on and educational. The hosts were kind and made sure we were comfortable the entire stay.',
        author: 'Akari Tanaka',
        rating: 4.8,
        avatar: 'https://i.pravatar.cc/160?img=5',
    },
])

const active = ref<number>(1)
</script>

<style scoped>

.testimonial-card {
    

}







</style>