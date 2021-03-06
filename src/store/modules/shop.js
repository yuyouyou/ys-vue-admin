const shopCart = {
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
    getters: {
        // 总数
        totalNum(state){
            let aTotalNum = 0;
            state.goods.forEach((value,index) => {
                aTotalNum += value.num;
            })
            return aTotalNum;
        },
        // 总价
        totalPrice(state){
            let aTotalPrice = 0;
            state.goods.forEach( (value,index) => {
                aTotalPrice += value.num * value.price
            })
            return aTotalPrice.toFixed(2);
        },
        // 购物车商品
        cartProducts(state, getters) {
            let cartProducts = [];
            for(let i in state.goods){
                if(state.goods[i].num>0){
                    cartProducts.push(state.goods[i])
                }
            }
            return cartProducts;
        }
    },
    mutations: {
        // 用el-input-number 改变num值触发状态更改，就不需要这些了
        /*reselt(state,msg){
            state.totalPrice = this.getters.totalPrice;
            state.totalNum = this.getters.totalNum;
        },
        addGoods (state, id) {
            if (state.goods[id].num<state.goods[id].total) {
                state.goods[id].num++
                //state.totalNum++
                //state.totalPrice += state.goods[id].price
                this.commit('reselt');
            }
        },
        reduceGoods (state, id) {
            if (state.goods[id].num > 0) {
                state.goods[id].num--
                //state.totalNum--
                //state.totalPrice -= state.goods[id].price
                this.commit('reselt');
            }
        },*/
        clearGoods (state) {
            state.goods.forEach(p => {
                p.num = 0
            })
        }
    }
}

export default shopCart
