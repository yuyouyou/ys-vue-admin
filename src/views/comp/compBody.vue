<template>
  <div class="comp-body">
    <el-button type="primary" plain @click="updateCount">更新计数</el-button>
    <el-button type="success" plain @click="resetCount">重置</el-button>
    <el-button type="warning" plain @click="add">根实例的rootNum: {{ this.$root.rootNum }}</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    updateCount() {
      this.$emit('add');
    },
    resetCount() {
      this.$emit('reset');
    },
    add () {
      this.$root.rootNum ++
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