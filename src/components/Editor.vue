<template>
<form @submit.prevent="save" class="main">
	<span class="error" v-if="titleError">Title is missing:</span>
	<text-field class="text" maxlength="32" v-model="title" title="Title of the article" />
	<span class="error" v-if="tagsError">Tags are missing:</span>
	<text-field  title="Tags of the article" class="text" v-model="tags" maxlength="100" placeholder="separated by space e.g.'tag1 tag2'" />
	<span class="error" v-if="authorError">Author is missing:</span>
	<text-field  title="Author" class="text" v-model="author" maxlength="100" placeholder="Bob Bobesky" />
	<span class="error" v-if="contentError">Content is missing:</span>
	<text-field maxlength="5000" title="Content" class="text"
	type="textarea" v-model="content"/>
	<button class="submit gradient-background-purp"><span class=" glitch" data-text="Post">Post</span></button>
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
			author: '',
			titleError: false,
			tagsError: false,
			contentError: false,
			authorError: false
		}
	},
	watch: {
		'title': 'validate',
		'author': 'validate',
		'content': 'validate',
		'tags': 'validate'
	},
	methods: {
		validate() {
			this.titleError = !this.title
			this.tagsError = !this.tags
			this.contentError = !this.content
			this.authorError = !this.author

			return !(this.titleError || this.tagsError || this.contentError || this.authorError)
		},

		save() {
			if (!this.validate())
				return

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
	.error {
		font-size: 30px;
		height: 40px;
		line-height: 40px;
		color: #f00;
		text-align: left;
	}
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
		cursor: pointer;
		font-family: 'Pacifico';
	}
</style>
