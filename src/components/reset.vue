<template>
  <div class="reset">
			
    <el-form ref="form" :model="form" label-width="80px" class="main">
			<h3 class="title">填写注册</h3>
		  <el-form-item label="姓名">
		    <el-input v-model="form.name" placeholder="请输入你的姓名"></el-input>
		  </el-form-item>
			<el-form-item label="电话">
		    <el-input v-model="form.name" placeholder="请输入你的电话号码"></el-input>
		  </el-form-item>
			<el-form-item label="微信">
		    <el-input v-model="form.name" placeholder="请输入你的微信号"></el-input>
		  </el-form-item>
			<el-form-item label="QQ">
		    <el-input v-model="form.name" placeholder="请输入你的QQ号"></el-input>
		  </el-form-item>
			<el-form-item label="性别">
		    <el-radio-group v-model="form.resource">
		      <el-radio label="男"></el-radio>
		      <el-radio label="女"></el-radio>
		    </el-radio-group>
		  </el-form-item>
			<el-form-item label="未婚">
		    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
		  </el-form-item>
		  <el-form-item label="体检项目">
		    <el-select v-model="form.region" placeholder="请选择体检的项目">
		      <el-option label="全身体检" value="shanghai"></el-option>
		      <el-option label="内科体检" value="beijing"></el-option>
					<el-option label="神经体检" value="beijing"></el-option>
					<el-option label="妇科体检" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="到院日期">
		    <el-col :span="11">
		      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
		    </el-col>
		  </el-form-item>
		  
		  <el-form-item label="身体状况">
		    <el-input type="textarea" v-model="form.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">注册</el-button>
		    <el-button @click="onlogin">登录</el-button>
		  </el-form-item>
		</el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
			onlogin(){
				this.$router.push('/login')
			}
    }
}
</script>

<
<style scoped>
	.title {
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
	.reset{
		height:100%;
		width: 100%;
		display: flex;
	  align-items: center;
	  justify-content: space-around;
	}
  .reset .main{
		width:600px;
		height:700px;
	}
</style>
