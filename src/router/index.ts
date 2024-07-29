import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import VideoPage from '@/pages/VideoPage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/MainPage',
			name: 'mainPage',
			component: MainPage,
		},
		{
			path: '/VideoPage',
			name: 'videoPage',
			component: VideoPage,
			meta: {
				headTopStyle: {
					color: '#18191c',
				},
				headTopBarStyle: {
					backgroundColor: '#fff',
					boxShadow: '0 2px 4px #00000014',
				},
			},
		},
		{
			path: '/',
			redirect: '/MainPage',
		},
	],
})

export default router
