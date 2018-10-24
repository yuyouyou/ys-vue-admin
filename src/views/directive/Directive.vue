<template>
  <div class="page">
    <div v-clickoutside="handleClose">
        <button @click="show=!show">点击显示隐藏下拉框</button>
        <div v-show="show">下拉框的内容，没有样式，主要测试自定义指令-点击外面区域可以关闭</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.directive('clickoutside',{
    bind: function (el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false
            }
            if (binding.expression) {
                binding.value(e)
            }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click', documentHandler)
    },
    unbind: function (el, binding) {
        document.removeEventListener('click', el._vueClickOutside_)
        delete el._vueClickOutside_
    }
})

export default {
  data() {
    return {
        show: false
    }
  },
  methods: {
    handleClose: function () {
        this.show = false
    }
  }
}
</script>

<style scoped>
</style>
