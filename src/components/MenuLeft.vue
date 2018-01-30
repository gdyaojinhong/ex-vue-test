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
    <el-submenu index="2">
      <template slot="title">
        <span>菜单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">菜单详情</el-menu-item>
        <el-menu-item index="3-2">菜单权限</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <span>店铺新增</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">店铺详情</el-menu-item>
        <el-menu-item index="3-2">修改店铺</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <span>管理员新增</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">管理员详情</el-menu-item>
        <el-menu-item index="4-2">权限赋予</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <span>审核管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">店铺审核</el-menu-item>
        <el-menu-item index="5-2">审核列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <span>角色管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">角色列表</el-menu-item>
        <el-menu-item index="5-2">管理权限</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="userlist">
      <span slot="title">关于</span>
    </el-menu-item>
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

<style lang="less" scoped>
.el-menu-vertical-demo{
    height: 100%;
    display: block;
    position: fixed;
    width: 200px;
}

</style>
