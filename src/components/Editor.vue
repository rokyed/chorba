<template>
<form @submit.prevent="save" class="main">
	<span class="error" v-if="$v.title.$error">Title is missing:</span>
	<text-field class="text" maxlength="32" v-model="title" title="Title of the article" />
	<span class="error" v-if="$v.tags.$error">Tags are missing:</span>
	<text-field  title="Tags of the article" class="text" v-model="tags" maxlength="100" placeholder="separated by space e.g.'tag1 tag2'" />
	<span class="error" v-if="$v.author.$error">Author is missing:</span>
	<text-field  title="Author" class="text" v-model="author" maxlength="100" placeholder="Bob Bobesky" />
	<text-field  title="Author" class="text" v-model="author" maxlength="40" placeholder="Bob Bobesky" />
	<span class="error" v-if="$v.content.$error">Content is missing:</span>
	<text-field maxlength="5000" title="Content" class="text"
	type="textarea" v-model="content"/>
	<button class="submit gradient-background-purp"><span class=" glitch" data-text="Post">Post</span></button>
</form>
</template>
<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
	name: 'Editor',
	mixins: [validationMixin],
	validations: {
		title: {required},
		tags: {required},
		author: {required},
		content: {required}
	},
	data() {
		return {
			title: '',
			content: '',
			tags: '',
			author: '',
			thumbnail: ''
		}
	},
	methods: {
		validate() {
			this.$v.$touch()

			return this.$v.$anyError
		},
		save() {
			if (this.validate())
				return

			let serialized = {
				title: this.title,
				content: this.content,
				author: this.author,
				content: this.content,
				thumbnail: this.thumbnail
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
