<!--
 * @Author: yangying01
 * @Date: 2020-11-30 14:15:55
 * @LastEditors: yangying01
 * @LastEditTime: 2020-12-01 11:49:05
-->

<template>
    <div class="button-view" :class="[`s-button--${type}`, {'is-plain': plain, 'is-round': round, 'is-circle': circle}]">
      <i v-if="icon" :class="[icon]"></i>
      <span v-if="this.$slots.default"><slot></slot></span>
    </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped>
  .button-view{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
  }
  .button-view+.button-view{
    margin-left: 10px;
  }
  .s-button--primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .s-button--success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .s-button--info{
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
  .s-button--warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  .s-button--danger{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }

  .s-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  .s-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  .s-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  .s-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  .s-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  .is-round{
    border-radius: 20px;
  }
  .is-circle{
    padding: 12px;
    border-radius: 50%;
  }

  [class*="s-icon-"]+span{
    margin-left: 5px;
  }

  [class*="s-icon-"]{
    /* font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    font-family: "smarty-icons"!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .s-icon-arrow-right::before{
    content: "\e665";
  }
  .s-icon-browse::before{
    content: "\e666"; //&#xe666;会被转义，改为\e666， <span class="iconfont">&#xe666;</span>
  }
  .s-icon-bottom::before{
    content: "\e667";
  }
  .s-icon-bad::before{
    content: "\e668";
  }
  .s-icon-arrow-double-left::before{
    content: "\e669";
  }
  .s-icon-arrow-double-right::before{
    content: "\e66a";
  }
  .s-icon-camera::before{
    content: "\e66b";
  }
  .s-icon-code::before{
    content: "\e66c";
  }
  .s-icon-close::before{
    content: "\e66d";
  }
  .s-icon-comment::before{
    content: "\e66e";
  }
  .s-icon-favorite::before{
    content: "\e66f";
  }
  .s-icon-fabulous::before{
    content: "\e670";
  }
  .s-icon-hide::before{
    content: "\e673";
  }
  .s-icon-home::before{
    content: "\e674";
  }
  .s-icon-prompt::before{
    content: "\e67b";
  }
  .s-icon-select::before{
    content: "\e67e";
  }
  .s-icon-success::before{
    content: "\e67f";
  }
  .s-icon-telephone::before{
    content: "\e680";
  }
  .s-icon-unlock::before{
    content: "\e682";
  }
  .s-icon-user::before{
    content: "\e683";
  }




</style>