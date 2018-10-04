<template>
	<div class="addShop">
		<iframe align="center" width="100%" height="100%" src="https://open.youzan.com/oauth/authorize?client_id=2af3d39ac0268a7c52&response_type=code&state=teststate&redirect_uri=http://yz.kuaidizs.com/jump.jsp"  frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
  </div>
</template>

<script>
    export default {
    	data(){
	      return {
	      	showContent: false,
	      }
    	},
			computed: {
				
			},
			methods: {
	     
	    },
	    mounted(){
	      setTimeout(()=>{
	        this.showContent = true
	      },100)
	    }
    }
</script>

<style lang="less" scoped>
	.addShop{
		width: 100%;
		height: 100%;
	}
</style>
