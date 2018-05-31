<template>
  <div class="comp-header">我后面的数字是我的父组件传给我的，count：{{ count }}</div>
</template>
<script>
export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style lang="less" scoped>
    .comp-header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #edecff;
        margin-bottom: 10px;
    }
</style>
