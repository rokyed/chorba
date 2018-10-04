<template>
	<div class="main">
		<span class="glitch" :data-text="location">{{ location }}</span>
	</div>
</template>

<script>
export default {
	name: 'HeaderElement',
	data () {
		return {
			location: ''
		}
	},
	methods: {
		setCurrentPath() {
			this.location = this.$router.currentRoute.path
		}
	},
	watch: {
		'$route': 'setCurrentPath'
	},
	created() {
		this.setCurrentPath()
	}
}
</script>

<style scoped>
	.main {
		font-size: 50px;
		font-weight: bold;
		text-align: center;
	}
</style>
