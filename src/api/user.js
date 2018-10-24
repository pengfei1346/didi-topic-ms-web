/**
 * @file: user.
 * @intro: 用户请求数据配置.
 * @author: chenyangshun.
 * @email: cys@basetnt.com.
 * @Date: 2017/5/8 15:18.
 * @Copyright(©) 2017 by chenyangshun.
 *
 */

import fetch from 'common/fetch'
import {port_user} from 'common/port_uri'

//登录
export function login(data) {
  return fetch({
    url: port_user.login,
    method: 'post',
    data
  })
}
//登出
export function logout() {
  return fetch({
    url: port_user.logout,
    method: 'post'
  })
}
