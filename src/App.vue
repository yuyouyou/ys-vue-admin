<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
    padding: 0 0;
    margin: 0 0;
}
#app {
  position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
}
</style>
