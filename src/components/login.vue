<template>
  <div class="login">
  	<div class="main">
  		<el-form  ref="ruleForm2" class="demo-ruleForm">
  			<h3 class="title">系统登录</h3>
			  <el-form-item prop="username">
			    <el-input type="text" v-model="userInfo.username" auto-complete="off" ></el-input>
			  </el-form-item>
			  <el-form-item prop="pass">
			    <el-input type="password" v-model="userInfo.passworld" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="getuser">提交</el-button>
			    <el-button @click="reset">重置</el-button>
			  </el-form-item>
			</el-form>
  	</div>
    
  </div>
</template>

<script>
import JQ from 'jquery'
export default {
  data(){
  	return{
			userInfo:{
					username: 'admin',
					passworld: 123456
			}
  	}
  },
  methods:{
  	getuser(){
			
			this.$http({
				method: 'get',
				url: '/api/login',
				data: this.userInfo
			})
			.then((userInfo)=>{
				//console.log(userInfo.data)
				if(this.userInfo.username == userInfo.data.username & this.userInfo.passworld == userInfo.data.passworld){
           this.$router.push('/table');
				}else{
					JQ(function(){
						alert('账号或密码错误！')
					})
					return;
				}
			})
			.catch((err)=>{
          console.log(err)
			})

  	//	this.$router.push('/table')
		},
		reset(){
			this.userInfo.username = ''
			this.userInfo.passworld = ''
		}
  }
}
</script>

<
<style scoped>
.login{
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.login .main{
	width: 430px;
	height: 350px;
	border:1px solid #ccc;
	box-shadow: 0 0 25px #cac6c6;
	padding: 36px;
	box-sizing: border-box;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
