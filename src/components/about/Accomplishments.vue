<script setup lang="ts">
type StatCard = {
    id: number
    label: string
    value?: string
    icon: string
    color?: string
    emphasis?: boolean
}

const statCards: StatCard[] = [
    {
        id: 1,
        label: 'Planted forest trees',
        value: '1,500+',
        icon: 'mdi-tree',
    },
    {
        id: 2,
        label: 'Types of herbs',
        value: '200+',
        icon: 'mdi-leaf',
    },
    {
        id: 3,
        label: 'Planted Fruit Trees',
        value: '2,000+',
        icon: 'mdi-palm-tree',
    },
    {
        id: 4,
        label: 'Dozens of children have participated in our classes',
        icon: 'mdi-sprout',
        color: 'success',
        emphasis: true,
    },
]
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
                        <v-card
                            class="stat-card pa-6"
                            :color="card.emphasis ? 'success' : undefined"
                            :variant="card.emphasis ? 'flat' : 'elevated'"
                            rounded="xl"
                            elevation="2"
                        >
                            <div class="d-flex flex-column h-100 position-relative">
                                <div :class="['text-subtitle-1 mb-2', card.emphasis ? 'text-white' : 'text-medium-emphasis']">
                                    {{ card.label }}
                                </div>

                                <div v-if="card.value" :class="['text-h4 font-weight-black', card.emphasis ? 'text-white' : 'text-success']">
                                    {{ card.value }}
                                </div>

                                <v-spacer></v-spacer>

                                <v-icon
                                    :color="card.emphasis ? 'white' : 'success'"
                                    size="96"
                                    class="icon-floater"
                                >
                                    {{ card.icon }}
                                </v-icon>
                            </div>
                        </v-card>
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
}

.stat-card {
    min-height: 220px;
}

.icon-floater {
    position: absolute;
    right: 12px;
    bottom: 12px;
    opacity: 0.9;
}
</style>

