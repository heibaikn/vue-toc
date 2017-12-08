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
        Vue.queueEvent = () => {
            let event = [], resolveArr = []
            let status = '', i = 0;
            let loop = async () => {
                if (status === 'pending') return
                status = 'pending';
                for (let n = 0; n < event.length; n++) {
                    resolveArr[n](await event[n].func(event[n].request))
                }
                status = ""
                i = 0;
                // console.log(event.length);
                event.splice(0, event.length)

            }
            return (func, request) => {
                event.push({ func, request })
                loop()
                return new Promise((resolve, reject) => {
                    let n = i++
                    resolveArr[n] = resolve
                })
            }
        }
    }
}