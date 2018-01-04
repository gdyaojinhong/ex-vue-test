<template>
  <div id="app">
    <div class="apptest">
      <nav-top></nav-top>
      <router-view></router-view>
      <nav-bom></nav-bom>
    </div>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop'
import NavBom from '@/components/NavBom'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  components: {
    'nav-top': NavTop,
    'nav-bom': NavBom
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

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #F5F5F5;
}
</style>
