<template>
<div class="main">
	<span>title</span>
	<el-input
  type="textarea"
  :autosize="{ minRows: 1, maxRows: 2}"
  placeholder="Please input"
  v-model="title">
</el-input>
<span>content</span>

	<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 20}"
  placeholder="Please input"
  v-model="content">
</el-input>
<el-button class="full-width" v-on:click="save()">Sumbit :)</el-button>
</div>
</template>
<script>
import axios from 'axios'

export default {
	name: 'Editor',
	data() {
		return {
			title: '',
			content: ''
		}
	},
	watch: {
		'$route': 'load'
	},
	methods: {
		save() {
			let serialized = {
				title: this.title,
				content: this.content
			}

			this.$ajax('/api/save?data=' + encodeURIComponent(JSON.stringify(serialized)))
			.then(() => {
				this.$message('Lots of cookies !!!!');
				this.$router.push('/')
			})
		}
	}
}
</script>

<style scoped>

</style>
