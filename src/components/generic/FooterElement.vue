<template>
	<div class="main">
		<span class="glitch" :data-text="footerText">{{ footerText }}</span>
	</div>
</template>

<script>
export default {
	name: 'HeaderElement',
	data () {
		return {
			footerText: 'Author: Andrei Bazavan'
		}
	},
}
</script>

<style scoped>
	.main {
		display: block;
		font-size: 20px;
		font-weight: bold;
	}
	.glitch {
		line-height: 30px;
	}

</style>
