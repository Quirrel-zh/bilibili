import { ref } from 'vue'

// 检查输入是否为空

export function useInputCheck() {
	const inputTextName = ref('')
	const inputTextPwd = ref('')
	const btnColor = ref(false)

	function checkInput() {
		btnColor.value = inputTextName.value != '' && inputTextPwd.value !== ''
	}

	return { inputTextName, inputTextPwd, btnColor, checkInput }
}

// 点击登录方式

export function useLoginWayClick() {
	const switchSns = ref(false)
	const switchUser = ref(true)
	const wayColor = ref(true)
	const wayColorSns = ref(false)

	function ifVal() {
		if (switchUser.value) {
			wayColor.value = true
			switchSns.value = false
			wayColorSns.value = false
		} else {
			wayColor.value = false
			switchSns.value = true
			wayColorSns.value = true
		}
	}

	function switchWay() {
		switchUser.value = false
		ifVal()
	}

	function switchWayA() {
		switchUser.value = true
		ifVal()
	}

	return { switchWay, switchWayA, switchUser, wayColor, switchSns, wayColorSns }
}

// 检查手机号是否合法

export function useCheckPhone() {
	const inputVal = ref('')
	const getCode = ref('获取验证码')

	const codeBtn = ref(false)

	function checkPhone() {
		codeBtn.value =
			/^1[0-9]{10}$/.test(inputVal.value) && !/(.)\1{10}/.test(inputVal.value)
		console.log(codeBtn.value)
	}

	function getCodeClick() {
		function countdown(seconds: number) {
			const interval = setInterval(() => {
				if (seconds > 0) {
					codeBtn.value = false
					getCode.value = seconds + '秒后重新获取'
					seconds--
				} else {
					clearInterval(interval)
					getCode.value = '获取验证码'
					codeBtn.value = true
				}
			}, 1000)
		}

		countdown(5)
	}

	return { inputVal, codeBtn, checkPhone, getCode, getCodeClick }
}
