/**
 * Created by chenyangshun on 2017/3/26.
 *
 * @author: chenyangshun
 * @github: https://github.com/chenyangshun
 * @email: cys@basetnt.com
 * @Date: 2017/3/26 15:14
 * @Copyright(©) 2017 by chenyangshun.
 *
 */

import Mock from 'mockjs'
import {port_code, port_file} from 'common/port_uri'

Mock.mock(new RegExp(port_file.image_upload), {
  code: port_code.success,
  msg: "图片上传成功",
  data: {
    'id|10-100': 1,
    "name": "@ctitle",
    "image": "@image"
  }
})
