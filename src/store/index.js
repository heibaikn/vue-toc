import Vue from 'vue';
import Vuex from 'vuex';
import Auth from '@/views/Auth/store';


Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        a:1
    },
    modules:{
        Auth
    }
})