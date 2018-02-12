<template>
  <div class="articesList">
    <div class="articesList-title"><h3>文章列表</h3></div>
      <el-table
        :data="tableData.data"
        stripe
        class="articesList-table">
        <el-table-column
          type="index"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="title"
          label="文章标题"
          width="360"
          header-align="conter"
          >
           <template slot-scope="scope">
               <span class="articesList-titleLink" @click="showFundArticle(scope.row)">{{scope.row.title}}</span>
           </template> 
        </el-table-column>
        <el-table-column
           width="180"
          label="发布时间">
          <template slot-scope="scope">
            <span>
              {{scope.row.publishDate | dateFormat('YYYY-MM-DD HH:mm:ss') }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
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
        class="articesList-pagination"
        >
      </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      tableData:""
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
        url:'/api/artices/articesList',
        params:params
      }).then((res)=>{
        console.log(res);
        let data = res.data;
        if (data.status==1) {
          this.tableData = data;
        }

      })
    },
    showFundArticle(row) {
      console.log(row)
      this.$router.push({path:'./articleldetail',query:{'row':row}})
    },
    handleSizeChange(val) {
      let paramsSting = 'pageSize';
      this.getDatas(paramsSting,val)
    },
    handleCurrentChange(val) {
      let paramsSting = 'pageNum';
      this.getDatas(paramsSting,val)

    },
    handleDelete(index, row){
      console.log(row)
        console.log("删除")
        let that = this;
        if (row.title) {
          that.$http({
            mounted:'get',
            url : "/api/artices/delArtices",
            params : {
              'title' : row.title
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
    }
  }
}
</script>

<style lang="less" scoped>
.el-main{
  margin-left: 200px;
}
.articesList{
  padding: 20px;
}
.articesList-table{
  border-width: 1px 1px 0 1px;
  border-color: #ececec;
  border-style: solid;
}
.articesList-title{
  font-size: 26px;
  margin-bottom: 30px;
  color: #999999;
}
.articesList-btn{
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
.articesList-titleLink{
  cursor: pointer;
  text-decoration: underline;
}
</style>
