<template>
	<div class="shopListBox">
		<el-row>
		  <el-col type="flex" :offset="9" :span="6" class="showBefore-1" :class="{'showDown':showContent}"><div class="shoplistTitle">店铺列表</div></el-col>

		  <el-col type="flex" :offset="6" :span="12" :key="index" v-for="(item, index) in shoplist" class="showBefore-2" :class="{'showDown':showContent}">
		  	<div class="shopItem">
		  		<el-row class="itemTop">
		  			<el-col :offset="9" :span="6"><p class="itemTitle">页的第七张</p></el-col>
		  		</el-row>
		  		<el-row class="itemcenter">
		  			<el-col :span="15">
		  				<p class="bindWX">绑定微信：weekendyy</p>
		  			</el-col>
		  			<el-col :offset="6" :span="3">
		  				<p class="setting" @click="toAddShop">设置</p>
		  			</el-col>
		  		</el-row>
		  		<el-row class="itemBottom">
		  			<el-col :offset="10" :span="4"><p class="setBtn" @click="toAuth">萌赞授权</p></el-col>
		  		</el-row>
		  		<el-row class="itemBottom">
		  			<el-col :offset="10" :span="4"><p class="setBtn" @click="toShopDetail">进入店铺</p></el-col>
		  		</el-row>
		  	</div>
		  </el-col>
		  <el-col type="flex" :offset="11" :span="2" class="showBefore-3" :class="{'showDown':showContent}"><div class="addShop" @click="toAddShop">添加店铺</div></el-col>
		</el-row>
  </div>
</template>

<script>
    export default {
    	data(){
    		return {
    			showContent: false,
    			shoplist:[1,1]
    		}
    	},
			computed: {
				
			},
			methods: {
	      toShopDetail(){
	      	this.$router.push('manage')
	      },
	      toAddShop(){
	      	this.$router.push('addShop')
	      	console.log("Asdasda")
	      },
	      toAuth(){
	      	this.$router.push('zanAuth')
	      }
	    },
	    mounted(){
	      setTimeout(()=>{
	        this.showContent = true
	      },100)
	    }
    }
</script>

<style lang="less" scoped>
	.shopListBox{
		.shoplistTitle{
			color: #6B86A4;
			font-size: 35px;
			font-weight: 600;
			line-height: 50px;
			margin-top: 90px;
			border-radius: 6px;
			margin-bottom: 40px;
		}
		.shopItem{
			margin-bottom: 30px;
			border: 1px solid #6B86A4;
			border-radius: 7px;
			height: 140px;
			cursor: pointer;
			transition: .2s;
			&:hover{
				box-shadow: 0 10px 30px -3px rgba(107,134,164,.2);
			}
			.itemTop{
				margin-top: 13px;
				margin-bottom: 10px;
				color: #253D55;
				font-weight: 600;
				font-size: 18px;
			}
			.itemcenter{
				.bindWX{
					text-align: left;
					margin-left: 20px;
				}
				.setting{
					cursor: pointer;
					&:hover{
						color: #FF6E5B;
					}
				}
			}
			.itemBottom{

				.setBtn{
					background-color: #fff;
					padding: 6px;
					border-radius: 5px;
					color: #fff;
					cursor: pointer;
					margin-top: 20px;
					color: #6B86A4;
					border: 1px solid #6B86A4;
					line-height: 18px;
					transition: .2s;
					&:hover{
						color: #fff;
						background-color: #6B86A4;
						box-shadow: 0 0 20px rgba(0,0,0,.3);
					}
				}
			}
		}
		.addShop{
			background-color: #6B86A4;
			line-height: 34px;
			font-size: 18px;
			color: #fff;
			border-radius: 4px;
			cursor: pointer;
			transition: .2s;
			box-shadow: 0 0 20px rgba(0,0,0,.1);
			margin-top: 50px;
			&:hover{
				background-color: #8195AF;
			}
		}
	}
</style>
