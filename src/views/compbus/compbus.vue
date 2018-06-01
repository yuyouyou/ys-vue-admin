<template>
  <div class="comp-box">
    <div class="clearfix">
      <div class="fl side-box">
        <comp-side :count="count" @change="handleChange"></comp-side>
      </div>
      <div class="fl body-box">
        <comp-body @add="updateCount" @reset="resetCount"></comp-body>
      </div>
    </div>
  </div>
</template>

<script>
import compBody from './compBody'
import compSide from './compSide'

export default {
  name: 'Comp',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    updateCount() {
      this.count ++;
    },
    resetCount() {
      this.count = 0;
    },
    handleChange(val) {
      this.count = val;
    }
  },
  components: {
    compBody,
    compSide
  }
}
</script>
<style lang="less">
  .side-box {
    width: 30%;
  }
  .body-box {
    width: 70%;
  }
</style>
