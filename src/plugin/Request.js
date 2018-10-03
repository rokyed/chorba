import axios from 'axios'
import { Notification } from 'element-ui'

export default {
	install (Vue, options) {
		Vue.prototype.$ajax = async function (...args) {
			try {
				let response = await axios(...args)

				return response
			} catch (error) {
				Notification({
					title: 'bro',
					message: 'sowwy but it failed :(',
					duration: 1000
				})
				throw error
			}
		}
	}
}
