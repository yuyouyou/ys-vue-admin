<template>
  <div class="comp-box">
    <comp-header :count="count"></comp-header>
    <div class="clearfix">
      <div class="fl side-box">
        <comp-side @add="updateCount" @reset="resetCount"></comp-side>
      </div>
      <div class="fl body-box">
        <comp-body :count="count" @change="handleChange"></comp-body>
      </div>
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import compHeader from './compHeader'
import compFooter from './compFooter'
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
    compHeader,
    compFooter,
    compBody,
    compSide
  }
}
</script>
<style lang="less">
  .comp-box {
  }
  .side-box {
    width: 30%;
  }
  .body-box {
    width: 70%;
  }
</style>
