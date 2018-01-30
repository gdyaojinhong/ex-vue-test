<template>
  <div id="home">
  <el-container style="height:100%,width:100%">
    <el-header style="border-bottom: 1px solid #eee;height: 80px;background-color: rgb(2, 135, 44);">
      <nav-top></nav-top>
    </el-header>
      <el-aside width="200px">
        <menu-left></menu-left>
      </el-aside>
      <el-main>
        <in-content></in-content>
      </el-main>
  </el-container>
      <nav-bom></nav-bom>
  </div>
</template>

<script>
  import MenuLeft from "@/components/MenuLeft"
  import NavTop from "@/components/NavTop"
  import NavBom from "@/components/NavBom"
  import InContent from "@/components/InContent"
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    MenuLeft, NavTop, NavBom,InContent
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
.el-main{
  margin-left: 200px;
}
</style>
