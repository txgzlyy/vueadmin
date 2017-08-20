<template>
  <div class="table">
    <el-table
	    ref="multipleTable"
	    v-loading.body="loading"
	    :data="tableData3"
	    border
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      type="selection"
	      width="55">
	    </el-table-column>
	    <el-table-column
	      label="日期"
	      width="120">
	      <template scope="scope">{{ scope.row.date }}</template>
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column label="操作">
	      <template scope="scope">
	        <el-button
	          size="small"
	          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	        <el-button
	          size="small"
	          type="danger"
	          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  <div style="margin-top: 20px">
	    
	    <el-button @click="delect()">批量删除</el-button>
	  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
      	loading: true,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    mounted(){
    	setTimeout(()=>{
    		this.loading = false
    	},2000)
    },
    methods: {
    	handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      delect(){
      	
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<
<style scoped>

</style>
