<template>
<div class="main">
	<img class="logo" src="../assets/logo.png" v-on:click="goHome()">
	<button class="button full-width" v-on:click="goList()">Articles</button>
	<button class="button full-width" v-on:click="goEdit()">Editor</button>
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
		
		goList() {
			this.$router.push('/list')
		},

		clicked(item) {
			this.$router.push('/art/' + item.id)
		},

		load() {
			this.$ajax('/api/list')
			.then((response) => {
				this.menuItems = response.data
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
.button {
	border: 4px solid #fff;
	box-shadow: 4px 4px 0px 0px #888;
	font-size: 20px;
	transition: color .25s;
	cursor: pointer;
}
.button:hover {
	color: #f00;
}

.button + .button {
	margin-top: 0;
}
</style>
