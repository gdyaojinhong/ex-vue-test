<template>
  <div id="InContent">
  </div>
</template>

<script>
export default {
  name: 'InContent',
  data () {
    return {
      inputName: '',
      inputID: ''
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
    commit() {
      var params = {
        id : this.inputID,
        name : this.inputName
      }
      this.$http({
          method: 'get',
          url: 'api/user/list',
          params:params
        }).then((res)=> {
          console.log(res);
      })
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
