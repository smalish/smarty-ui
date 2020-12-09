/*
 * @Author: yangying01
 * @description: 
 * @Date: 2020-12-09 10:46:45
 * @LastEditors: yangying01
 * @LastEditTime: 2020-12-09 10:59:15
 */
// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './button'
import './fonts/iconfont.css'

const components = [
  Button
]
// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}
