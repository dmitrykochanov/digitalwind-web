import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import colors from 'vuetify/es5/util/colors';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    theme: {
        primary: '#28166F',
        secondary: colors.red.lighten4,
        accent: colors.indigo.base
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
