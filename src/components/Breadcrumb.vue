
<template>
  <div class="Breadcrumb">
  	<ul>
  		<li v-for="(item,index) in tab" :class="(index+1) != tab.length ? 'tab' : 'tabActive'"><router-link v-bind:to="item.path">{{item.name}}<span v-if="(index+1) != tab.length">/</span></router-link>
  			</li>
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
  props:['tab'],
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.Breadcrumb{
	height: 30px;
	line-height: 30px;
	ul{
		overflow: hidden;
		margin-left: 15px;
		li{
			a{
				width: auto;
				float: left;
				font-size: 14px;
				line-height: 30px;
				color: #000000;
				font-weight: bold;
				span{
					padding: 0 5px;
					color: #666666;
				}
			}

		}
	}
	.tabActive{
		color: #999999 !important;
	}
}
</style>

