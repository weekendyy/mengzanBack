<template>
    <div class="indexBox">
      <img src="../assets/images/loginbgp2.png" class="loginBgp">
      <div class="loginBox">
        <!-- 线条 -->
        <div class="lineTop" :class="{'showlineTop': showContent}"></div>
        <div class="lineRight" :class="{'showlineRight': showContent}"></div>
        <div class="lineBtm" :class="{'showlineBtm': showContent}"></div>
        <div class="lineLeft" :class="{'showlineLeft': showContent}"></div>
        <!-- 登录盒子 -->
        <div class="loginContent" :class="{'showLoginCon': showContent}">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
              <el-input type="text" v-model="ruleForm2.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model.number="ruleForm2.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="medium" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 右下角 -->
      </div>
      <div class="contact">
        <p class="zanName">MENGZAN</p>
        <p class="zanDesc">萌赞出品</p>
      </div>
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
      var checkPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }else{
          callback()
        }
        
      };
      var validateAcc = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          account: '',
          age: ''
        },
        rules2: {
          account: [
            { validator: validateAcc, trigger: 'blur' }
          ],
          password: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        },
        showContent: false,
        logining: true
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('shoplist')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      loginTap(e){
        if(e.keyCode === 13){  //键盘enter登录
          if(this.loginCount == 'zan' && this.loginPsd == '123456'){
            this.logining = false
            setTimeout(()=>{
              this.$message('登录成功')
              this.logining = true
              this.$router.push('shoplist')
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
        this.func.ajaxPost(this.api.login, {user_name: '987',password: '123456'}, res => {
          console.log(res)
        })
        return false
        if(this.loginCount == 'zan' && this.loginPsd == '123456'){
          console.log(this.api.userLogin)
          this.logining = false
          setTimeout(()=>{
            this.$message('登录成功')
            this.$router.push('shoplist')
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
    background: radial-gradient(rgba(38,38,38,.8),#1E1E1E);
    .loginBgp{
      width: 5%;
      position: absolute;
      top: 10%;
      left: 30px;
    }
    .loginBox{
      width: 900px;
      height: 550px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .lineTop{
        width: 1px;
        height: 2px;
        background-color: #fff;
        transition: .4s linear;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: left;
        opacity: 0;
      }
      .showlineTop{
        transform: scaleX(900);
        opacity: 1;
      }
      .lineRight{
        width: 2px;
        height: 1px;
        background-color: #fff;
        transition: .3s linear .3s;
        position: absolute;
        right: 0;
        top: 0;
        transform-origin: top;
        opacity: 0;
      }
      .showlineRight{
        transform: scaleY(130);
        opacity: 1;
      }
      .lineBtm{
        width: 1px;
        height: 2px;
        background-color: #fff;
        transition: .4s linear;
        position: absolute;
        bottom: 0;
        right: 0;
        transform-origin: right;
        opacity: 0;
      }
      .showlineBtm{
        transform: scaleX(900);
        opacity: 1;
      }
      .lineLeft{
        width: 2px;
        height: 1px;
        background-color: #fff;
        transition: .3s linear .3s;
        position: absolute;
        bottom: 0;
        left: 0;
        transform-origin: bottom;
        opacity: 0;
      }
      .showlineLeft{
        transform: scaleY(130);
        opacity: 1;
      }
      .loginContent{
        width: 500px;
        height: 300px;
        background-color: #484848;
        opacity: 0;
        transition: .4s .6s;
        transform: scale(.98) translateY(10px);
        padding-top: 22px;
        box-sizing: border-box;
        .demo-ruleForm{
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          .el-form-item__content{
            box-sizing: border-box;
            padding-right: 50px;
          }
        }
      }
      .showLoginCon{
        opacity: 1;
        background-color: #fff;
        box-shadow: 0 0 6px rgba(255,255,255,.3);
        border-radius: 5px;
        transform: scale(1) translateY(0);
      }
    }
    .contact{
      width: 150px;
      height: 100px;
      position: absolute;
      right: 20px;
      bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .zanName{
        font-size: 20px;
        color: #fff;
        text-shadow: 0 0 5px rgba(0,0,0,1);
      }
      .zanDesc{
        font-size: 13px;
        color: #fff;
        margin-top: 5px;
        text-shadow: 0 0 5px rgba(0,0,0,1);
      }
    }
    
  }
	
</style>
