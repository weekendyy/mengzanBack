import func from '../../public/func.js'
import api from '../../api/api.js'

/**
 * 获取首页默认地址
 */

export const Login = (query,callback) => func.ajaxPost(api.login, query, (res)=>{
	callback(res)
})