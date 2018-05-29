<template>
  <div>
      <h1>购物车demo</h1>
      <div class="shop-cart-list">
        <ul>
            <li v-for="item in $store.state.shop.goods" :key="item.id" class="shop-cart-item">
                <div class="shop-cart-title">{{item.title}}</div>
                <div class="clearfix">
                    <div class="shop-cart-price">￥{{item.price}}</div>
                    <!--<div class="shop-cart-num">
                        <span class="reduce" @click="reduceGoods(item.id)">-</span>
                        <span class="num">{{item.num}}</span>
                        <span class="add" @click="addGoods(item.id)">+</span>
                    </div>-->
                    <div class="shop-cart-number">
                        <el-input-number
                            :min="0" :max="item.total"
                            v-model="item.num">
                        </el-input-number>
                    </div>
                </div>
            </li>
        </ul>
        <div>
            <div>你的购物清单：<span v-if="!cartProducts.length">暂无商品</span></div>
            <ul>
                <li v-for="item in cartProducts" :key="item.id" class="shop-cart-item">
                    <div class="shop-cart-title">{{item.title}} - {{item.price}} X {{item.num}}</div>
                </li>
            </ul>
        </div>
        <div class="clearfix">
            <div class="fr">
                <span>合计:￥{{totalPrice}}</span>
                <span style="margin:20px;cursor: pointer;display: inline-block;">结算({{totalNum}})</span>
            </div>
        </div>
        <el-row>
            <el-button type="primary" plain @click="clearGoods" class="clear-btn">CLEAR</el-button>
        </el-row>
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
        ...mapGetters(['totalPrice','totalNum','cartProducts'])
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
        // 一、不用辅助函数的方式
        /*reduceGoods(id) {
            this.$store.commit('reduceGoods', id)
        },
        addGoods(id) {
            this.$store.commit('addGoods', id)
        }*/

        // 二、辅助函数的方式
        // ...mapMutations(['reduceGoods','addGoods','clearGoods'])
        /**
            相当于直接调用了store中的方法
            reduceGoods(id){},
            addGoods(id){}
        **/

        // 三、直接用el-input-number 改变num值触发状态更改，就不需要addGoods和reduceGoods了
        ...mapMutations(['clearGoods'])

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
    &-number {
        float: right;
    }
}
.clear-btn {
    margin:20px;
    cursor: pointer;
    float:right;
}
</style>
