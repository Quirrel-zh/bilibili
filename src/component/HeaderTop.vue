<template>
	<div
		:class="{ scroll: isScroll }"
		:style="headTopBarStyle"
		class="header-bar"
	>
		<ul
			:style="headTopStyle"
			class="left-entry"
		>
			<li style="margin-right: 30px">
				<i class="iconfont icon-Bzhan"></i>
				<a
					href="#"
					@click="toHomeClick"
					>首页</a
				>
			</li>
			<li class="tiny-entry">
				<a href="#">番剧</a>
			</li>
			<li class="tiny-entry">
				<a href="#">直播</a>
			</li>
			<li class="tiny-entry">
				<a href="#">游戏中心</a>
			</li>
			<li class="tiny-entry">
				<a href="#">会员购</a>
			</li>
			<li class="tiny-entry">
				<a href="#">漫画</a>
			</li>
			<li class="tiny-entry">
				<a href="#">赛事</a>
			</li>
			<li class="tiny-entry">
				<a href="#">时光</a>
			</li>
			<li class="tiny-entry">
				<a href="#">足球季</a>
			</li>
			<li>
				<i class="iconfont icon-xiazai"></i>
				<a href="#">下载客户端</a>
			</li>
		</ul>
		<div class="search-input">
			<div class="search-content">
				<input
					class="search"
					type="text"
				/>
				<i class="iconfont icon-qingchu"></i>
			</div>
			<div class="search-btn">
				<i class="iconfont icon-sousuo"></i>
			</div>
		</div>
		<ul
			:style="headTopStyle"
			class="right-entry"
		>
			<li class="tiny-entry">
				<div
					class="face"
					@click="loginClick"
				>
					<a href="#">
						{{ login }}
						<img
							v-show="loginStore.isShowFace"
							alt="#"
							src="/images/bannar/touxiang.png"
							width="34px"
						/>
					</a>
				</div>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<i class="iconfont icon-wodedahuiyuan"></i>
					<span>大会员</span>
				</a>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<i class="iconfont icon-xiaoxi"></i>
					<span>消息</span>
				</a>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<i class="iconfont icon-dongtai"></i>
					<span>动态</span>
				</a>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<i class="iconfont icon-favourited"></i>
					<span>收藏</span>
				</a>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<i class="iconfont icon-lishi"></i>
					<span>历史</span>
				</a>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<i class="iconfont icon-bulb1"></i>
					<span>创作中心</span>
				</a>
			</li>
			<li class="tiny-entry">
				<a href="#">
					<div class="update">
						<i class="iconfont icon-shangchuan"></i>
						<span>投稿</span>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script lang="ts" name="HeaderTop" setup>
import useLoginStore from '@/store/useLoginStore'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

let headTopStyle = route.meta.headTopStyle as Record<string, string | number>
let headTopBarStyle = route.meta.headTopBarStyle as Record<
	string,
	string | number
>

const loginStore = useLoginStore()
const login = ref('登录')

function loginClick() {
	if (loginStore.isShowFace) {
		loginStore.isShow = false
		login.value = ''
	} else {
		loginStore.isShow = true
		login.value = '登录'
	}
}

const router = useRouter()

function toHomeClick() {
	router.push('mainPage')
}

const isScroll = ref(false)
onMounted(() => {
	window.addEventListener('scroll', () => {
		isScroll.value = window.scrollY > 0
	})
})
</script>
<style scoped>
@import '@/assets/css/headerTop.scss';
</style>
