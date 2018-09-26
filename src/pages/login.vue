<template>
    <div class="indexBox">
      <img src="../assets/images/mengzanbgp.jpg" class="bgp" :class="{'showbgp':showContent}" />
      <!-- 注册页面 -->
      <div :class="{'showloginBox': RegPage}" class="loginBox" >
        <div class="loginHead">
          <p>亿</p>
          <p>橙</p>
        </div>
        <p class="loginTxt">账号注册</p>
        <input type="" name="" class="countInp" placeholder="请输入账号" />
        <input type="" name="" class="countInp" placeholder="请输入密码" />
        <div class="loginBtn" @click="loginTap">注册</div>
        <p class="toRegeit" @click="toLogin">已经有账号？去登录</p>
      </div>
      <!-- 登录页面 -->
      <div :class="{'showloginBox':showContent,'hideLogin': RegPage}" class="loginBox" >
        <div class="loginHead">
          <p>亿</p>
          <p>橙</p>
        </div>
        <p class="loginTxt">账号登录</p>
        <input type="" name="" class="countInp" placeholder="请输入账号" :value="loginCount" @input="loginCount = $event.target.value" autofocus="true" />
        <input type="" name="" class="countInp" type="password" placeholder="请输入密码" :value="loginPsd" @input="loginPsd = $event.target.value" @keydown="loginTap" />
        <div class="loginBtn" :class="{'canLogin':canLogin}" @click="loginBtnTap">登录</div>
        <p class="toRegeit" @click="toReg">还没有账号？去注册</p>
      </div>
      <Loading :load="logining"></Loading>
      <Tips :tipsTxt="tipsTxt" :isShow="showTips"></Tips>
    </div>
</template>

<script>
  import Loading from '../components/loading'
  import Tips from '../components/tips'
  export default {
  	components: {
      'Loading': Loading,
      'Tips': Tips
  	},
    data(){
      return {
        showContent: false,
        RegPage: false,
        loginCount: '',
        loginPsd: '',
        regCount: '',
        regPsd: '',
        logining: true,
        tipsTxt: '登录成功',
        showTips: false
      }
    },
    computed: {
      canLogin(){
        if(this.loginCount.length!==0 && this.loginPsd.length!==0){
          return true
        }else{
          return false
        }
      }
    },
    methods:{
      loginTap(e){
        if(e.keyCode === 13){
          if(this.loginCount == 'zan' && this.loginPsd == '123456'){
            this.logining = false
            setTimeout(()=>{
              this.$message('登录成功')
              this.logining = true
              this.$router.push('manage')
            },1000)
          }else{
            this.$message({
              type:'warning',
              message: '账号或密码错误'
            })
          }
        }
      },
      loginBtnTap(){
        if(this.loginCount == 'zan' && this.loginPsd == '123456'){
          this.logining = false
          setTimeout(()=>{
            this.$message('登录成功')
            this.logining = true
          },1000)
        }else{
          this.$message({
            type:'warning',
            message: '账号或密码错误'
          })
          this.loginCount = ''
          this.loginPsd = ''
        }
      },
      toReg(){
        this.RegPage = true
        console.log('asd')
      },
      toLogin(){
        this.RegPage = false
      }
    },
    mounted(){
      setTimeout(()=>{
        this.showContent = true
      },500)
    }
  }
</script>

<style lang="less">
  .indexBox{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .bgp{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -2;
      opacity: 0;
      transition: .3s;
    }
    .showbgp{
      opacity: 1;
    }
    .cover{
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(42,160,148,.6);
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .loginBox{
      width: 450px;
      height: 400px;
      position: absolute;
      top: 50%;
      margin-top: -15%;
      left: 50%;
      margin-left: -225px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0,0,0,.2);
      border-radius: 5px;
      margin-bottom: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: translateY(-100px) rotateY(90deg) scale(0.9);
      backface-visibility: hidden;
      opacity: 0;
      transition: .7s cubic-bezier(0,.8,.38,1.19);
      .loginHead{
        width: 200px;
        height: 70px;
        position: absolute;
        top: -35px;
        left: 125px;
        border-radius: 50px;
        background-color: #4A9EF6;
        box-shadow: 0 0 20px rgba(0,0,0,.4);
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        font-weight: 600;
        box-sizing: border-box;
        padding: 0 20px;
      }
      .loginTxt{
        font-size: 20px;
        color: #4A9EF6;
        margin-top: 40px;
      }
      .countInp{
        width: 350px;
        height: 40px;
        box-sizing: border-box;
        padding: 0 5px;
        border: none;
        margin: 15px 0;
        font-size: 17px;
        outline:none;
        background:transparent;
        border:none;
        outline:medium;
        border-bottom: 1px solid #A0A0A0;
        &:focus {
        }
      }
      .loginBtn{
        width: 350px;
        height: 60px;
        background: #E5E5E5;
        border-radius: 30px;
        color: #A0A0A0;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 20px rgba(74,158,246,.1);
        margin-top: 30px;
        cursor: pointer;
        transition: .6s;
        -moz-user-select: -moz-none;
         -khtml-user-select: none;
         -webkit-user-select: none;
        &:hover{
          transform: scale(1.02);
        }
      }
      .canLogin{
        background-color: #4A9EF6;
        color: #fff;
        box-shadow: 0 20px 20px -13px rgba(74,158,246,.5);
      }
      .toRegeit{
        font-size: 14px;
        color: #8D8D8D;
        margin-top: 20px;
        cursor: pointer;
        &:hover{
          color: #3895E8;
        }
      }
    }
    .showloginBox{
      opacity: 1;
      transform: translateY(0) rotateY(0) scale(1);
    }
    .hideLogin{
      opacity: 0;
      transform: translateY(0) rotateY(0) scale(0.5);
    }
    .showregPage{
      transform: rotateY(180deg);
      transition: 2s cubic-bezier(0,.8,.38,1.19);
    }
  }
	
</style>
