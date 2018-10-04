import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'

import AsideElement from '@/components/AsideElement'
import HeaderElement from '@/components/generic/HeaderElement'
import FooterElement from '@/components/generic/FooterElement'
import Text from '@/components/fields/Text'
import ajax from './plugin/Request.js'
import popup from './plugin/popup/Popup.js'

Vue.use(ElementUI)
Vue.use(popup)
Vue.use(ajax)

Vue.component('aside-element', AsideElement)
Vue.component('header-element', HeaderElement)
Vue.component('footer-element', FooterElement)
Vue.component('text-field', Text)
