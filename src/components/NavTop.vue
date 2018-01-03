<template>
  <div class="header">
    <ul>
      <li>首页</li>
      <li>主题浏览</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'NavTop',
	data () {
		return {

		}
	},
	components : {

	},
	computed : {

	},
	// 实例初始化最之前，无法获取到data里的数据
	beforeCreate () {
	},
	//在挂载开始之前被调用
	beforeMount () {
	},
	//已成功挂载，相当ready()
	mounted () {
	},
	//相关操作事件
	methods : {
			getData(){}
	}
}
</script>

<style>
.header{

}
</style>
