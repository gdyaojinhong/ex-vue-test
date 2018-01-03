<template>
  <div class="header">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">主题日报</a></li>
      <li><a href="#">相册展示</a></li>
      <li><a href="#">关于</a></li>
    </ul>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style lang="less">
.header{

}
.header ul{
  width: 100%;
  height: 50px;
  overflow: hidden;
  background-color: black;
  li{
    height: 50px;
    width: 20%;
    padding-right: 5%;
    float: left;
    text-align: center;
    position: relative;
    a{
      text-decoration: none;
      color: #ffffff;
      line-height: 50px;
      text-align: center;
      width: 100%;
      &:hover{
        color: black;
        background: cornflowerblue;
      }
    }
  }
}
</style>
