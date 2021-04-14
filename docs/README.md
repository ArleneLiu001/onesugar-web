---
home: true
# heroImage: ./home.jpg
footer: '@2021 Arlene | 个人网站 | 鄂ICP备2020018075号'
---
<div class="base">
 <div v-for="(item,index) in lists" class="item" :key="index">{{item.name}}</div>
</div>

<script>
 export default {
  data(){
    return {
      lists:[{name:'js基础',link:'/'},{name:'TypeScript'},{name:'Vue3'},{name:'React'},{name:'博客'},]
    }
  }
 }
</script>