// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ajax from './plugin/Request.js'

Vue.use(ElementUI)
Vue.use(ajax)

Vue.config.performance = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	router
})
