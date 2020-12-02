import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Utforska',
		component: () => import('../views/Utforska.vue')
	},
	{
		path: '/Kategorier',
		name: 'Kategorier',
		component: () => import('../views/Kategorier.vue')
	},
	{
		path: '/Kundvagn',
		name: 'Kundvagn',
		component: () => import('../views/Kundvagn.vue')
	},
	{
		path: '/Autenticering',
		name: 'Autenticering',
		component: () => import('../views/Autenticering.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
