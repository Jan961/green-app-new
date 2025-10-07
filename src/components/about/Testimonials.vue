<script setup lang="ts">
import { ref, computed } from 'vue'

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

const total = computed(() => testimonials.value.length)

function next() {
    active.value = active.value >= total.value ? 1 : active.value + 1
}

function prev() {
    active.value = active.value <= 1 ? total.value : active.value - 1
}
</script>

<template>
    <v-container class="py-12" fluid>
        <v-row align="center" no-gutters>
            <v-col cols="1" class="d-none d-md-flex justify-center">
                <v-btn icon variant="text" color="success" @click="prev">
                    <v-icon size="48">mdi-chevron-left</v-icon>
                </v-btn>
            </v-col>

            <v-col cols="12" md="10">
                <div class="t-window-fixed-height">
                    <v-window v-model="active" :touch="{ left: next, right: prev }" continuous>
                    <v-window-item
                        v-for="t in testimonials"
                        :key="t.id"
                        :value="t.id"
                    >
                        <v-row align="center" justify="center">
                            <v-col cols="12" md="8">
                                <div class="d-flex align-center mb-4">
                                    <v-icon color="success" size="48" class="mr-3">
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
                                    {{ Number(t.rating).toFixed(1) }} Google
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>
                    </v-window>
                </div>

                <div class="d-flex justify-center mt-6">
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
.t-window-fixed-height {
    /* Adjust this fixed height to accommodate the tallest slide content */
    min-height: 240px;
}
</style>