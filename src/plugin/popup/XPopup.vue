<template>
	<transition name="fade">
		<div class="popup" v-if="show">
			<div class="top-bar">
				<span class="title">{{title}}</span>
				<button class="close" @click="close">X Close</button>
			</div>
			<div class="container">
				<component v-if="contentName" :is="contentName" v-bind="contentBinds"></component>
			</div>
		</div>
	</transition>
</template>

<script>
import delay from 'delay'

export default {
	name: 'XPopup',
	methods: {
		async close() {
			this.show = false
			await delay(250)
			this.$destroy()
		}
	},
	data() {
		return {
			show: false,
			title: 'No Title',
			contentName: null,
			contentBinds: null
		}
	},
	mounted() {
		this.show = true
		this.$on('close', () => {
			this.close()
		})
	},
	destroyed() {
		this.$el.parentElement.removeChild(this.$el)
	}
}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .25s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.popup {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background: #333;
		transition: opacity .25s;
	}
	.top-bar {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		width: 100%;
		height: 60px;
		display: flex;
		padding: 10px;
		background: #222;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
	}

	.container {
		position: fixed;
		left: 0;
		right: 0;
		top: 60px;
		bottom: 0;
		overflow: auto;
		display: flex;
		flex-direction: column;
	}
	.close {
		position: fixed;
		right: 10px;
		top: 10px;
		line-height: 30px;
		font-size: 30px;
		background: red;
		border: 2px solid #fff;
		cursor: pointer;
		box-shadow: 4px 4px 0px 0px #888;
	}

	.title {
		line-height: 40px;
		font-size: 30px;
		font-weight: bold;
	}

</style>
