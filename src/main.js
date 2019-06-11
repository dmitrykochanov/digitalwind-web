import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import colors from 'vuetify/es5/util/colors';
import News from "@/components/News";
import Pictures from "@/components/Pictures";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    theme: {
        primary: '#28166F',
        secondary: colors.red.lighten4,
        accent: colors.indigo.base
    }
});

const routes = [
    {path: '/news', component: News},
    {path: '/pictures', component: Pictures},
    {path: '/', component: News}
];
const router = new VueRouter({
    mode: 'history',
    routes
});
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
