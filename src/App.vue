<template>
  <div id="app">
    smarty-ui
    
    <div>
      <Button>基础</Button>
      <Button type="primary">基础</Button>
      <Button type="success">成功</Button>
      <Button type="info">信息</Button>
      <Button type="warning">警告</Button>
      <Button type="danger">警告</Button>
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
  }
}
</script>


