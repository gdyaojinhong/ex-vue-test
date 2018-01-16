<template>
  <div id="login-page">
    <div class="">
      <div class="login-content">
        <div class="login-title">
          <span>AkLS后台管理系统</span>
        </div>
        <el-form :moble="loginForm" ref="loginForm" class="loginForm" :rules="rules">
          <el-form-item prop="userName">
            <span>用户名</span>
            <span class="fa-tips"><i class="fa fa-user"></i></span>
            <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <span>密码</span>
            <span class="fa-tips"><i class="fa fa-lock"></i></span>
            <el-input v-model="loginForm.passWord" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">
              登录
            </el-button>
          </el-form-item>
<!--           <div class="login-tiparea">
            <p class="wxtip">温馨提示：</p>
            <p class="tip">未登录过的新用户，自动注册</p>
            <p class="tip">注册过的用户可凭账号密码登录</p>
          </div> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

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
.login-page{
  position: relative;
  width: 100%;
  height: 100%;
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
</style>
