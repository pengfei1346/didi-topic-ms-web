/**
 * @file: tools_uri.
 * @intro: uri编码工具类.
 * @author: chenyangshun.
 * @email: cys@basetnt.com.
 * @Date: 2017/5/9 14:03.
 * @Copyright(©) 2017 by chenyangshun.
 *
 */

export default new class Uri {
  constructor() {
  }

  //URI 解码
  decode(value) {
    return decodeURIComponent(value)
  }

  //URI 编码
  encode(value) {
    return encodeURIComponent(value)
  }
}
