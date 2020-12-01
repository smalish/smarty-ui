<template>
  <div id="app">
    smarty-ui
    
    <div>
      <Button @click="clickButton">基础</Button>
      <Button type="primary" @click="clickButton">基础</Button>
      <Button type="success" @click="clickButton">成功</Button>
      <Button type="info" @click="clickButton">信息</Button>
      <Button type="warning" @click="clickButton">警告</Button>
      <Button type="danger" @click="clickButton">警告</Button>
    </div>

    <div>
      <Button disabled @click="clickButton">基础</Button>
      <Button disabled type="primary" @click="clickButton">基础</Button>
      <Button disabled type="success" @click="clickButton">成功</Button>
      <Button disabled type="info" @click="clickButton">信息</Button>
      <Button disabled type="warning" @click="clickButton">警告</Button>
      <Button disabled type="danger" @click="clickButton">警告</Button>
    </div>

    <div>
      <Button plain>基础</Button>
      <Button type="primary" plain>基础</Button>
      <Button type="success" plain>成功</Button>
      <Button type="info" plain>信息</Button>
      <Button type="warning" plain>警告</Button>
      <Button type="danger" plain>警告</Button>
    </div>

    <div>
      <Button round>基础</Button>
      <Button type="primary" round>基础</Button>
      <Button type="success" round>成功</Button>
      <Button type="info" round>信息</Button>
      <Button type="warning" round>警告</Button>
      <Button type="danger" round>警告</Button>
    </div>

    <div>
      <Button icon="s-icon-select">基础</Button>
      <Button type="primary" icon="s-icon-hide">基础</Button>
      <Button type="success" icon="s-icon-browse">成功</Button>
      <Button type="info" icon="s-icon-fabulous">信息</Button>
      <Button type="warning" icon="s-icon-favorite">警告</Button>
      <Button type="danger" icon="s-icon-arrow-right">警告</Button>
    </div>

    <div>
      <Button icon="s-icon-select" circle></Button>
      <Button type="primary" icon="s-icon-hide" circle></Button>
      <Button type="success" icon="s-icon-browse" circle></Button>
      <Button type="info" icon="s-icon-fabulous" circle></Button>
      <Button type="warning" icon="s-icon-favorite" circle></Button>
      <Button type="danger" icon="s-icon-arrow-right" circle></Button>
    </div>

  </div>
</template>

<script>
import Button from '@component/button'

export default {
  name: 'App',
  components: {
    Button
  },
  mounted(){
    console.log(this.props)
  },
  methods: {
    clickButton(e){
      console.log('clickButton')
    }
  }
}
</script>


