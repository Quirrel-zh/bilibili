<template>
	<div class="bilibili">
		<HeaderTop />
		<div class="content">
			<div class="content-left">
				<div class="video-info">
					<div class="info-title">
						<h1>剑姬：你的尖叫是我的兴奋剂</h1>
					</div>
					<div class="info-meta">
						<div class="item">
							<i class="iconfont icon-bofangshu"></i>
							89.6万
						</div>
						<div class="item">
							<i class="iconfont icon-danmushu"></i>
							587
						</div>
						<div class="item">2024-06-01 12:00:00</div>
						<div class="item">
							<i
								class="iconfont icon-lianxi2hebing_jinzhi"
								style="color: red"
							></i>
							未经作者授权，禁止转载
						</div>
					</div>
				</div>
				<div class="video-content">
					<video
						id="videoPlayer"
						controls
						width="100%"
					>
						<source
							src="/videos/video.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<!-- <img src="/images/video-img/veido-temporary.png" alt="" /> -->
				</div>
				<div class="video-under">
					<div class="under-content">
						<div
							id="item"
							class="item"
						>
							<svg
								class="video-like-icon video-toolbar-item-icon"
								height="36"
								viewBox="0 0 36 36"
								width="36"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
									fill="currentColor"
									fill-rule="evenodd"
								></path>
							</svg>
							7.5万
						</div>
						<div
							id="item"
							class="item"
						>
							<svg
								class="video-coin-icon video-toolbar-item-icon"
								data-v-331e415b=""
								height="28"
								viewBox="0 0 28 28"
								width="28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"
									fill="currentColor"
									fill-rule="evenodd"
								></path>
							</svg>
							4752
						</div>
						<div
							id="item"
							class="item"
						>
							<svg
								class="video-fav-icon video-toolbar-item-icon"
								data-v-b42ec39c=""
								height="28"
								viewBox="0 0 28 28"
								width="28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
									fill="currentColor"
									fill-rule="evenodd"
								></path>
							</svg>
							2651
						</div>
						<div
							id="item"
							class="item"
						>
							<svg
								class="video-share-icon video-toolbar-item-icon"
								data-v-58ce8db4=""
								height="28"
								viewBox="0 0 28 28"
								width="28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"
									fill="currentColor"
								></path>
							</svg>
							779
						</div>
					</div>
				</div>
				<div class="video-comments">
					<div class="v-describe">
						<span class="describe-text"
							>六一儿童节快乐~ <br />喜欢的记得一键三连哦~
						</span>
					</div>
					<div class="v-tags">
						<div class="tag-panel">
							<div class="tag">
								<span>游戏</span>
							</div>
							<div class="tag">
								<span>电子竞技</span>
							</div>
							<div class="tag">
								<span>电子竞技</span>
							</div>
							<div class="tag">
								<span>LPL</span>
							</div>
							<div class="tag">
								<span>上单</span>
							</div>
							<div class="tag">
								<span>英雄联盟</span>
							</div>
							<div class="tag">
								<span>搞笑</span>
							</div>
							<div class="tag">
								<span>TheShy</span>
							</div>
							<div class="tag">
								<span>老头杯</span>
							</div>
							<div class="tag">
								<span>MOBA</span>
							</div>
						</div>
					</div>
					<div class="v-comments"></div>
				</div>
			</div>
			<div class="content-right">
				<div class="up-content">
					<div class="left-info">
						<div class="up-head">
							<img
								alt=""
								src="/images/video-img/the shy.png"
							/>
							<svg
								class="icon"
								height="18px"
								p-id="1743"
								t="1720747578836"
								version="1.1"
								viewBox="0 0 1024 1024"
								width="18px"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z"
									fill="#FFFFFF"
									p-id="1744"
								></path>
								<path
									d="M93.09 512a418.91 418.91 0 1 0 837.82 0 418.91 418.91 0 1 0-837.82 0z"
									fill="#FFC62E"
									p-id="1745"
								></path>
								<path
									d="M474.112 763.95a33.28 33.28 0 0 1-14.057 4.05 21.039 21.039 0 0 1-21.318-20.806 19.55 19.55 0 0 1 1.21-5.865l40.495-187.438-167.657 0.326a21.225 21.225 0 0 1-21.876-20.806 20.433 20.433 0 0 1 9.495-16.85l250.182-255.767c4.608-2.793 9.542-4.747 14.662-4.794a21.132 21.132 0 0 1 21.364 20.852 19.968 19.968 0 0 1-2.792 9.775l-40.216 184.32h167.843a21.178 21.178 0 0 1 21.644 20.852 20.294 20.294 0 0 1-9.495 16.943L474.112 763.95z"
									fill="#FFFFFF"
									p-id="1746"
								></path>
							</svg>
						</div>
					</div>
					<div class="right-info">
						<div class="info-detail">
							<div class="detail-content">
								<div class="detail-top">
									<a
										class="up-name"
										href="#"
									>
										TheShy
									</a>

									<a
										class="send-msg"
										href="#"
										><i class="iconfont icon-sixin"></i>&nbsp;发消息</a
									>
								</div>

								<div
									class="up-description"
									data-v-6944ac16=""
									title="商务合作邮箱：BD@yw.show氧望体育剪辑编导简历投递邮箱：HR@yw.show"
								>
									商务合作邮箱：BD@yw.show氧望体育剪辑编导简历投递邮箱：HR@yw.show
								</div>
							</div>
						</div>
						<div class="info-btn">
							<div class="btn charge-btn">
								<i class="iconfont icon-chongdian"></i>
								<span>充电 </span>
							</div>
							<div class="btn follow-btn">
								<i class="iconfont icon-liebiao2"></i>
								<span>已关注 168.3万</span>
							</div>
						</div>
					</div>
				</div>
				<div class="tanmu-list">
					<span>弹幕列表</span>
					<i class="iconfont icon-liebiao-dian"></i>
					<i class="iconfont icon-xiala"></i>
				</div>
				<div class="reco_list">
					<div class="next-play">
						<div class="head">
							<p class="next-title">接下来播放</p>
							<div
								class="auto-play"
								@click="isAutoPlay = !isAutoPlay"
							>
								<span>自动连播</span>
								<span
									id="switch-btn"
									:class="{ on: isAutoPlay }"
									class="switch-btn"
								></span>
							</div>
						</div>
						<div class="card-box">
							<div class="pic-box">
								<img
									alt=""
									src="/images/video-img/right-img/netx-play.png"
								/>
								<span class="duration">01:19</span>
							</div>
							<div class="info">
								<a href="#">
									<p
										class="title"
										title="死歌：die job？"
									>
										死歌：die job？
									</p>
								</a>
								<div class="up-name">
									<i class="iconfont icon-UPzhu"></i>
									<span class="name">TheShy</span>
								</div>
								<div class="play-info">
									<i class="iconfont icon-bofangshu"></i>
									107.2万
									<i class="iconfont icon-danmushu"></i>
									272
								</div>
							</div>
						</div>
						<div class="split-line"></div>
					</div>
					<div class="rec-list">
						<div
							v-for="video in videoList"
							:key="video.id"
							class="card-box"
						>
							<div class="pic-box">
								<img
									:src="video.img"
									alt=""
								/>
								<span class="duration">{{ video.duration }}</span>
							</div>
							<div class="info">
								<a href="#">
									<p
										class="title"
										title="{{video.title}}"
									>
										{{ video.title }}
									</p>
								</a>
								<div class="up-name">
									<i class="iconfont icon-UPzhu"></i>
									<span class="name">{{ video.upName }}</span>
								</div>
								<div class="play-info">
									<i class="iconfont icon-bofangshu"></i>
									{{ video.playNum }}
									<i class="iconfont icon-danmushu"></i>
									{{ video.commentNum }}
								</div>
							</div>
						</div>
					</div>
					<div class="rec-footer">展开</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import HeaderTop from '@/component/HeaderTop.vue'
import { useVideoPage } from '@/hooks/useVideoPage'
import { ref } from 'vue'

const { videoList } = useVideoPage()

let isAutoPlay = ref(false)
</script>
<style scoped>
@import '@/assets/css/videoPage.scss';
</style>
