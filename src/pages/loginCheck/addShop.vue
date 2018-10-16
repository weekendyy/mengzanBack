<template>
	<div class="addShop">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-row>
				<el-col :offset="6" :span="10">
				  <el-form-item label="店铺名称" prop="pass">
				    <el-input type="text" v-model="ruleForm2.pass" autocomplete="off"></el-input>
				  </el-form-item>
				</el-col>
			</el-row>

			<el-row>
				<el-col :offset="6" :span="10">
				  <el-form-item label="手机号码" prop="age">
				    <el-input v-model.number="ruleForm2.age"></el-input>
				  </el-form-item>
				</el-col>
			</el-row>
		  <el-form-item>
		    <el-button type="primary" class="subBtn" @click="submitForm('ruleForm2')">提交</el-button>
		  </el-form-item>
		</el-form>
  </div>
</template>

<script>
    export default {
    	data(){
    		var checkAge = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('手机号不能为空'));
	        }
	        setTimeout(() => {
	          if (!Number.isInteger(value)) {
	            callback(new Error('请输入数字值'));
	          } else {
	            if (value.toString().length != 11) {
	            	console.log(value.toString().length)
	              callback(new Error('手机号格式错误'));
	            } else {
	              callback();
	            }
	          }
	        }, 500);
	      };
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入店铺名称'));
	        } else {
	          callback();
	        }
	      };
	      return {
	      	showContent: false,
	        ruleForm2: {
	          pass: '',
	          age: ''
	        },
	        rules2: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          age: [
	            { validator: checkAge, trigger: 'blur' }
	          ]
	        }
	      }
    	},
			computed: {
				
			},
			methods: {
	      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          })
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
	.addShop{
		margin-top: 150px;
		.subBtn{
			margin-left: -150px;
		}
	}
</style>
