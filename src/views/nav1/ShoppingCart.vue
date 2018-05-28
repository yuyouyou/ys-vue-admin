<template>
  <div>
      <h1>购物车</h1>
      <div class="shop-cart-list">
        <ul>
            <li v-for="item in this.$store.state.shop.goods" :key="item.id" class="shop-cart-item">
                <div class="shop-cart-title">{{item.title}}</div>
                <div class="clearfix">
                    <div class="shop-cart-price">￥{{item.price}}</div>
                    <div class="shop-cart-num">
                        <span class="reduce" @click="reduceGoods(item.id)">-</span>
                        <span class="num">{{item.num}}</span>
                        <span class="add" @click="addGoods(item.id)">+</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="fr">
            <span>合计:￥{{this.$store.state.shop.totalPrice}}</span>
            <span style="margin:0 20px;cursor: pointer;">结算({{this.$store.state.shop.totalNum}})</span>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';// 对应着store中的state,getters,mutations
export default {
    name: 'Goods',
    data() {
        return {
            /*goods: this.$store.state.goods,
            totalNum: this.$store.state.totalNum,
            totalPrice: this.$store.state.totalPrice*/
        }
    },
    computed:{
        // 辅助函数的方式
        ...mapState(['goods']),
        ...mapGetters(['totalPrice','totalNum'])
        /**
            ‘...’ 为ES6中的扩展运算符
            如果使用的名称和store中的一样，直接写成上面数组的形式就行，
            反之，写法如下
            ...mapState({
                goodsData: state => state.goods
            })
        **/
    },
    methods: {
        // 不用辅助函数的方式
        /*reduceGoods(id) {
            this.$store.commit('reduceGoods', id)
        },
        addGoods(id) {
            this.$store.commit('addGoods', id)
        }*/
        // 辅助函数的方式
        ...mapMutations(['reduceGoods','addGoods'])
        /**
            相当于直接调用了store中的方法
            reduceGoods(id){},
            addGoods(id){}
        **/
    }
}
</script>

<style lang="less">
.shop-cart {
    &-list {
        width: 365px;
    }
    &-title {
        margin: 10px 0;
    }
    &-item {
        margin: 25px;
    }
    &-price {
        float: left;
    }
    &-num {
        float: right;
        border: 1px solid #e1e1e1;
        padding: 0 5px;
        border-radius: 4px;
        height: 20px;
        line-height: 20px;
        .reduce,.add,.num {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            width: 20px;
            text-align: center;
            text-indent: -5px;
        }
        .reduce,.num {
            border-right: 1px solid #e1e1e1;
        }
        .reduce,.add {
            cursor: pointer;
        }
    }
}
</style>
