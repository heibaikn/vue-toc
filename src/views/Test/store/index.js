import Vue from 'vue';
import axios from 'axios';
import {
    TEST_PROVIDE_INJECT,
    TEST_QUEUE_EVENT,
} from './mutation';
import { authApi } from '@/api';
// console.log(authApi);
let queueEvent = Vue.queueEvent()

export default {
    namespaced: true,
    state: {
        userStatus: false
    },
    mutations: {
        [TEST_PROVIDE_INJECT](state, payload) {

        },
        [TEST_QUEUE_EVENT](state, payload) {

        },
    },
    actions: {
        async provide({ state, commit, }, payload) {

        },
        async queue({ state, commit, }, request) {

           return await queueEvent(authApi.queryUser, request)
        //    return await authApi.queryUser(request)
        }
    }
}