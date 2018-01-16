<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
<!--     <el-submenu index="1">
      <template slot="title">
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu> -->
    <el-menu-item index="1">
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span slot="title">用户列表</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span slot="title">信息列表</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span slot="title">信息管理</span>
    </el-menu-item>
    <el-menu-item index="5">
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-menu-item index="6">
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

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #F5F5F5;
}
</style>
