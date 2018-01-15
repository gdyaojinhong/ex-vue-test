<template>
  <div id="InContent">
    <el-input
      placeholder="请输入内容"
      v-model="inputName"
      clearable>
    </el-input>
    <el-input
      placeholder="请输入内容"
      v-model="inputID"
      clearable>
    </el-input>
    <el-button type="primary" @click="commit">提交</el-button>
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
