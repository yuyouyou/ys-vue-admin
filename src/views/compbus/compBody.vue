<template>
  <div class="comp-body">
    <div>我是主体内容bodyNum：{{ bodyNum }}</div>
    <el-button type="primary" plain @click="add">更新sideNum</el-button>
    <el-button type="success" plain @click="reset">重置sideNum</el-button>
  </div>
</template>
<script>
import Bus from './bus'
export default {
  data () {
    return {
      bodyNum: 0
    }
  },
  created () {
    Bus.$on('change1', (step) => {
      this.bodyNum += step
    })
    Bus.$on('reset1', () => {
      this.bodyNum = 0
    })
  },
  methods: {
    add () {
      Bus.$emit('change', 1)
    },
    reset () {
      Bus.$emit('reset')
    }
  }
}
</script>
<style lang="less" scoped>
    .comp-body {
        min-height: 500px;
        background-color: #edecff;
    }
</style>