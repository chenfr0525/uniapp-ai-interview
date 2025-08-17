import {
	defineStore
} from 'pinia'
import {
	ref
} from 'vue'

// 定义 Store
export const useUserStore = defineStore(
	'AI-User',
	() => {
		// 用户信息
		const userInfo = ref({
			id: '20256751',
			username: '糖包子',
			avatar:'/static/images/avatar.jpeg'
		})

		// 保存信息，登录时使用
		const setUserInfo = (val) => {
			userInfo.value = val
		}

		// 清理信息，退出时使用
		const clearUserInfo = () => {
			userInfo.value = undefined
		}

		// 记得 return
		return {
			userInfo,
			setUserInfo,
			clearUserInfo,
		}
	}
)