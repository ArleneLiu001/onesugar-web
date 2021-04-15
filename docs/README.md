---
home: true
# heroImage: ./home.jpg
footer: '@2021 Arlene | 个人网站 | 鄂ICP备2020018075号'
---
<div class="base">
 <a v-for="(item,index) in lists" class="item" :key="index" :href="item.link">{{item.name}}</a>
</div>

<script>
 export default {
  data(){
    return {
      lists:[{name:'js基础',link:'/tech/js/chapter1/'},
      {name:'TypeScript',link:'/tech/ts/chapter1/'},
      {name:'Vue3',link:'/tech/vueNext/chapter1/'},
      {name:'React',link:'/tech/react/chapter1/'},
      {name:'博客',link:'/ts-axios/chapter1/'},]
    }
  }
 }
</script>