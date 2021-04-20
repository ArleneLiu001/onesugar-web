---
home: true
# heroImage: ./home.jpg
footer: '@2021 Arlene | 个人网站 | 鄂ICP备2020018075号'
---
<div class="base">
 <a v-for="(item,index) in lists" class="item" :key="index" :href="item.link">{{item.name}}</a>
</div>
<div class="part">

 <ul class="hot">
   <div class="hot-title">最新文章</div>
  <li v-for="(item,index) in newList" class="item" :key="index" >
  <a :href="item.link">{{item.name}}</a>
  <div class="date-info">{{item.date}}</div>
  </li>
  <div class="more"><a :href="moreUrl">更多文章...</a></div>
 </ul>
  <div class="person-info"></div>
</div>

<script>
 export default {
  data(){
    return {
      lists:[{name:'js基础',link:'/tech/js/chapter1/'},
      {name:'TypeScript',link:'/tech/ts/chapter1/'},
      {name:'Vue3',link:'/tech/vueNext/chapter1/'},
      {name:'React',link:'/tech/react/chapter1/'},
      {name:'博客',link:'/ts-axios/chapter1/'},],
      newList:[
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'},
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'},
       {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'},
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'},
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'}
      ],
      moreUrl:'/tech/js/chapter1/'
    }
  }
 }
</script>