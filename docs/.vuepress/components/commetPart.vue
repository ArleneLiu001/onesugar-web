<template>
  <div>
     <div :id="'vcomments'+randomData"></div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      randomData:Math.floor(Math.random()*100000)+1,
    }
  },
  mounted(){
     console.log(222)
      // 评论模块
  new Valine({
          el: '#vcomments'+this.randomData,
          appId: 'zMYd2UBXe04IWcdDPx6Oti7i-gzGzoHsz',
          appKey: '1hqqtgHQ5uzACe9lBJrxYGi2'
      })
  }
}
</script>
