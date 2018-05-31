<template>
  <div class="comp-side">
    <el-button type="primary" plain @click="updateCount">更新计数</el-button>
    <el-button type="success" plain @click="resetCount">重置</el-button>
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