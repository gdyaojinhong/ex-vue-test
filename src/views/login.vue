<template>
  <div class="login-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="header-title">AkLS后台管理系统</span>
      </div>
      <div class="text item">
        <el-form :model="loginForm" ref="loginForm" class="loginForm" :rules="rules">
          <el-form-item prop="userName">
            <span class="fa-tips"><i class="fa fa-user"></i></span>
            <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <span class="fa-tips"><i class="fa fa-lock"></i></span>
            <el-input v-model="loginForm.passWord" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as utils from '../utils/utils.js'
// import {mapActions, mapState, mapGetter} from 'Vuex'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
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
  components: {
  },
  computed: {
    // ...mapGetter(['menuitems', 'isLoadRoutes'])
  },
  mounted () {
  },
  methods: {
    // ...mapActions(['addMenu',loadRoutes]),
    // generateMenuPushIndex(){
    //   const menuData = [
    //       {path:'/index',name:'首页',component:'index',icon:'fa-server',noDropdown:true,
    //         children:[
    //           {path:'/index',name:'首页',component:'index'},
    //         ]
    //       },
    //       {path:'/userList',name:'用户列表',component:'userList',icon:'fa-user',noDropdown:true,
    //         children:[
    //           {path:'/userList',name:'用户列表',component:'userList'},
    //         ]
    //       },
    //       {path:'/infoList',name:'信息列表',component:'infoList',icon:'fa-envelope',noDropdown:true,
    //         children:[
    //           {path:'/infoList',name:'信息列表',component:'infoList'},
    //         ]
    //       },
    //       {path:'/infoManage',name:'信息管理',component:'content',icon:'fa-asterisk',
    //         children:[
    //           {path:'/infoShow',name:'个人信息',component:'infoShow'},
    //           {path:'/infoModify',name:'修改信息',component:'infoModify'}
    //         ]
    //       },
    //       {path:'/fundManage',name:'资金管理',component:'content',icon:'fa-money',
    //         children:[
    //           {path:'/fundList',name:'资金流水',component:'fundList'},
    //           {path:'/payList',name:'支付单据',component:'payList'}
    //         ]
    //           },
    //       {path:'/touziManage',name:'投资管理',component:'content',icon:'fa-inbox',
    //         children:[
    //           {path:'/chinaTouziList',name:'省份投资',component:'chinaTouziList'},
    //           {path:'/chinaTabsList',name:'区域投资',component:'chinaTabsList'}
    //         ]
    //           },
    //       {path:'/fundArticle',name:'金融文章',component:'content',icon:'fa-file-text-o',
    //         children:[
    //           {path:'/createFundArticle',name:'发布文章',component:'createFundArticle'},
    //           {path:'/modifyFundArticle',name:'编辑文章',component:'modifyFundArticle'},
    //           {path:'/showFundArticle',name:'查看文章',component:'showFundArticle'}
    //         ]
    //           },
    //       {path:'/fundData',name:'资金数据',component:'content',icon:'fa-bar-chart-o',
    //         children:[
    //           {path:'/fundPosition',name:'投资分布',component:'fundPosition'},
    //           {path:'/typePosition',name:'项目分布',component:'typePosition'},
    //           {path:'/incomePayPosition',name:'收支统计',component:'incomePayPosition'}
    //         ]
    //           },
    //   ]

    //   this.utils.setStore('menuData', menuData)
    //   this.addMenu(menuData)

    //   if (!this.isLoadRoutes) {
    //     const routers = utils.generateRoutesFromMenu(menuData)
    //     console.log(routers);
    //   }


    // },
    submitForm (loginForm) {
        console.log()
        var that = this;
        that.$refs[loginForm].validate((valid) => {
          if (valid) {
            let userinfo = that.loginForm
            that.$http({
              method: 'get',
              url: 'api/user/userLogin',
              params: userinfo,
            }).then((res) => {
              that.saveUserInfo(userinfo)
              that.$router.push({path:'../home'})
            })
          }else{
            return;
          }
        })
      },
    saveUserInfo(userinfo){
      utils.setStore('userInfo',userinfo)
    }
  }
}
</script>

<style lang="less" scoped>
  .box-card {
    width: 400px;
    height: 250px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -250px;
    margin-left: -200px;
    border-radius: 4px;
  }
.login-page{
  overflow: hidden;
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-image: url("../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login-content{
  width: 370px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -185px;
  margin-top: -300px;
  overflow: hidden;
  .login-title{
   text-align: center;
   font-size: 24px;
  }
}
.login-tiparea{
  font-size: 12px;
  color: #666666;
}
.clearfix{
  text-align: center;
}
</style>
