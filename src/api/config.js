import router from '@/router';
import axios from 'axios';
import Promise from 'es6-promise';
import {
    CONST_HEADER,
    CONST_WHITE_LISTS,
    CONST_API_WHITE_LISTS,
} from './default';

const prod = process.env.NODE_ENV === 'production';

/**
 * request should carry with cookies
 */
axios.defaults.withCredentials = true;
axios.Promise = window.Promise = window.Promise || Promise;


/**
 * seperate dev and prodution baseUrl
 */

axios.defaults.baseURL = prod ?
    '/' :
    'http://localhost:8081';

// Object.assign(axios.defaults.headers, { 'Content-Type': 'application/json'}, CONST_HEADER()); 

axios
    .interceptors
    .request
    .use(config => {
        Object.assign(config.headers, { 'Content-Type': 'application/json' }, CONST_HEADER());
        return config
    });



axios
    .interceptors
    .response
    .use((results) => {
       
        return results.data;
    }, (error) => {
        // console.error(error);
        return Promise.reject(error);
    });

