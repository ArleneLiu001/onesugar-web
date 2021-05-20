<template>
  <div>
  </div>
</template>
<script>
export default {
  name:'live2D',
 mounted(){
   setTimeout(() => {
    window.L2Dwidget.init({
      pluginRootPath: '/live2dw/',
      pluginJsPath: 'lib/',
      pluginModelPath: 'live2d-widget-model-koharu/assets/',
      tagMode: false,
      debug: false,
      model: { jsonPath: '/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
      display: { position: 'right', width: 150, height: 300 },
      mobile: { show: false },
      log: false
    })
  }, 1000)
 }
}
</script>

<style>

</style>