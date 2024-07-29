<template>
	<teleport to="body">
		<div
			v-show="loginStore.isShow"
			class="login-mask"
		>
			<div
				:class="{ focus: bgFocus }"
				class="login"
			>
				<div
					class="close-login"
					@click="loginStore.isShow = false"
				></div>
				<!-- 二维码 -->
				<div class="qr-code">
					<div class="text-top">扫描二维码登录</div>
					<div class="qr-img">
						<img
							:width="'160px'"
							alt="#"
							src="/images/QRcode.png"
						/>
					</div>
					<div class="text-btm">
						<p>请使用 <a href="#">哔哩哔哩客户端</a></p>
						<p>扫码登录或扫码下载APP</p>
					</div>
				</div>
				<!-- 分割线 -->
				<div class="line"></div>
				<!-- 账号密码区 -->
				<div class="user-info">
					<!-- 登录方式 -->
					<div class="login-way">
						<div
							:class="{ 'font-color': wayColor }"
							class="title-way"
							@click="switchWayA"
						>
							<span>密码登录</span>
						</div>
						<div class="way-line"></div>
						<div
							:class="{ 'font-color': wayColorSns }"
							class="title-way"
							@click="switchWay"
						>
							<span>短信登录</span>
						</div>
					</div>
					<!-- 账号密码区 -->
					<!-- 密码登录界面 -->
					<div
						v-show="switchUser"
						id="passwordLogin"
						class="login-pwd"
					>
						<form class="tab_form">
							<!-- 账号输入框 -->
							<div class="username">
								<div class="username-text">账号</div>
								<input
									v-model="inputTextName"
									maxlength="32"
									placeholder="请输入账号"
									type="text"
									@input="checkInput"
								/>
							</div>
							<!-- 分割线 -->
							<div class="mini-line"></div>
							<!-- 密码输入框 -->
							<div class="psw">
								<div class="psw-text">密码</div>
								<input
									v-model="inputTextPwd"
									placeholder="请输入密码"
									type="password"
									@blur="bgFocus = false"
									@focus="bgFocus = true"
									@input="checkInput"
								/>
								<div class="psw-forget">忘记密码？</div>
							</div>
						</form>
						<!-- 登录按钮 -->
						<div class="btn-sub">
							<div class="btn-sing-up">注册</div>
							<div
								:class="{ afterInput: btnColor }"
								class="btn-sign-in"
								@click="loginClickUser"
							>
								登录
							</div>
						</div>
					</div>

					<!-- 短信登录界面 -->
					<div
						v-show="switchSns"
						id="smsLogin"
						class="login-sns"
						style="display: none"
					>
						<form class="tab_form">
							<!-- 手机号输入框 -->
							<div class="phone">
								<div class="phone-text">+86&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<input
									v-model="inputVal"
									maxlength="13"
									oninput="this.value = this.value.replace(/[^0-9]/g, '')"
									placeholder="请输入手机号"
									type="text"
									@input="checkPhone"
								/>
								<div class="sns_line"></div>
								<div
									id="code_id"
									:class="{ 'code-after': codeBtn }"
									class="code-get"
									@click="getCodeClick"
								>
									{{ getCode }}
								</div>
							</div>
							<!-- 分割线 -->
							<div class="mini-line"></div>
							<!-- 验证码输入框 -->
							<div class="code">
								<div class="code-text">验证码</div>
								<input
									v-model="codeText"
									maxlength="6"
									oninput="this.value = this.value.replace(/[^0-9]/g, '')"
									placeholder="请输入验证码"
									type="text"
									@blur="bgFocus = false"
									@focus="bgFocus = true"
								/>
							</div>
						</form>
						<!-- 登录按钮 -->
						<div class="btn-sub btn-phone">
							<div
								class="btn-sign-phone"
								@click="loginClickSns"
							>
								登录/注册
							</div>
						</div>
					</div>

					<div class="login-other">
						<div class="other-top">其他方式登录</div>
						<div class="other-way">
							<div class="way-title">
								<img
									:width="'28px'"
									alt="#"
									src="/images/下载.png"
								/>
								&nbsp;&nbsp;
								<span>微信登录</span>
							</div>
							<div class="way-title">
								<img
									:width="'28px'"
									alt="#"
									src="/images/sina.png"
								/>
								&nbsp;&nbsp;
								<span>微博登录</span>
							</div>
							<div class="way-title">
								<img
									:width="'28px'"
									alt="#"
									src="/images/QQ.png"
								/>
								&nbsp;&nbsp;
								<span>QQ登录</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 下方文字 -->
				<div class="btm-title">
					<p>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</p>
					<p>
						登录或完成注册即代表你同意 <a href="#">用户协议</a> 和
						<a href="#">隐私政策</a>
					</p>
				</div>
				<div
					id="login-alert"
					:class="{ 'alert-active': isAlert }"
					class="login-alert"
				>
					{{ alertText }}
				</div>
			</div>
		</div>
	</teleport>
</template>
<script lang="ts" name="LoginPage" setup>
import { ref } from 'vue' // 数据
import {
	useCheckPhone,
	useInputCheck,
	useLoginWayClick,
} from '@/hooks/useInputPwd' // let login = ref()
import useLoginStore from '@/store/useLoginStore'

let bgFocus = ref(false)

const loginStore = useLoginStore()

// 检查输入是否为空
const { inputTextPwd, inputTextName, btnColor, checkInput } = useInputCheck()

// 点击登录方式
const { switchUser, switchSns, wayColorSns, wayColor, switchWayA, switchWay } =
	useLoginWayClick()

// 检查手机号是否合法 点击获取验证码
const { inputVal, codeBtn, checkPhone, getCode, getCodeClick } = useCheckPhone()
// const {} = useLoginClick()
const codeText = ref('')
const alertText = ref('')
const isAlert = ref(false)
const correctUser = 'admin'
const correctPwd = '123456'
const correctPhone = '18437901651'
const correctCode = '123456'

function errorAssert(error: string) {
	isAlert.value = true
	alertText.value = error
	setTimeout(() => {
		isAlert.value = false
	}, 2000)
}

function delayRun(sec: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('success')
		}, sec * 1000)
	})
}

async function loginClickUser() {
	if (
		inputTextName.value === correctUser &&
		inputTextPwd.value === correctPwd
	) {
		isAlert.value = true
		alertText.value = '登录成功'
		await delayRun(2)
		loginStore.isShowFace = true
		loginStore.isShow = false
	} else {
		if (inputTextName.value == '' && inputTextPwd.value == '') {
			errorAssert('请输入账号或密码')
		} else if (inputTextName.value == '') {
			errorAssert('请输入账号')
		} else if (inputTextPwd.value == '') {
			errorAssert('请输入密码')
		} else {
			errorAssert('账号或密码错误')
		}
	}
}

function loginClickSns() {
	if (inputVal.value === correctPhone && codeText.value === correctCode) {
		isAlert.value = true
		alertText.value = '登录成功'
		setTimeout(() => {
			loginStore.isShowFace = true
			loginStore.isShow = false
		}, 2000)
	} else {
		if (inputVal.value == '' && codeText.value == '') {
			errorAssert('请输入手机号或验证码')
		} else if (inputVal.value == '') {
			errorAssert('请输入手机号')
		} else if (codeText.value == '') {
			errorAssert('请输入验证码')
		} else {
			errorAssert('手机号或验证码错误')
		}
	}
}
</script>
<style scoped>
@import '@/assets/css/loginPage.scss';
</style>
