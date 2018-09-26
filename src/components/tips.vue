<template>
  <div class="tips">
    <p class="tipsTxt" :class="{'showTips':isShow}">{{tipsTxt}}</p>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    
  },
  props: {
    tipsTxt: String
  }
}
</script>

<style scoped lang="less">
  .tips{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 100;
    .tipsTxt{
      padding: 10px 20px;
      border-radius: 4px;
      background-color: #4A9EF6;
      color: #fff;
      font-weight: 500;
      font-size: 20px;
      box-shadow: 0 20px 20px -15px rgba(0,0,0,.4);
      pointer-events: none;
      opacity: 0;
      transition: .4s;
      transform: translateY(-20px);
    }
    .showTips{
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
