<template>
  <div class="login">
  	<div class="main">
  		<el-form  ref="ruleForm2" class="demo-ruleForm" v-show="isLogin">
  			<h3 class="title">系统登录</h3>
			  <el-form-item prop="username">
			    <el-input type="text" v-model="userInfo.username" auto-complete="off" ></el-input>
			  </el-form-item>
			  <el-form-item prop="pass">
			    <el-input type="password" v-model="userInfo.passworld" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="getuser">登录</el-button>
			    <el-button @click="reset">注册</el-button>
			  </el-form-item>
			</el-form>

			<el-form  ref="ruleForm2" class="demo-ruleForm" v-show="!isLogin">
  			<h3 class="title">注册恒博</h3>
			  <el-form-item prop="username">
			    <el-input type="text" v-model="resetuserInfo.username" auto-complete="off" ></el-input>
			  </el-form-item>
			  <el-form-item prop="pass">
			    <el-input type="password" v-model="resetuserInfo.passworld" auto-complete="off"></el-input>
			  </el-form-item>
				<el-form-item prop="pass">
			    <el-input type="password" v-model="resetuserInfo.repassworld" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button @click="resetgetuser">登录</el-button>
			    <el-button type="primary" @click="resetzhce">注册</el-button>
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
			isLogin: true,
			userInfo:{
					username: 'admin',
					passworld: 123456
			},
			resetuserInfo:{
					username: 'admin',
					passworld: 123456,
					repassworld: 123456
			}
  	}
  },
  methods:{
  	getuser(){
			this.$http({
				method: 'post',
				url: '/api/login',
				data: {
					 username : this.userInfo.username,
					 passworld : this.userInfo.passworld
				}
			})
			.then((userInfos)=>{
        let userInfo = userInfos.data
				if(userInfo.type == 0){
					 localStorage['userInfo']=JSON.stringify(userInfo.userInfo);  // 储存用户信息
					 this.$router.push('/admin/table');  // 跳转
				}else{
					JQ(function(){
						alert(userInfo.mesages)
					})
					return;
				}
			})
			.catch((err)=>{
          console.log(err)
			})
		},
		resetzhce(){
			this.$http({
				method: 'post',
				url: '/api/zhce',
				data: {
					 username : this.resetuserInfo.username,
					 passworld : this.resetuserInfo.passworld,
					 repassworld : this.resetuserInfo.repassworld
				}
			})
			.then((userInfos)=>{
				let userInfo = userInfos.data
				if(userInfo.type == 0){
					localStorage['userInfo']=JSON.stringify({username:this.resetuserInfo.username,passworld : this.resetuserInfo.passworld});  // 储存用户信息
					JQ(function(){
						  alert(userInfo.mesages)
					})
					 this.$router.push('/admin/user');  // 跳转
				}else{
					JQ(function(){
						alert(userInfo.mesages)
					})
					return;
				}
			})
			.catch((err)=>{
          console.log(err)
			})
		},
		reset(){
			this.isLogin = false
		},
		resetgetuser(){
			this.isLogin = true
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
