<template>
<form @submit="validate" class="main">
	<span class="error" v-if="titleError">Title is missing</span>
	<text-field class="text" maxlength="32" v-model="title" title="Title of the article" />
	<span class="error" v-if="tagsError">Tags are missing</span>
	<text-field title="Tags of the article" class="text" v-model="tags" maxlength="100" placeholder="separated by space e.g.'tag1 tag2'" />
	<text-field title="Content" class="text"
	type="textarea" v-model="content"/>
	<button class="submit gradient-background-purp">POST</button>
</form>
</template>
<script>
import axios from 'axios'

export default {
	name: 'Editor',
	data() {
		return {
			title: '',
			content: '',
			tags: '',
			titleError: false,
			tagsError: false,
		}
	},
	watch: {
		'$route': 'load'
	},
	methods: {
		validate() {

		},

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
	.main {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.main > * {
		margin: 10px;
	}
	.text {
		font-size:30px;
		display: block;
	}
	.submit {
		font-size: 30px;
		border: none;
		color: #fff;
		font-family: 'Pacifico', cursive;
	}
</style>
