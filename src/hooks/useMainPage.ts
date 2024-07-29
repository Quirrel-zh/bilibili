import { reactive } from 'vue'

export function useMainPage() {
	const cardList = reactive([
		{
			id: '01',
			img: '/images/main-container/right-img-1.png',
			title: '剑姬：你的尖叫是我的兴奋剂',
			subscribe: '关注',
			upName: 'the shy',
			date: '6-1',
		},
		{
			id: '02',
			img: '/images/main-container/right-img-2.png',
			title: '【1818黄金眼】几口喝完“瑞幸”五分之四都是冰？',
			subscribe: '关注',
			upName: '1818黄金眼',
			date: '7-8',
		},
		{
			id: '03',
			img: '/images/main-container/right-img-3.png',
			title: '毕业设计《黑神话悟空》，老师看了让我延毕了!',
			subscribe: '关注',
			upName: 'lambda',
			date: '6-17',
		},
		{
			id: '04',
			img: '/images/main-container/right-img-4.png',
			title: '剑招还能克制哈迪!大麦高手火男17杀吃鸡|Mike单排',
			subscribe: '已关注',
			upName: '白水天河',
			date: '7-3',
		},
	])

	return { cardList }
}
