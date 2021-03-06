import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/pages/loginCheck/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/pages/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home');
const shoplist = r => require.ensure([], () => r(require('@/pages/loginCheck/shoplist')), 'shoplist');
const addShop = r => require.ensure([], () => r(require('@/pages/loginCheck/addShop')), 'addShop');
const zanAuth = r => require.ensure([], () => r(require('@/pages/loginCheck/zanAuth')), 'zanAuth');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/addShop',
		component: addShop
	},
	{
		path: '/shoplist',
		component: shoplist
	},
	{
		path: '/zanAuth',
		component: zanAuth
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children:[{
			path: '/home',
			component: home,
			meta: ['添加数据', '添加商铺'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
