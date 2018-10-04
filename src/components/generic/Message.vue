<template>
	<div class="main">
		<span>{{ message }}</span>
	</div>
</template>

<script>
export default {
	name: 'Message',
	props: {
		message: {
			type: String,
			default: 'default message'
		}
	}
}
</script>

<style scoped>
	.main {
		display: block;
		font-size: 20px;
		font-weight: bold;
	}
</style>
