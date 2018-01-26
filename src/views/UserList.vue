<template>
  <div id="">
    <div class="userList-title">用户列表</div>
    <div>
    <el-table
      :data="tableData"
      stripe
      class="userlist-table">
      <el-table-column
        prop="id"
        label="id"
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
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: ''
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
    this.$http({
      method:'get',
      url:'/api/user/userlist',
      params:{'pageNum':1,'pageSize':10}
    }).then((res)=>{
      console.log(res);
      var data = res.data;
      if (data.status==1) {
        this.tableData = data.data;
      }

    })
  },
  methods: {

  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
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
</style>
