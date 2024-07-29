import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('loginPage', () => {
	const isShow = ref(false)
	const isShowFace = ref(false)

	return { isShow, isShowFace }
})
