<template>
    <v-layout>
        <v-flex xs12 v-if="pictures.length === 0" offset-xs5>
            <v-progress-circular indeterminate></v-progress-circular>
        </v-flex>
        <v-flex xs12>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex v-for="item in pictures" :key="item.id" xs4>
                        <v-card>
                            <v-img :src="item.imageUrl" height="400px"></v-img>
                            <v-card-title primary-title>{{item.number}}</v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios';

    export default {
        created() {
            axios.get('https://digitalwind-server.herokuapp.com/pictures')
                .then(response => this.pictures = response.data)
        },
        name: "Pictures",
        data() {
            return {
                pictures: []
            }
        }
    }
</script>

<style scoped>
</style>
