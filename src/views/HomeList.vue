<template>
  <div class="apptest-homelst">
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: ''
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
    this.$http.get('/api/user/list').then((res) => {
      console.log(res)
      alert('后台资源调用成功')
    })
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
