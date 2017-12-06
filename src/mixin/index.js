import Vue from 'vue';

Vue.mixin({
    methods: {
        go(name, params, query) {
            if (query) {
                this.$router.push({
                    name,
                    query,
                });
            } else {
                this.$router.push({
                    name,
                    params,
                });
            }
        }
    }
})