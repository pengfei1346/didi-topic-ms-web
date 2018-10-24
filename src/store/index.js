/**
 * Created by chenyangshun on 2017/3/23.
 *
 * 状态管理器
 *
 * @author: chenyangshun
 * @github: https://github.com/chenyangshun
 * @email: cys@basetnt.com
 * @Date: 2017/3/23 18:24
 * @Copyright(©) 2017 by chenyangshun.
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'

//引入模块
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './states'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
