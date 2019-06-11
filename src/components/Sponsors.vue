<template>
    <v-card>
        <v-container grid-list-md text-xs-center fluid>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-layout column>
                        <span class="headline">Организаторы</span>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/bitrix/templates/digitalwind/img/sgtu_new.png'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/logo_inpit.jpg'"/>
                        <span class="headline">Партнеры</span>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/fas.jpg'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/bellintegrator.jpg'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/sibintek.png'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/neoflex.png'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/GridDynamics.png'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/logonet.png'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/logo-big.png'"/>
                        <v-img max-width="300px" class="spacer"
                               :src="'http://www.digitalwind.ru/images/partners/artezio.png'"/>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "Sponsors"
    }
</script>

<style scoped>
    .spacer {
        box-sizing: border-box;
        margin-bottom: 20px;
    }
</style>
