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
            let arr = [],res=[];
            let status ='';
            let i=0
            let loop = function(request){
                // console.log(i++);
                if(status==='pending'&&arr.length)return
                return new Promise((resolve,reject)=>{
                    // console.log(arr[0](request));
                    status="pending";
                    console.log('go');
                    arr[0].func(request).then(v=>{
                        resolve(v)
                    })
                }).then(function(ret){
                    arr.shift()
                    res.push(ret)
                    status ='';
                    // console.log(ret);
                    if(arr.length===0){
                        console.log(res);
                        return 
                    }
                    loop(arr[0].request)
                })
            }
            return (func, request) => {
                
                arr.push({func, request})
                loop(request)
                return new Promise((resolve,reject)=>{
                    let n=i++
                    let interval=setInterval(()=>{
                        console.log(res)
                        if(res[n]){
                            resolve(res[n])
                            clearInterval(interval)
                        }
                    },100)
                })
            }
        }
    }
}