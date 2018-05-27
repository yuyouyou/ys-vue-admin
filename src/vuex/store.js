import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        goods: [
            {
                id: '0',
                title: '小米MIX 2 8GB+128GB 全陶瓷尊享版 黑色',
                price: 3499.00,
                num: 0,
                total: 10
            },
            {
                id: '1',
                title: '米家空气净化器Pro 白色',
                price: 1399.00,
                num: 0,
                total: 5
            },
            {
                id: '2',
                title: '小米手环 2 黑色',
                price: 142.00,
                num: 0,
                total: 12
            },
            {
                id: '3',
                title: '小米路由器4',
                price: 99.00,
                num: 0,
                total: 15
            },
            {
                id: '4',
                title: '小米小爱音箱mini',
                price: 842.00,
                num: 0,
                total: 20
            }
            ],
        totalPrice: 0.00,
        totalNum: 0
    },
    mutations: {

    },
    actions: {

    }
})

export default store;