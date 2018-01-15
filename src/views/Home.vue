<template>
  <div id="home">
  <el-container style="height:100%">
    <el-header style="border-bottom: 1px solid #eee">
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
    <el-container style="border-top: 1px solid #eee,border-bottom: 1px solid #eee">
      <el-footer>
        <nav-bom></nav-bom>
      </el-footer>
    </el-container>
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
          this.$http({
              method: 'get',
              url: 'api/user/list',
            }).then((res)=> {
              console.log(res);
          })
  },
  methods: {

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
