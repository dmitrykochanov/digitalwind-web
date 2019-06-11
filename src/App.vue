<template>
    <v-app>
        <v-navigation-drawer permanent clipped app>
            <MainMenu/>
        </v-navigation-drawer>
        <Toolbar/>
        <v-content>
            <v-container grid-list-md text-xs-center fluid>
                <v-layout row wrap>
                    <v-flex lg1/>
                    <v-flex lg8>
                        <router-view></router-view>
                    </v-flex>
                    <v-flex lg1/>
                    <v-flex lg2>
                        <Sponsors/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Sponsors from "@/components/Sponsors";
    import Toolbar from "@/components/Toolbar";
    import MainMenu from "@/components/MainMenu";
    import News from "@/components/News";

    export default {
        name: 'app',
        components: {News, MainMenu, Toolbar, Sponsors}
    }
</script>

<style scoped>
</style>
