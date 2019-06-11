<template>
    <v-layout>
        <v-flex xs12 v-if="news.length === 0" offset-xs5>
            <v-progress-circular indeterminate></v-progress-circular>
        </v-flex>
        <v-flex xs12>
            <v-card :key="item.id" v-for="item in news" class="spacer">
                <v-img :src="item.imageUrl" aspect-ratio="2.75"></v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{item.title}}</h3>
                        <p class="newsBody">{{item.body}}</p>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios';

    export default {
        created() {
            axios.get('https://digitalwind-server.herokuapp.com/news')
                .then(response => this.news = response.data)
        },
        name: "News",
        data() {
            return {
                news: []
            }
        }
    }
</script>

<style scoped>

    .spacer {
        box-sizing: border-box;
        margin-bottom: 40px;
    }

    .newsBody {
        text-align: justify;
    }
</style>
