<template>
    <v-layout>
        <v-flex xs12>
            <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                <v-layout row wrap>
                    <v-flex v-for="n in 9" :key="n" xs4>
                        <v-card>
                            <v-img :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                   height="400px">
                            </v-img>
                            <v-card-title primary-title>897633</v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Pictures"
    }
</script>

<style scoped>

</style>
