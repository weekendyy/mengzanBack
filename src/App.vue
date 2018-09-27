<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.showBefore-1{
  transform: translate(50px);
  opacity: 0;
  transition: .3s;
}
.showBefore-2{
  transform: translate(50px);
  opacity: 0;
  transition: .3s .1s;
}
.showBefore-3{
  transform: translate(50px);
  opacity: 0;
  transition: .3s .2s;
}
.showDown{
  opacity: 1;
  transform: translate(0);
}
</style>
