/*
 * @Author: yangying01
 * @description: 
 * @Date: 2020-12-08 20:46:55
 * @LastEditors: yangying01
 * @LastEditTime: 2020-12-08 21:10:51
 */
import Vue from 'vue'
import App from './App.vue'
import SmartyUI from '../packages/index'

Vue.config.productionTip = false
Vue.use(SmartyUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
