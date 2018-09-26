<template>
	<div class="manageBox">
		<el-row class="contentBox">
			<el-col :span="3" class="leftNav">
				<div class="logoBox">
					<img src="../assets/logo.png" class="logoIcon">
					<p>亿橙</p>
				</div>
				<div class="userInfo">
					<img src="../assets/images/renxiang.jpg" class="userPic">
					<div class="righBox">
						<p class="heyTxt">Welcome</p>
						<p class="userName">蔡伟乾</p>
					</div>
				</div>
		    <el-menu
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose"
		      background-color="#253D55"
		      text-color="#fff"
		      :default-active="defaultActive"
		      active-text-color="#ffd04b" router>
		      <el-submenu index="1">
		        <template slot="title" class="asd">
		          <i class="el-icon-star-on" style="color: #fff"></i>
		          <span>导航一</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="home">选项1</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title">
		          <i class="el-icon-star-on" style="color: #fff"></i>
		          <span>导航二</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="1-1">选项1</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title">
		          <i class="el-icon-star-on" style="color: #fff"></i>
		          <span>导航二</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="1-1">选项1</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		    </el-menu>
		  </el-col>
		  <el-col :span="21" style="height: 100%;overflow: auto;">
		  	<keep-alive>
		  	    <router-view></router-view>
		  	</keep-alive>
		  </el-col>
	  </el-row>
  </div>
</template>

<script>
    export default {
    	data(){
    		return {
    		}
    	},
			computed: {
				defaultActive: function(){
					return this.$route.path.replace('/', '');
				}
			},
			methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
    }
</script>

<style lang="less" scoped>
	.manageBox{
		height: 100%;
		color: #fff;
		.contentBox{
			height: 100%;
		}
		.leftNav{
			height: 100%;
			background-color: #253D55;
			min-width: 150px;
			box-shadow: 0 0 20px rgba(0,0,0,.3);
			.el-menu{
				border-right: none;
			}
			.logoBox{
				width: 100%;
				height: 80px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				-moz-user-select: -moz-none;
         -khtml-user-select: none;
         -webkit-user-select: none;
         background: #2E4B64;
				.logoIcon{
					width: 30px;
					height: 30px;
					margin-right: 10px;
				}
				p{
					font-size: 22px;
					color: #fff;
					font-weight: 600;
				}
			}
			.userInfo{
				width: 100%;
				height: 80px;
				display:-webkit-box;
		    display: -moz-box;
		    display: -ms-flexbox;
		    display: -webkit-flex;
		    display: flex;
		    align-items:center;
		    -webkit-align-items:center;
		    box-align:center;
		    -moz-box-align:center;
		    -webkit-box-align:center;
				align-content: center;
				justify-content: center;
				cursor: pointer;
				transition: .3s;
				background: #12293E;
				margin-bottom: 20px;
         &:hover{
         	transform: scale(1);
         	box-shadow: 0px 0px 10px rgba(251,253,252,.1);
         	background: #173650;
         }
				.userPic{
					width: 45px;
					height: 45px;
					border-radius: 100%;
					border: 3px solid #fff;
				}
				.righBox{
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 15px;
					.heyTxt{
						font-size: 14px;
					}
					.userName{
						font-size: 17px;
						margin-top: 4px;
						font-weight: 600;
					}
				}
			}
		}
	}
</style>
