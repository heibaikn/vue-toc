export default {
    install(Vue, option) {
        /* common function */
        Vue.useAll = (...plugins) => {
            plugins.map((p) => {
                if (Array.isArray(p) && p.length > 0) {
                    return p.map(_p => Vue.use(_p));
                }
                Vue.use(p);
            });
        }
    }
}