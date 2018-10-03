<template>
<div class="main">
	<h2>
		 {{ title }}
	</h2>
	<div>
		{{ content }}
	</div>
</div>
</template>
<script>
import axios from 'axios'

export default {
	name: 'Article',
	data() {
		return {
			title: '',
			content: ''
		}
	},
	watch: {
		'$route': 'load'
	},
	created() {
		this.load()
	},
	methods: {
		load() {
			let id = this.$route.params.id

			this.$ajax('/api/load?id=' + id)
			.then((response) => {
				this.title = response.data.title
				this.content = response.data.content
			})
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
