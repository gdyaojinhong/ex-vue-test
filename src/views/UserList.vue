<template>
  <div class="userList">
    <div class="userList-title">用户列表</div>
    <div>
      <div class="userList-btn">
        <el-button type="primary" @click="dialogVisible = true" style="float: right">添加用户</el-button>
      </div>

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

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <el-form :model="addForm" status-icon :rules="rules" ref="addForm" label-width="90px" class="demo-ruleForm" >
        <el-form-item label="用户名：" prop="userName">
          <el-input type="text" v-model="addForm.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="passWord">
          <el-input type="text" v-model="addForm.passWord" auto-complete="off"></el-input>
        </el-form-item>

        </el-form>
        </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="amendDialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <el-form :model="amendForm" status-icon :rules="rules" ref="amendForm" label-width="90px" class="demo-ruleForm" >
        <el-form-item label="用户名：" prop="userName">
          <el-input type="text" v-model="amendForm.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="passWord">
          <el-input type="text" v-model="amendForm.passWord" auto-complete="off"></el-input>
        </el-form-item>

        </el-form>
        </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="amendDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="amendFormConfirm()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: '',
      currentPage: 1,
      dialogVisible: false,
      amendDialogVisible: false,
      addForm: {
        userName: '',
        passWord: ''
      },
      amendForm: {
        userName: '',
        passWord: ''
      },
      oldRow:'',
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2,max: 8,message: '长度在2到8个字符', trigger: 'blur'}
        ],
        passWord: [
           {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  mounted () {
    this.getDatas();
    this.inClear();
  },
  methods: {
      inClear(){
        //至空弹框input数据
        this.$set(this.addForm, 'userName', '')
        this.$set(this.addForm, 'passWord', '')

        this.$set(this.amendForm, 'userName', '')
        this.$set(this.amendForm, 'passWord', '')
      },
      getDatas(sting,val){
        var params= "";
        if (!sting) {
          params = {'pageNum':1,'pageSize':10}
        }else{
          if (sting == 'pageNum') {
            params = {'pageNum':val,'pageSize':10}
          }
          if (sting == 'pageSize') {
            params = {'pageNum':1,'pageSize':val}
          }
        }


        this.$http({
          method:'get',
          url:'/api/user/userlist',
          params:params
        }).then((res)=>{
          console.log(res);
          let data = res.data;
          if (data.status==1) {
            this.tableData = data;
          }

        })
      },
      handleSizeChange(val) {
        let paramsSting = 'pageSize';
        this.getDatas(paramsSting,val)
      },
      handleCurrentChange(val) {
        let paramsSting = 'pageNum';
        this.getDatas(paramsSting,val)

      },
      handleEdit(index, row) {
        let this_ = this;
        this_.oldRow = row;
        this_.$set(this_.amendForm,'userName',row.userName)
        this_.$set(this_.amendForm,'passWord',row.passWord)
        this_.amendDialogVisible = true;
      },
      handleDelete(index, row) {
        let that = this;
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
        let that = this;
        if (row.userName) {
          that.$http({
            mounted:'post',
            url : "/api/user/delUser",
            params : {
              'userName' : row.userName
            }
          }).then((res)=>{
            let data = res.data;
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
      addUser () {
        this.dialogVisible = true;
        this.inClear();
      },
      handleClose(done) {
            done();
      },
      confirm(){

        let that = this;
        if (!that.addForm.userName||!that.addForm.passWord) {
          return false;
        };
        that.$http({
          mounted: 'get',
          url: '/api/user/addUser',
          params : {
            'userName': that.addForm.userName,
            'passWord': that.addForm.passWord
          }
        }).then((res) => {
          let data =res.data;
          if (data.status != 1) {
            return false;
          }
          that.dialogVisible = false;
           that.$message({
              type: 'success',
              message: '添加用户成功',
              onClose:function(){
                that.getDatas(); //刷新列表
                that.inClear();
              }
            });

        })
      },
      amendFormConfirm(){
        let this_ = this;
        if (!this_.amendForm.userName||!this_.amendForm.passWord) {
          return false;
        };
        this_.$http({
          mounted: 'get',
          url: '/api/user/updateUser',
          params : {
            'oldUserName' : this_.oldRow.userName,
            'userName': this_.amendForm.userName,
            'passWord': this_.amendForm.passWord
          }
        }).then((res) => {
          let data =res.data;
          if (data.status != 1) {
            return false;
          }
          this_.amendDialogVisible = false;
           this_.$message({
              type: 'success',
              message: '修改用户成功',
              onClose:function(){
                this_.getDatas(); //刷新列表
                this_.inClear();
              }
            });

        })
      }
  }
}
</script>

<style lang="less" scoped>
.userList{
  margin-bottom: 60px;
  padding: 20px;
}
.userlist-table{
  border-width: 1px 1px 0 1px;
  border-color: #ececec;
  border-style: solid;
}
.userList-title{
  font-size: 26px;
  margin-bottom: 30px;
  color: #999999;
}
.userList-btn{
  margin-right: 25px;
  display: block;
  margin-bottom: 15px;
  overflow: hidden;
}
.input-userName{
  width: 20%;
  text-align: right;
  display: inline-block;
  float: left;
}
.input-passWord{
  width: 20%;
  text-align: right;
  display: inline-block;
  float: left;
}
</style>
