<template>
<div class="main">
	<img class="logo" src="../assets/logo.png">
	<el-button v-for="item in menuItems" :key="item.id" class="full-width" @click="clicked(item)">{{ item.title }}</el-button>
</div>
</template>
<script>
export default {
	name: 'AsideElement',
	params: {
		menuItems: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			menuItems: [{
				id: 13404,
				title: 'bla'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			},{
				id: 1340423,
				title: 'bro'
			}]
		}
	},
	methods: {
		clicked(id) {
			alert(JSON.stringify(id))
		}
	}
}
</script>

<style scoped>
.main {
	line-height: 50px;
}
.logo {
	width: 160px;
	margin: 20px;
}
.full-width {
	width: 100%;
}
.el-button+.el-button {
	margin-left: 0;
}
</style>
