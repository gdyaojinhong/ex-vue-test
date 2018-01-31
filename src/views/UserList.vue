<template>
  <div id="">
    <div class="userList-title">用户列表</div>
    <div>
    <div class="userList-btn">
      <el-button type="primary" @click="addUser()" style="float: right">添加用户</el-button>
    </div>
    <div></div>
    <el-table
      :data="tableData.data"
      stripe
      class="userlist-table">
      <el-table-column
        type="index"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="passWord"
        label="密码">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 30, 50]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.count"
      class="userlist-pagination"
      >
    </el-pagination>
    </div>
  </div>
</template>

<script> 
export default {
  data () {
    return {
      tableData: '',
      currentPage: 1
    }
  },
  components: {
  },
  computed: {
  },
  beforeCreate () {

  },
  beforeMount () {
  },
  mounted () {
    this.getDatas();
  },
  methods: {
      getDatas(){
        this.$http({
          method:'get',
          url:'/api/user/userlist',
          params:{'pageNum':1,'pageSize':10}
        }).then((res)=>{
          console.log(res);
          var data = res.data;
          if (data.status==1) {
            this.tableData = data;
          }

        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        console.log(index, row);
        console.log("编辑")
      },
      handleDelete(index, row) {
        var that = this;
        console.log(row);
        this.$confirm('确定要删除这条数据吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          that.delUserData(index, row);
        })
      },
      delUserData(index, row){
        var that = this;
        if (row.userName) {
          that.$http({
            mounted:'post',
            url : "/api/user/delUser",
            params : {
              'userName' : row.userName
            }
          }).then((res)=>{
            var data = res.data;
            this.$message({
              type: 'success',
              message: '删除成功',
              onClose:function(){
                that.getDatas();  
              }
            });

          })
        }
      },
      addUser(){
        console.log("添加")

      }

  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #F5F5F5;
}
.userlist-table{
  border-width: 1px 1px 0 1px;
  border-color: #ececec;
  border-style: solid;
  width: 80%;
}
.userList-title{
  font-size: 26px;
  margin-bottom: 30px;
}
.userlist-pagination{
    // width: 80%;
    // border-width: 0 1px 1px 1px;
    // border-style: solid;
}
.userList-btn{
  margin-right: 25px;
  display: block;
  margin-bottom: 15px;
  overflow: hidden;
  width: 80%;
}
</style>
