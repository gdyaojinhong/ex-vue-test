<template>
    <div class="nav">
      <div class="navTop-title">AkLS后台管理系统</div>
      <div class="user-info">
        <img src="../assets/images/user-info.png">
        <div class="info-username">
          <p>欢迎</p>
          <p>林小小</p>
        </div>
        <div class="info-icon">
          <i></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navTop',
  data () {
    return {
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
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #F5F5F5;
}
.nav{
  overflow: hidden;
}
.navTop-title{
  line-height: 60px;
  font-size: 22px;
  color: #ffffff;
  width: 250px;
  float: left;
}
.user-info{
  float: right;
  overflow: hidden;
  img{
    float: left;
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
  .info-username{
    float: left;
    color: #ffffff;
    margin: 12px 0 10px 10px;
    p{
      font-size: 12px;
    }
  }
  .info-icon{
    float: left;
  }
}
</style>
