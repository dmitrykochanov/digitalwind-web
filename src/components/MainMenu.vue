<template>
    <v-layout column fill-height>
        <v-list>
            <v-list-tile v-for="item in items" :key="item.text" @click="onLinkClicked(item.link)">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ item.text }}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-spacer/>
        <div>
            <v-img :src="logo"/>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: "MainMenu",
        data: () => ({
            logo: require("../assets/logo_digital_wind.png"),
            items: [
                {icon: 'view_list', text: 'Новости', link: '/news'},
                {icon: 'image', text: 'Каталог работ', link: '/pictures'},
                {icon: 'face', text: 'ДКШ', link: '/news'},
                {icon: 'videocam', text: 'Видео', link: '/news'},
                {icon: 'info', text: 'Информация', link: '/news'},
                {icon: 'contact_phone', text: 'Контакты', link: '/news'}
            ]
        }),
        methods: {
            onLinkClicked: function (link) {
                this.$router.push(link)
            }
        }
    }
</script>

<style scoped>

</style>
