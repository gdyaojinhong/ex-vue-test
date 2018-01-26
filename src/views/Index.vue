<template>
  <div id="home">
  <el-container style="height:100%">
    <el-header style="border-bottom: 1px solid #eee,height: 80px; background-color: rgb(2, 135, 44);">
      <nav-top></nav-top>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <menu-left></menu-left>
      </el-aside>
      <el-main>
        <in-content></in-content>
      </el-main>
    </el-container>
  </el-container>
    <el-container style="border-top: 1px solid #eee,border-bottom: 1px solid #eee position: absolute,bottom: 0,left: 50%;">
      <el-footer style="  ">
        <nav-bom></nav-bom>
      </el-footer>
    </el-container>
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
.c{

}
</style>
