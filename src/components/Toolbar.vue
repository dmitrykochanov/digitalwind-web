<template>
    <v-toolbar dark color="primary" fixed app clipped-left height="70px">
        <v-toolbar-title class="mr-5 align-center">
            <span class="title">Цифровой ветер</span>
        </v-toolbar-title>
        <v-spacer/>
        <v-layout row style="max-width: 600px">
            <v-container fill-height>
                <v-text-field prepend-icon="person" name="login" label="Имя"
                              type="text" color="white"></v-text-field>
                <v-spacer/>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль"
                              type="password" color="white"></v-text-field>
                <v-spacer/>
                <v-btn flat>Войти</v-btn>
            </v-container>
        </v-layout>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>
