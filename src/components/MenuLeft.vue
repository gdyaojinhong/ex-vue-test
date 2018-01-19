<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
    >
    <el-menu-item index="home">
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="userlist">
      <span slot="title">用户列表</span>
    </el-menu-item>
<!--     <el-menu-item index="2">
      <span slot="title">信息列表</span>
    </el-menu-item> -->
    <el-submenu index="3">
      <template slot="title">
        <span>信息管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">个人信息</el-menu-item>
        <el-menu-item index="3-2">修改信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <span>资金管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">资金流水</el-menu-item>
        <el-menu-item index="4-2">支付单据</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <span>文章管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">发布文章</el-menu-item>
        <el-menu-item index="5-2">编辑文章</el-menu-item>
        <el-menu-item index="5-2">文章列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'MenuLeft',
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
    handleOpen() {
    },
    handleClose() {
    }    
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
</style>
