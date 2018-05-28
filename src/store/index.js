import Vue from 'vue'
import Vuex from 'vuex'
import shop from './modules/shop'
Vue.use(Vuex);

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
    }
})

export default store;