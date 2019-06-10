<template>
    <v-navigation-drawer permanent clipped app>
        <v-layout column fill-height>
            <v-list>
                <v-list-tile v-for="item in items" :key="item.text" @click="">
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
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "NavigationDrawer",
        data: () => ({
            logo: require("../assets/logo_digital_wind.png"),
            items: [
                {icon: 'view_list', text: 'Новости'},
                {icon: 'image', text: 'Каталог работ'},
                {icon: 'face', text: 'ДКШ'},
                {icon: 'videocam', text: 'Видео'},
                {icon: 'info', text: 'Информация'},
                {icon: 'contact_phone', text: 'Контакты'}
            ]
        })
    }
</script>

<style scoped>

</style>
