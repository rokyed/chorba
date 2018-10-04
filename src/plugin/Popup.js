import XPopup from '@/components/generic/XPopup'

const POPUP_ELEMENT = document.createElement('div')
document.body.appendChild(POPUP_ELEMENT)

export default {
	install (Vue, options) {
		let Popup = Vue.component('xpopup', XPopup)

		Vue.prototype.$popup = async function (...args) {
			let newPopupElement = document.createElement('div')
			let popupInstance = new Popup(...args)

			POPUP_ELEMENT.appendChild(newPopupElement)
			popupInstance.$mount(newPopupElement)
		}
	}
}
