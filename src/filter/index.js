import Vue from 'vue';
Vue.filter('fileSize', (value) => {
    const toFixed = val => val.toFixed(2);

    if (value < 1024) {
        return `${value}B`;
    } else if (value < 1048576) {
        return `${toFixed(value / 1024)}K`;
    } else if (value < 1073741824) {
        return `${toFixed(value / 1048576)}M`;
    } else if (value < 1099511627776) {
        return `${toFixed(value / 1073741824)}G`;
    } else if (value < 1125899906842624) {
        return `${toFixed(value / 1099511627776)}T`;
    }
});