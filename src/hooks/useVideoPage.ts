import { reactive } from 'vue'

export function useVideoPage() {
	const videoList = reactive([
		{
			id: 1,
			img: '/images/video-img/right-img/rec-list_01.png',
			duration: '02:01',
			title: '姿态露出坚毅的眼神，而TheShy已经开始笑了',
			upName: 'TheShy',
			playNum: '219.0万',
			commentNum: '875',
		},
		{
			id: 2,
			img: '/images/video-img/right-img/rec-list_02.png',
			duration: '00:33',
			title: 'showmaker奎桑提圣经纯享版',
			upName: '痞老板哦i',
			playNum: '1281.0万',
			commentNum: '1433',
		},
		{
			id: 3,
			img: '/images/video-img/right-img/rec-list_03.png',
			duration: '01:25',
			title: '好消息：上单卡牌 坏消息：上单是TheShy',
			upName: 'TheShy',
			playNum: '189.5万',
			commentNum: '468',
		},
		{
			id: 4,
			img: '/images/video-img/right-img/rec-list_04.png',
			duration: '03:09',
			title: 'TheShy除“三害”',
			upName: 'TheShy',
			playNum: '287.7万',
			commentNum: '1490',
		},
	])
	return { videoList }
}
