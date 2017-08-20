<template>
  <div>
     <el-row>
		  <el-col :span="4"><div class="grid-content bg-purple-dark left">
		  	VUE-ADMIN
		  </div></el-col>
		  <el-col :span="18"><div class="grid-content bg-purple-dark"></div></el-col>
		  <el-col :span="2" class="grid-content bg-purple-dark">
					<el-dropdown>
					  <span class="el-dropdown-link username">
					       Admin<img src='' />
					  </span>
					  <el-dropdown-menu slot="dropdown" class="userset" :router="true">
					    <el-dropdown-item>我的消息</el-dropdown-item>
					    <el-dropdown-item>设置</el-dropdown-item>
					    <el-dropdown-item>退出登录</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</el-col>
		</el-row>
		<el-row>
    	<el-col :span="4">
    		<div class="leftNav">
			    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
			      <el-submenu index="1">
			        <template slot="title"><i class="el-icon-message"></i>导航一</template>
			        <el-menu-item-group>
			          <el-menu-item index="/table">Table</el-menu-item>
			          <el-menu-item index="/form" >Form</el-menu-item>
			          <el-menu-item index="/list">列表</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
			      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
			    </el-menu>
		    </div>
		  </el-col>
      <el-col :span='20'>
      	<el-breadcrumb separator="/" class="position">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/table' }">活动管理</el-breadcrumb-item>
				  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
				</el-breadcrumb>
      	<div class="main">
      		<router-view></router-view>
      	</div>
    	</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    methods:{
			outLogin(){
				//this.$router.push('/login')
				console.log('123')
			}
		}
}
</script>

<
<style scoped>
.bg-purple-dark {
    background: #20A0FF;
  }
  .grid-content {
    min-height: 70px;
  }
  .left{
  	height: 100%;
  	border-right: 1px solid hsla(62,77%,76%,.3);
  }
  .left{
  	text-align: center;
  	font: 26px/70px "微软雅黑";
  	color: #fff;
  }
  .main{
  	padding: 20px;
  }
  .username{
  	font: 26px/70px "微软雅黑";
  	color: #fff;
  }
  .userset,.leftNav{
  	font-family: "microsoft yahei";
  }
  .position{
  	margin: 20px 0 0 20px;
  	font: 16px/40px "微软雅黑" !important;
  }
</style>
