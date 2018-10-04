<template>
<div class="main">
	<img class="logo" src="../assets/logo.png" v-on:click="goHome()">
	<el-button v-for="item in menuItems" :key="item.id" class="full-width" v-on:click="clicked(item)">{{ item.title }}</el-button>
	<el-button class="full-width" v-on:click="goEdit()">Editor</el-button>
	<el-button class="full-width" v-on:click="showPopup()">Popup</el-button>
</div>
</template>
<script>
import axios from 'axios'

export default {
	name: 'AsideElement',
	data() {
		return {
			menuItems: []
		}
	},
	watch: {
		'$route': 'load'
	},
	methods: {
		goHome() {
			this.$router.push('/')
		},

		goEdit() {
			this.$router.push('/editing')
		},

		clicked(item) {
			this.$router.push('/art/' + item.id)
		},

		load() {
			this.$ajax('/api/list')
			.then((response) => {
				this.menuItems = response.data
			})
		},

		showPopup() {
			this.$popup({
				data: {
					title: 'bla'
				}
			})
		}
	},
	created () {
		window.WABBA= this
		this.load()
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
	cursor: pointer;
}
.full-width {
	width: 160px;
	margin: 20px;
}
.el-button+.el-button {
	margin-left: 20px;
}
</style>
