import Vue from 'vue'
import Vuex from 'vuex'
// 修改state时在console打印
import createLogger from 'vuex/dist/logger'
import shop from './modules/shop'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    state: {
        count: 123
    },
    getters:{
        // getters 类似 computed
        // 在这里面写个方法
    },
    mutations:{
        // mutations 类似methods
        // 写方法对数据做出更改(同步操作)
    },
    actions:{
        // actions 类似methods
        // 写方法对数据做出更改(异步操作)
    },
    modules: {
        shop
    },
    // 严格模式，非法修改state时报错
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store;