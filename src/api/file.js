/**
 * @file: file.
 * @intro: file请求数据配置.
 * @author: chenyangshun.
 * @email: cys@basetnt.com.
 * @Date: 2017/5/8 15:31.
 * @Copyright(©) 2017 by chenyangshun.
 *
 */

import fetch from 'common/fetch'
import {port_file} from 'common/port_uri'

//图片上传
export function image_upload(data) {
  return fetch({
    url: port_file.image,
    method: 'post',
    data
  })
}
