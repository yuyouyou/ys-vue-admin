<template>
  <div class="comp-body">
    <el-input-number v-model="currentVal" @change="handleChange" :min="0" label="计数"></el-input-number>
  </div>
</template>
<script>
export default {
  props: {
      count: {
          type: Number,
          default: 0
      }
  },
  data() {
    return {
      currentVal: 0
    }
  },
  methods: {
    handleChange (val) {
      this.$emit('change',val)
    }
  },
  // 外层数据改变时，currentVal值需要同步修改
  watch: {
    count: {
      handler (val) {
        this.currentVal = val
      },
      immediate: true
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