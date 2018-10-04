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
						title: 'bro',
						contentName: 'message',
						contentBinds: {
							message: 'bro!!',
							click: (value) => {
								console.log('hello')
								console.log(value)
							}
						}
					}
				})
				throw error
			}
		}
	}
}
