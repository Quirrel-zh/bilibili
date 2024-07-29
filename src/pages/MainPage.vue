<template>
	<div class="bilibili">
		<HeaderTop />
		<div class="header-bannar">
			<video
				:autoplay="true"
				:loop="true"
				:muted="true"
				preload="auto"
				src="/videos/headbanner.webm"
			></video>
			<div class="logo">
				<img
					:width="'168px'"
					alt="#"
					src="/images/bannar/logo.png"
				/>
			</div>
		</div>
		<div class="header-channel">
			<div class="channel-icon">
				<a
					class="icon-item"
					href="#"
				>
					<div class="icon-bg">
						<i class="iconfont icon-dongtai"></i>
					</div>
					<span>动态</span>
				</a>
				<a
					class="icon-item"
					href="#"
				>
					<div class="icon-bg">
						<i class="iconfont icon-remen"></i>
					</div>
					<span>热门</span>
				</a>
			</div>
			<div class="channel-container">
				<div class="channel-left">
					<a
						class="channel-link"
						href="#"
						>番剧</a
					><a
						class="channel-link"
						href="#"
						>电影</a
					><a
						class="channel-link"
						href="#"
						>国创</a
					><a
						class="channel-link"
						href="#"
						>电视剧</a
					><a
						class="channel-link"
						href="#"
						>综艺</a
					><a
						class="channel-link"
						href="#"
						>纪录片</a
					><a
						class="channel-link"
						href="#"
						>动画</a
					><a
						class="channel-link"
						href="#"
						>游戏</a
					><a
						class="channel-link"
						href="#"
						>鬼畜</a
					><a
						class="channel-link"
						href="#"
						>音乐</a
					><a
						class="channel-link"
						href="#"
						>舞蹈</a
					><a
						class="channel-link"
						href="#"
						>影视</a
					><a
						class="channel-link"
						href="#"
						>娱乐</a
					><a
						class="channel-link"
						href="#"
						>知识</a
					><a
						class="channel-link"
						href="#"
						>科技</a
					><a
						class="channel-link"
						href="#"
						>资讯</a
					><a
						class="channel-link"
						href="#"
						>美食</a
					><a
						class="channel-link"
						href="#"
						>生活</a
					><a
						class="channel-link"
						href="#"
						>汽车</a
					><a
						class="channel-link"
						href="#"
						>时尚</a
					><a
						class="channel-link"
						href="#"
						>运动</a
					><a
						class="channel-link"
						href="#"
						>更多</a
					>
				</div>
				<div class="channel-right">
					<a
						class="channel-link-right"
						href="#"
					>
						<i class="iconfont icon-icon-zhuanlan-zhuanlanwenzhang"></i>
						<span>专栏</span>
					</a>
					<a
						class="channel-link-right"
						href="#"
					>
						<i class="iconfont icon-zhibo"></i>
						<span>直播</span> </a
					><a
						class="channel-link-right"
						href="#"
					>
						<i class="iconfont icon-huodong"></i>
						<span>活动</span> </a
					><a
						class="channel-link-right"
						href="#"
					>
						<i class="iconfont icon-nav_ketang"></i>
						<span>课堂</span> </a
					><a
						class="channel-link-right"
						href="#"
					>
						<i class="iconfont icon-nav_shequzhongxin"></i>
						<span>社区中心</span> </a
					><a
						class="channel-link-right"
						href="#"
					>
						<i class="iconfont icon-nav_xingerebang"></i>
						<span>新歌热榜</span>
					</a>
				</div>
			</div>
		</div>
		<div class="main-container">
			<div class="card-container2">
				<div class="left-card-container">
					<div class="left-card">
						<img
							alt=""
							src="/images/main-container/left-img.png"
						/>
						<div class="footer-text">
							<div class="title-mask"></div>
							<div class="text-title">
								夏日美食解暑，带话题投稿瓜分万元贝壳金!!
							</div>
						</div>
					</div>
				</div>
				<div
					v-for="card in cardList.list"
					:key="card.id"
					class="feed-card"
				>
					<div
						class="card-img"
						@click="videoPageClick"
					>
						<img
							:src="card.img"
							alt=""
						/>
					</div>
					<div class="card-text">
						<h3
							:title="card.title"
							@click="videoPageClick"
						>
							{{ card.title }}
						</h3>
						<div class="card-info">
							<div
								class="subscribe"
								@click="
									card.subscribe == '已关注'
										? (card.subscribe = '关注')
										: (card.subscribe = '已关注')
								"
							>
								{{ card.subscribe }}
							</div>
							<div
								class="up-name"
								@click="videoPageClick"
							>
								<span>{{ card.upName }}</span>
								<span>·</span>
								<span>{{ card.date }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import HeaderTop from '@/component/HeaderTop.vue'
import { useRouter } from 'vue-router'
import axios from '@/assets/utils/axios_utils'
import { onMounted, onUnmounted, reactive } from 'vue'
import { type dataType, type userType } from '@/types/userType'

const router = useRouter()

// const { cardList } = useMainPage()

const cardList = reactive<dataType>({
	list: [],
})

function videoPageClick() {
	router.push('VideoPage')
}

// 获取数据
let loading = false

async function getList() {
	if (loading) return
	loading = true
	let res: userType[] = await axios.get('http://localhost:3000/obj')
	cardList.list = cardList.list.concat(res)
	loading = false
}

// 滚动加载
function scrollHandle() {
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	let windowHeight =
		document.documentElement.clientHeight || document.body.clientHeight
	let scrollHeight =
		document.documentElement.scrollHeight || document.body.scrollHeight
	const distance = scrollHeight - windowHeight - scrollTop
	if (distance < 300) {
		getList()
	}
}

// 滚动事件
onMounted(() => {
	getList()
	window.addEventListener('scroll', scrollHandle, false)
})
onUnmounted(() => {
	window.removeEventListener('scroll', scrollHandle, false)
})
</script>

<!--<style scoped>-->

<!--</style>-->

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
@import '@/assets/css/mainPage';
</style>
