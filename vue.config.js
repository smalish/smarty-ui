/*
 * @Author: yangying01
 * @Date: 2020-11-30 15:01:36
 * @LastEditors: yangying01
 * @LastEditTime: 2020-11-30 15:07:17
 */
const path = require('path')
const glob = require('glob')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 去掉eslint
  lintOnSave: false,

  chainWebpack: (config) => {
    // console.log(config)

    // 设置别名，即相对路径
    config.resolve.alias
      // .set('vue$', 'vue/dist/vue.esm.js')
      .set('@component', resolve('src/component'))
      .set('@', resolve('src'))

    

  }
 

}