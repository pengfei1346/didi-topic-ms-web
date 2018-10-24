/**
 * Created by chenyangshun on 2017/3/23.
 *
 * 自定义插件
 *
 * @author: chenyangshun
 * @github: https://github.com/chenyangshun
 * @email: cys@basetnt.com
 * @Date: 2017/3/23 18:29
 * @Copyright(©) 2017 by chenyangshun.
 *
 */
import dateFormat from 'plugins/date'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $dateFormat: {
      get() {
        return dateFormat
      }
    }
  })
}

export default {
  install
}
