<template>
  <div class="apptest">
    <nav-top></nav-top>
    <nav-bom></nav-bom>
  </div>
</template>

<script>
import NavTop from './NavTop'
import NavBom from './NavBom'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
