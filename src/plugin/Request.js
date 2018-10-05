import axios from 'axios'

export default {
	install (Vue, options) {
		Vue.prototype.$ajax = async function (...args) {
			try {
				let response = await axios(...args)

				return response
			} catch (error) {
				this.$popup({
					data: {
						title: 'we\'re back in the 80\'s',
						contentName: 'message',
						contentBinds: {
							message: 'there was an error with your potato'
						}
					}
				})
				throw error
			}
		}
	}
}
