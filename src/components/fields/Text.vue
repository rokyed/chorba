<template>
	<div class="main">
		<span v-if="title">{{title}}</span>
		<template v-if="isTextarea">
			<textarea :maxlength="maxlength" :type="type" :placeholder="placeholder" @input="updateMe" @keypress="updateMe" :value="realValue"></textarea>
		</template>
		<template v-else>
			<input :maxlength="maxlength" :type="type" :placeholder="placeholder" @input="updateMe" @keypress="updateMe" :value="realValue"/>
		</template>
		<span v-if="hasLimit">Characters left: {{charsLeft}}</span>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: [String],
			default: ''
		},
		value: {
			type: [String, Number],
			default: ''
		},
		maxlength: {
			type: [String, Number]
		},
		placeholder: {
			type: [String, Number],
			default: ''
		},
		type: {
			type: [String]
		}
	},
	computed: {
		isTextarea() {
			return this.$props.type == "textarea"
		}
	},
	methods: {
		updateMe(e) {
			this.realValue = e.target.value
			this.$emit('input', this.realValue)
			this.charsLeft = this.getCharsLeft()
		},
		getCharsLeft() {
			return (+this.$props.maxlength || 0) - (this.realValue || '').length
		}
	},
	data() {
		return {
			hasLimit: !!this.$props.maxlength,
			charsLeft: this.getCharsLeft(),
			realValue: this.$props.value
		}
	},
	created() {
		this.charsLeft = this.getCharsLeft()
	}
}
</script>

<style scoped>
	.main {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	* {
		line-height: 40px;
	 	font-size:30px;
	}

	span {
		margin-left: 10px;
		flex: 0 0 1px;
		white-space: nowrap;
	}
	span:first-child {
		margin-right: 10px;
		margin-left: 0;
	}
	::-webkit-input-placeholder {
		color: #f0f;
	}
	input, textarea {
		border: 4px solid #fff;
		box-shadow: 4px 4px 0px 0px #888;
		width: auto;
		min-width: 200px;
		max-width: none;
		flex: 8 8 1px;
		padding: 0 10px;
	}

	textarea {
		height: 200px;
	}
</style>
