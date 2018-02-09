<template>
  <div>
    文章列表
    {{tableData.data}}
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    var  params = {'pageNum':1,'pageSize':10}
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
  methods: {

  }
}
</script>

<style lang="less" scoped>
.el-main{
  margin-left: 200px;
}
</style>
