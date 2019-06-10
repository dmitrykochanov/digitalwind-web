<template>
    <v-app>
        <NavigationDrawer/>
        <Toolbar/>
        <v-content>
            <v-container grid-list-md text-xs-center fluid>
                <v-layout row wrap>
                    <v-flex xs1></v-flex>
                    <v-flex lg8>
                        <News/>
                    </v-flex>
                    <v-flex xs1></v-flex>
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
    import NavigationDrawer from "@/components/NavigationDrawer";
    import News from "@/components/News";

    export default {
        name: "Main",
        components: {News, NavigationDrawer, Toolbar, Sponsors}
    }
</script>

<style scoped>
</style>
