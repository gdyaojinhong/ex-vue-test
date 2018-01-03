<template>
  <div class="hello">
    <nav-top></nav-top>
    <h1>{{ msg }}</h1>
    </ul>
  </div>
</template>

<script>
import NavTop from './NavTop';
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  components: {
    "nav-top":NavTop
  },
  computed:{
  },
  beforeCreate(){

  },
  beforeMount(){
  },
  mounted(){
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
