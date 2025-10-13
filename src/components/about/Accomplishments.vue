<script setup lang="ts">
import ChildrenIcon from '@/components/icons/accomplishments/Children.vue'
import PlantIcon from '@/components/icons/accomplishments/Plant.vue'
import { ref } from 'vue'
import type { Component } from 'vue'
type StatCard = {
    id: number
    label: string
    value?: string
    icon: string | Component
    color?: string
    emphasis?: boolean
    details: string
}

const statCards: StatCard[] = [
    {
        id: 1,
        label: 'Planted forest trees',
        value: '1,500+',
        icon: 'mdi-sprout',
        details:
            'We have planted over 1,500 native forest trees to restore biodiversity and improve soil health.',
    },
    {
        id: 2,
        label: 'Types of herbs',
        value: '200+',
        icon: 'mdi-leaf',
        details:
            'Our herbarium now includes more than 200 medicinal and culinary herbs used for education. Lorem ipsum dolor sit amet.',
    },
    {
        id: 3,
        label: 'Planted Fruit Trees',
        value: '2,000+',
        icon: 'mdi-palm-tree',
        details:
            'Over 2,000 fruit trees support local food security and wildlife habitat. Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        id: 4,
        label: 'Dozens of children have participated in our classes',
        icon: ChildrenIcon as Component,
        color: 'primary',
        emphasis: true,
        details:
            'Hands-on classes have engaged dozens of children',
    },
]

const flippedCardIds = ref<Set<number>>(new Set())

function isFlipped(cardId: number): boolean {
    return flippedCardIds.value.has(cardId)
}

function toggleFlip(cardId: number): void {
    const next = new Set(flippedCardIds.value)
    if (next.has(cardId)) {
        next.delete(cardId)
    } else {
        next.add(cardId)
    }
    flippedCardIds.value = next
}

function onCardKeydown(event: KeyboardEvent, cardId: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggleFlip(cardId)
    }
}
</script>

<template>
    <v-container class="accomplishments-section py-12">
        <v-row align="stretch" class="g-6">
            <v-col cols="12" md="6">
                <div class="pr-md-8">
                    <h2 class="text-h4 text-md-h2 font-weight-black mb-6">
                        Growing a <span class="text-success">Greener</span> Tomorrow Together!
                    </h2>
                    <p class="text-body-1 text-medium-emphasis mb-4">
                        Since its founding, the organic vegan farm in Thailand has made a
                        remarkable impact by planting thousands of trees, restoring the natural
                        environment and promoting sustainability.
                    </p>
                    <p class="text-body-1 text-medium-emphasis">
                        It has also inspired the next generation, with dozens of children
                        participating in educational classes on organic farming, environmental
                        stewardship, and healthy living.
                    </p>
                </div>
            </v-col>

            <v-col cols="12" md="6">
                <v-row class="g-6">
                    <v-col
                        v-for="card in statCards"
                        :key="card.id"
                        cols="12"
                        sm="6"
                    >
                        <div
                            class="stat-card flip-scene"
                            role="button"
                            :aria-pressed="isFlipped(card.id) ? 'true' : 'false'"
                            :aria-label="isFlipped(card.id) ? `Show summary for ${card.label}` : `Show details for ${card.label}`"
                            tabindex="0"
                            @click="toggleFlip(card.id)"
                            @keydown="onCardKeydown($event, card.id)"
                        >
                            <div :class="['flip-card', isFlipped(card.id) ? 'is-flipped' : '']">
                                <!-- Front Face: matches current look -->
                                <v-card
                                    class="flip-face face-front pa-6"
                                    :variant="card.emphasis ? 'flat' : 'elevated'"
                                    :color="card.emphasis ? (card.color ?? 'primary') : undefined"
                                    rounded="xl"
                                    :ripple="false"
                                    :elevation="2"
                                >
                                    <div class="d-flex flex-column h-100">
                                        <div :class="['text-subtitle-1 mb-2', card.emphasis ? 'text-white' : 'text-medium-emphasis']">
                                            {{ card.label }}
                                        </div>

                                        <div v-if="card.value" :class="['text-h4 font-weight-black', card.emphasis ? 'text-white' : 'text-success']">
                                            {{ card.value }}
                                        </div>

                                        <v-spacer></v-spacer>

                                        <div class="icon-floater">
                                            <v-icon
                                                v-if="typeof card.icon === 'string'"
                                                :color="card.emphasis ? 'white' : 'success'"
                                                size="96"
                                            >
                                                {{ card.icon }}
                                            </v-icon>
                                            <component
                                                v-else
                                                :is="card.icon"
                                                class="icon-svg"
                                                :class="card.emphasis ? 'text-white' : 'text-success'"
                                            />
                                        </div>
                                    </div>
                                </v-card>

                                <!-- Back Face: inverted colors and details -->
                                <v-card
                                    class="flip-face face-back pa-6"
                                    :variant="card.emphasis ? 'elevated' : 'flat'"
                                    :color="card.emphasis ? undefined : 'primary'"
                                    rounded="xl"
                                    :elevation="2"
                                    :ripple="false"
                                >
                                    <div class="d-flex flex-column h-100">
                                        <div :class="['text-subtitle-1 mb-2 font-weight-medium', card.emphasis ? 'text-primary' : 'text-white']">
                                            {{ card.label }}
                                        </div>
                                        <div :class="['text-body-1', card.emphasis ? 'text-primary' : 'text-white']">
                                            {{ card.details }}
                                        </div>

                                        <v-spacer></v-spacer>

                                        <div class="icon-floater">
                                            <v-icon
                                                v-if="typeof card.icon === 'string'"
                                                :color="card.emphasis ? 'primary' : 'white'"
                                                size="96"
                                            >
                                                {{ card.icon }}
                                            </v-icon>
                                            <component
                                                v-else
                                                :is="card.icon"
                                                class="icon-svg"
                                                :class="card.emphasis ? 'text-primary' : 'text-white'"
                                            />
                                        </div>
                                    </div>
                                </v-card>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<style scoped>
.accomplishments-section {
    max-width: 1200px;
    margin-inline: auto;
    --v-hover-opacity: 0; 
    --v-activated-opacity: 0;
}

.stat-card {
    min-height: 220px;
    position: relative;
    overflow: visible; 
}

.flip-scene {
    perspective: 1000px;
    height: 100%;
}

.flip-card {
    position: relative;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1000ms cubic-bezier(0.2, 0.8, 0.2, 1);
    will-change: transform;
}

.flip-card.is-flipped {
    transform: rotateY(180deg);
}

.flip-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden; /* clip inner content to rounded corners */
}

.face-front {
    transform: rotateY(0deg);
}

.face-back {
    transform: rotateY(180deg);
}

.icon-floater {
    align-self: flex-end;
    opacity: 0.9;
}

.icon-svg {
    width: 96px;
    height: 96px;
}

.stat-card :deep(.v-ripple__container),
.stat-card :deep(.v-ripple__animation) {
    display: none !important;
}
</style>

