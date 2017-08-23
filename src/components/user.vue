<template>
  <div class="user">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">{{userCout.username}}</span>
        <el-button style="float: right;" type="primary" @click="href">操作按钮</el-button>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return{
      userCout:{
        username: 'sdkjhf'
      }
    }
  },
  methods:{
    href(){
      this.$router.push('/admin/reset')
    }
  }
}
</script>


<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,.clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 100%;
  }
</style>
