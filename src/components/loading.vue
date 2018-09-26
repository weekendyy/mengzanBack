<template>
  <div class="loadingContentBox">
    <div class="loadingBoxNew" :class="{'hideLoading':load}">
      <div :class="{'rightBall1':loaded}"></div>
      <div :class="{'rightBall2':loaded}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      
    }
  },
  computed: {
    loaded(){
      if(this.load){
        return false
      }else{
        return true
      }
    }
  },
  props: {
    load: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .loadingContentBox{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .loadingBoxNew{
    width: 750px;
    height: 750px;
    position: relative;
    margin-bottom: 100px;
    .rightBall1{
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background-color: #0FB5FD;
      position: absolute;
      top: 330px;
      left: 362px;
      animation: rightBallmove 1s cubic-bezier(.1,.38,.54,.89) infinite;
    }
    @keyframes rightBallmove{
      0%{
        transform: translateX(-20px) scale(.8);
        opacity: .2;
      }
      50%{
        transform: translateX(0px) scale(1.4);
        opacity: 1;
      }
      100%{
        transform: translateX(20px) scale(.8);
        opacity: .2;
      }
    }
    .rightBall2{
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background-color: #F34A78;
      position: absolute;
      top: 330px;
      left: 362px;
      animation: rightBallmoveT 1s cubic-bezier(.1,.38,.54,.89) infinite;
    }
    @keyframes rightBallmoveT{
      0%{
        transform: translateX(20px) scale(.8);
        opacity: .2;
      }
      50%{
        transform: translateX(0px) scale(.4);
        opacity: 1;
      }
      100%{
        transform: translateX(-20px) scale(.8);
        opacity: .2;
      }
    }
  }
  .hideLoading{
    opacity: 0;
    transition: .5s;
    pointer-events: none;
  }
</style>
