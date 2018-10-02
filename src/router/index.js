import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Article from '@/components/Article'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Welcome',
			component: Welcome
		},
		{
			path: '/art/:id',
			name: 'Article',
			component: Article
		},
		{
			path: '/editing',
			name: 'Editor',
			component: Editor
		}
	]
})
