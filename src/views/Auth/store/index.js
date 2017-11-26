import axios from 'axios';
import { SET_AUTH_USER_STATUS } from './mutation-types';
import { authApi } from '@/api';
// console.log(authApi);
export default {
    namespaced: true,
    state: {
        userStatus: false
    },
    mutations: {
        [SET_AUTH_USER_STATUS](state, payload) {

        }
    },
    actions: {
        async userLogin({ state, commit, }, payload) {
            await authApi.login(payload)
            // console.log(payload);

        }
    }
}