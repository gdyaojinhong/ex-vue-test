<template>
  <div>
    <bread-crumb :tab="tab"></bread-crumb>
    <div class="Details">
      <div class="Details-title">{{datails.title}}</div>
      <div class="Details-text">作者：{{datails.author}}  |  时间：{{datails.publishDate | dateFormat('YYYY-MM-DD HH:mm:ss')}}</div>
      <div class="Details-abstracts">{{datails.abstracts}}</div>
      <div class="Details-content" v-html="datails.content"></div>
    </div>
  </div>

</template>

<script>
import BreadCrumb from "@/components/Breadcrumb"
export default {
  data () {
    return {
      datails:"",
      tab:[{name:'首页',pathName:'home',path:'../home'},
            {name:'文章列表',pathName:'articlelist',path:'./articlelist'},
            {name:'文章详情',pathName:'articleldetail',path:'./articleldetail'}
        ]
    }
  },
  components: {
    BreadCrumb
  },
  computed: {
  },
  beforeCreate () {

  },
  beforeMount () {
  },
  mounted () {
    console.log(this.$route.query)
    this.datails = this.$route.query.row;
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.Details{
  padding: 30px;
}
.Details-title{
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
}
.Details-text{
  text-align: center;
  font-size: 12px;
  color: #666666;
  margin-bottom: 15px;
}
.Details-abstracts{
  padding: 10px;
  border: 1px dashed #999999;
  color: #999999;
  margin-bottom: 15px;
}
.Details-content{
  font-size: 16px;
}
</style>
