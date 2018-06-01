<template>
  <div class="comp-side">
    <div>
      我是侧边栏sideNum：{{ sideNum }}
    </div>
    <el-button type="primary" plain @click="add">更新bodyNum</el-button>
    <el-button type="success" plain @click="reset">重置bodyNum</el-button>
  </div>
</template>
<script>
import Bus from './bus'
export default {
  data () {
    return {
      sideNum: 0
    }
  },
  created () {
    Bus.$on('change', (step) => {
      this.sideNum += step
    })
    Bus.$on('reset', () => {
      this.sideNum = 0
    })
  },
  methods: {
    add () {
      Bus.$emit('change1', 1)
    },
    reset () {
      Bus.$emit('reset1')
    }
  }
}
</script>
<style lang="less" scoped>
    .comp-side {
        min-height: 500px;
        background-color: #edecff;
        margin-right: 10px;
    }
</style>