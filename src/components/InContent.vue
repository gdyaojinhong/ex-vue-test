<template>
  <router-view></router-view>
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

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #F5F5F5;
}
.img-box{
  width: 120px;
  float: left;
}
.button-box{
  float: right;
  button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
}
.test-box{
  text-align: center;
}
</style>
