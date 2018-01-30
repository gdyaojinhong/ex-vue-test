<template>
    <div class="nav">
      <div class="navTop-title">AkLS后台管理系统</div>
      <div class="user-info">
        <img src="../assets/images/user-info.png">
        <div class="info-username">
          <p>欢迎</p>
          <p>林小小</p>
        </div>
        <div class="info-select">
          <el-dropdown trigger="click" @command="chiceType">
            <span class="el-dropdown-link">
             <i class="el-icon-caret-bottom el-icon-right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:120px;text-align: center;">
              <el-dropdown-item command="amendManegs">修改信息</el-dropdown-item>
              <el-dropdown-item command="amendPass" divided>修改密码</el-dropdown-item>
              <el-dropdown-item command="quit" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="info-icon">
          <img src="../assets/images/incon-quit.png" @click="quit">
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
    quit (){
      console.log("退出")
      this.$router.push({path:"../login"})
    },
    chiceType (command) {
      console.log(command)
    }
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
  line-height: 80px;
  font-size: 22px;
  color: #ffffff;
  width: 250px;
  float: left;
}
.user-info{
  float: right;
  overflow: hidden;
  text-align: center;
  img{
    float: left;
    width: 40px;
    height: 40px;
    margin-top: 20px;
  }
  .info-select{
    float: left;
    line-height: 80px;
    margin-left: 10px;
    overflow: hidden;
    text-align: center;
  }
  .info-username{
    float: left;
    color: #ffffff;
    margin: 22px 0 8px 10px;
    :first-child{
      font-size: 16px;
      color: #ffffff;
    }
    p{
      font-size: 12px;
      color: #FFFF00;
    }
  }
  .info-icon{
    float: left;
    img{
      width: 20px;
      height: 20px;
      margin-top: 30px;
      margin-left: 15px;
      cursor: pointer;
    }
  }
  .el-icon-caret-bottom{
    color: #ffffff;
  }
  .el-icon-caret-bottom{
    font-size: 18px;
  }
}
</style>
<style type="text/css">
.el-dropdown-menu__item--divided:before {
    height: 0px;
}
</style>

