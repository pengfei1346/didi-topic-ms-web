/**
 * Created by chenyangshun on 2018/10/24.
 *
 * @author: chenyangshun
 * @github: https://github.com/chenyangshun
 * @email: cys@basetnt.com
 * @Date: 2018/10/24 16:04
 * @Copyright(©) 2017 by chenyangshun.
 *
 */

import {cookieStorage} from 'common/storage'

export default {
  //用户信息和是否登录
  user_info: cookieStorage.get('user_info')
}
