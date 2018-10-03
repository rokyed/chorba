<template>
	<div class="main">
		<button class="close" @click="close">X Close</button>
	</div>
</template>

<script>
export default {
	name: 'XPopup',
	methods: {
		close() {

			this.$destroy()
		}
	},
	destroyed() {
		this.$el.parentElement.removeChild(this.$el)
	}
}
</script>

<style scoped>
	.main {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background: #333;
	}
	.close {
		position: fixed;
		right: 0;
		top: 0;
		line-height: 30px;
		font-size: 30px;
		background: red;
		border: 2px solid #fff;
		cursor: pointer;
	}
	/* simple popup management*/
	.main:not(:first-child) {
		display: none;
	}
</style>
