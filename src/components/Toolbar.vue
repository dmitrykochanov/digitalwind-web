<template>
    <v-toolbar dark color="primary" fixed app clipped-left height="70px">
        <v-toolbar-title class="mr-5 align-center">
            <span class="title">Цифровой ветер</span>
        </v-toolbar-title>
        <v-spacer/>
        <v-form v-model="valid" v-if="!isLoggedIn">
            <v-layout row style="max-width: 600px">
                <v-container fill-height>
                    <v-text-field v-model="login" :rules="loginRules" prepend-icon="person" name="login" label="Имя"
                                  type="text" color="white" required></v-text-field>
                    <v-spacer/>
                    <v-text-field v-model="password" :rules="passwordRules" id="password" prepend-icon="lock"
                                  name="password" label="Пароль" type="password" color="white" required></v-text-field>
                    <v-spacer/>
                    <v-btn :disabled="!valid" flat @click="performLogin()">Войти</v-btn>
                </v-container>
            </v-layout>
        </v-form>
        <v-toolbar-items v-if="isLoggedIn">
            <v-btn flat @click="performLogout">Выйти ({{this.user_name}})</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import axios from 'axios';

    export default {
        created() {
            this.isLoggedIn = localStorage.getItem('token') != null;
            this.user_name = localStorage.getItem('user_name');
        },
        name: "Toolbar",
        data: () => ({
            valid: false,
            login: 'user1',
            loginRules: [
                v => !!v || 'Введите имя'
            ],
            password: 'user1',
            passwordRules: [
                v => !!v || 'Введите пароль'
            ],
            isLoggedIn: false,
            user_name: 'asdasd'
        }),
        methods: {
            performLogin: function () {
                axios.post('https://quiet-meadow-47713.herokuapp.com/users/sign-in', {
                    login: this.login,
                    password: this.password
                })
                    .then(response => {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user_name', response.data.login);
                        this.isLoggedIn = true;
                        this.user_name = response.data.login;
                    })
            },
            performLogout: function () {
                localStorage.clear();
                this.isLoggedIn = false;
                this.user_name = '';
            }
        }
    }
</script>

<style scoped>

</style>
